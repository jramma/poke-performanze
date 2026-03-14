// app/lib/game-engine/service.ts
import { GameEngine } from './core'
import {
    UserRepository,
    PokemonRepository,
    GameRepository
} from '../db/repositories'
import { prisma } from '../db'
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
     * Inicializar juego diario
     */
    async getOrCreateDailyGame(userId: string): Promise<GameState> {
        const user = await this.userRepo.getUserWithPokemon(userId)

        if (!user) {
            throw new Error('Usuario no encontrado')
        }

        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const lastGame = user.lastGameDate
        const lastGameDay = lastGame ? new Date(lastGame).setHours(0, 0, 0, 0) : null

        // Si ya jugó hoy pero no atrapó
        if (lastGameDay === today.getTime() && !user.caughtToday && user.dailyPokemonId) {
            return {
                userId: user.id,
                pokemonId: user.dailyPokemonId,
                pokeballsRemaining: user.dailyAttempts,
                attempts: 6 - user.dailyAttempts,
                isCaught: false,
                gameOver: user.dailyAttempts === 0,
                lastAttemptDate: user.lastGameDate || new Date()
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
     * Procesar intento de captura
     */
    async processAttempt(userId: string, sessionId?: string): Promise<CatchResult> {
        // Usar transacción para consistencia
        return await prisma.$transaction(async (tx) => {
            const user = await tx.user.findUnique({
                where: { id: userId },
                include: {
                    dailyPokemon: true,
                    gameSessions: {
                        where: {
                            ...(sessionId && { id: sessionId }),
                            endedAt: null
                        },
                        take: 1
                    }
                }
            })

            if (!user?.dailyPokemon) {
                throw new Error('No hay juego activo')
            }

            // Verificar límites
            if (user.caughtToday) {
                return {
                    success: false,
                    pokeballsRemaining: user.dailyAttempts,
                    message: '¡Ya atrapaste tu Pokémon diario! Vuelve mañana',
                    animation: 'break'
                }
            }

            if (user.dailyAttempts <= 0) {
                return {
                    success: false,
                    pokeballsRemaining: 0,
                    message: '¡Sin pokeballs! El Pokémon escapó',
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

            // Actualizar sesión activa
            const activeSession = user.gameSessions[0]
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

            // Actualizar usuario
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
                        })
                    })
                }
            })

            // Si atrapó, guardar registro
            if (result.success) {
                await tx.caughtPokemon.create({
                    data: {
                        userId,
                        pokemonId: user.dailyPokemon.id,
                        critical: result.critical || false,
                        experience: result.experience || 100
                    }
                })

                // Añadir experiencia
                await this.userRepo.addExperience(userId, result.experience || 100)
            }

            // Registrar log diario
            await this.gameRepo.logDailyAttempt(
                userId,
                user.dailyPokemon.id,
                result.success,
                6 - result.pokeballsRemaining,
                result.pokeballsRemaining
            )

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