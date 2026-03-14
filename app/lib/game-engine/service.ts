// app/lib/game-engine/service.ts
import { GameEngine } from './core'
import {
    UserRepository,
    PokemonRepository,
    GameRepository
} from '@lib/db/repositories'
import { prisma } from '@lib/db'
import { CatchResult, GameState, GAME_CONSTANTS } from './types'

export class GameService {
    private engine: GameEngine
    private userRepo: UserRepository
    private pokemonRepo: PokemonRepository
    private gameRepo: GameRepository

    constructor() {
        this.engine = new GameEngine()
        this.userRepo = new UserRepository()
        this.pokemonRepo = new PokemonRepository()
        this.gameRepo = new GameRepository()
    }

    /**
     * Initialize or resume the daily game for a user.
     */
    async getOrCreateDailyGame(userId: string): Promise<GameState> {
        const user = await this.userRepo.getUserWithPokemon(userId)

        if (!user) {
            throw new Error('User not found')
        }

        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const lastGame = user.lastGameDate
        const lastGameDay = lastGame ? new Date(lastGame).setHours(0, 0, 0, 0) : null
        const isDevMode = process.env.NODE_ENV === 'development'

        // If the user already played today but did not catch: resume session
        // In dev we always start a fresh game, so we skip this branch there
        if (!isDevMode && lastGameDay === today.getTime() && !user.caughtToday && user.dailyPokemonId) {
            const activeSession = await prisma.gameSession.findFirst({
                where: {
                    userId,
                    pokemonId: user.dailyPokemonId,
                    endedAt: null
                },
                orderBy: { startedAt: 'desc' }
            })
            return {
                userId: user.id,
                pokemonId: user.dailyPokemonId,
                pokeballsRemaining: user.dailyAttempts,
                attempts: 6 - user.dailyAttempts,
                isCaught: false,
                gameOver: user.dailyAttempts === 0,
                lastAttemptDate: user.lastGameDate || new Date(),
                sessionId: activeSession?.id
            }
        }

        // Nuevo día
        const dailyPokemon = await this.pokemonRepo.getRandomPokemon()

        // Crear sesión de juego
        const session = await this.gameRepo.createSession(userId, dailyPokemon.id)

        // Actualizar usuario
        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: {
                lastGameDate: new Date(),
                dailyPokemonId: dailyPokemon.id,
                dailyAttempts: user.maxPokeballs, // Usar su máximo actual
                caughtToday: false
            }
        })

        return {
            userId,
            pokemonId: dailyPokemon.id,
            pokeballsRemaining: updatedUser.dailyAttempts,
            attempts: 0,
            isCaught: false,
            gameOver: false,
            lastAttemptDate: new Date(),
            sessionId: session.id
        }
    }

    /**
     * Process a capture attempt for the current daily game.
     */
    async processAttempt(userId: string, sessionId?: string): Promise<CatchResult> {
        // Use a transaction for consistency
        return await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: userId },
                include: {
                    dailyPokemon: true,
                    gameSessions: {
                        where: {
                            ...(sessionId && { id: sessionId }),
                            endedAt: null
                        }
                    }
                }
            })

            if (!user?.dailyPokemon) {
                throw new Error('No active game')
            }

            // If a specific session was provided and there is no active match,
            // treat it as no active game to avoid desynchronizing data.
            if (sessionId && user.gameSessions.length === 0) {
                throw new Error('No active game')
            }

            // Basic limits
            if (user.caughtToday) {
                return {
                    success: false,
                    pokeballsRemaining: user.dailyAttempts,
                    message: 'You already caught today’s Pokémon. Come back tomorrow.',
                    animation: 'break'
                }
            }

            if (user.dailyAttempts <= 0) {
                return {
                    success: false,
                    pokeballsRemaining: 0,
                    message: 'No Pokéballs left! The Pokémon escaped.',
                    animation: 'break'
                }
            }

            // Calcular resultado
            const result = this.engine.attemptCatchWithDifficulty(
                user.dailyAttempts,
                {
                    id: user.dailyPokemon.id,
                    name: user.dailyPokemon.name,
                    sprite: user.dailyPokemon.sprite,
                    types: user.dailyPokemon.types as string[],
                    baseExperience: user.dailyPokemon.baseExperience,
                    isLegendary: user.dailyPokemon.isLegendary
                },
                user.level
            )

            // Actualizar sesión activa: la del Pokémon del día (evita usar sesión de otro día)
            const activeSession = sessionId
                ? user.gameSessions[0]
                : user.gameSessions.find((s) => s.pokemonId === user.dailyPokemon!.id) ?? user.gameSessions[0]
            if (activeSession) {
                await tx.gameSession.update({
                    where: { id: activeSession.id },
                    data: {
                        attempts: { increment: 1 },
                        pokeballsUsed: { increment: 1 },
                        ...(result.success && {
                            success: true,
                            endedAt: new Date()
                        }),
                        ...(result.pokeballsRemaining === 0 && {
                            endedAt: new Date()
                        })
                    }
                })
            }

            // Calcular experiencia/nivel si atrapó
            let newExp = user.experience
            let newLevel = user.level
            let shouldIncreaseMaxPokeballs = false

            if (result.success) {
                const gainedExp = result.experience || 100
                newExp = user.experience + gainedExp
                newLevel = Math.floor(newExp / 100) + 1 // 100 exp por nivel
                shouldIncreaseMaxPokeballs = newLevel > user.level
            }

            // Actualizar usuario (intento + progreso + experiencia/level)
            await tx.user.update({
                where: { id: userId },
                data: {
                    dailyAttempts: result.pokeballsRemaining,
                    ...(result.success && {
                        caughtToday: true,
                        totalCatches: { increment: 1 },
                        currentStreak: { increment: 1 },
                        ...(user.currentStreak + 1 > user.maxStreak && {
                            maxStreak: user.currentStreak + 1
                        }),
                        experience: newExp,
                        level: newLevel,
                        ...(shouldIncreaseMaxPokeballs && {
                            // Incrementar desde el máximo actual del usuario, no desde 6 fijo
                            maxPokeballs: Math.min(10, user.maxPokeballs + (newLevel - user.level))
                        })
                    })
                }
            })

            // Si atrapó, guardar registro de captura
            if (result.success) {
                await tx.caughtPokemon.create({
                    data: {
                        userId,
                        pokemonId: user.dailyPokemon.id,
                        critical: result.critical || false,
                        experience: result.experience || 100
                    }
                })
            }

            // Registrar log diario dentro de la misma transacción
            const today = new Date()
            today.setHours(0, 0, 0, 0)

            await tx.dailyLog.upsert({
                where: {
                    userId_date: {
                        userId,
                        date: today
                    }
                },
                update: {
                    attempts: 6 - result.pokeballsRemaining,
                    caught: result.success,
                    pokeballsLeft: result.pokeballsRemaining
                },
                create: {
                    userId,
                    pokemonId: user.dailyPokemon.id,
                    date: today,
                    attempts: 6 - result.pokeballsRemaining,
                    caught: result.success,
                    pokeballsLeft: result.pokeballsRemaining
                }
            })

            return result
        })
    }

    /**
     * Obtener estadísticas del usuario
     */
    async getUserStats(userId: string) {
        const [user, history, caughtCount, legendaryCount] = await Promise.all([
            this.userRepo.getUserWithPokemon(userId),
            this.gameRepo.getUserHistory(userId),
            prisma.caughtPokemon.count({ where: { userId } }),
            prisma.caughtPokemon.count({
                where: {
                    userId,
                    pokemon: { isLegendary: true }
                }
            })
        ])

        return {
            username: user?.username,
            level: user?.level,
            experience: user?.experience,
            nextLevelExp: (user?.level || 1) * 100,
            totalCatches: caughtCount,
            legendaryCatches: legendaryCount,
            currentStreak: user?.currentStreak,
            maxStreak: user?.maxStreak,
            pokeballs: user?.pokeballs,
            maxPokeballs: user?.maxPokeballs,
            recentActivity: history.slice(0, 7) // Última semana
        }
    }
}

// Exportar instancia única (singleton)
export const gameService = new GameService()