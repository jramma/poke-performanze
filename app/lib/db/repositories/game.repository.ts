// app/lib/db/repositories/game.repository.ts
import { prisma, GameSession, DailyLog } from '../index'

export class GameRepository {
    /**
     * Create a new game session.
     */
    async createSession(userId: string, pokemonId: number): Promise<GameSession> {
        return prisma.gameSession.create({
            data: {
                userId,
                pokemonId,
                attempts: 0,
                pokeballsUsed: 0
            }
        })
    }

    /**
     * Update a game session.
     */
    async updateSession(
        sessionId: string,
        data: {
            attempts?: number
            pokeballsUsed?: number
            success?: boolean
            endedAt?: Date
        }
    ) {
        return prisma.gameSession.update({
            where: { id: sessionId },
            data
        })
    }

    /**
     * Log the daily attempt for a user.
     */
    async logDailyAttempt(
        userId: string,
        pokemonId: number,
        caught: boolean,
        attempts: number,
        pokeballsLeft: number
    ): Promise<DailyLog> {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        return prisma.dailyLog.upsert({
            where: {
                userId_date: {
                    userId,
                    date: today
                }
            },
            update: {
                attempts,
                caught,
                pokeballsLeft
            },
            create: {
                userId,
                pokemonId,
                date: today,
                attempts,
                caught,
                pokeballsLeft
            }
        })
    }

    /**
     * Get a user&apos;s daily history.
     */
    async getUserHistory(userId: string, days: number = 30) {
        const startDate = new Date()
        startDate.setDate(startDate.getDate() - days)

        return prisma.dailyLog.findMany({
            where: {
                userId,
                date: {
                    gte: startDate
                }
            },
            include: {
                pokemon: true
            },
            orderBy: {
                date: 'desc'
            }
        })
    }

    /**
     * Global game statistics.
     */
    async getGlobalStats() {
        const [
            totalUsers,
            totalCatches,
            totalSessions,
            legendaryCatches,
            topPokemon
        ] = await Promise.all([
            prisma.user.count(),
            prisma.caughtPokemon.count(),
            prisma.gameSession.count(),
            prisma.caughtPokemon.count({
                where: {
                    pokemon: {
                        isLegendary: true
                    }
                }
            }),
            prisma.caughtPokemon.groupBy({
                by: ['pokemonId'],
                _count: true,
                orderBy: {
                    _count: {
                        pokemonId: 'desc'
                    }
                },
                take: 5
            })
        ])

        return {
            totalUsers,
            totalCatches,
            totalSessions,
            legendaryCatches,
            topPokemon
        }
    }
}