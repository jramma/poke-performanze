// app/lib/db/repositories/user.repository.ts
import { prisma, User, Prisma } from '../index'

export class UserRepository {
    /**
     * Crear nuevo usuario
     */
    async createUser(data: { username: string; email: string; password: string }): Promise<User> {
        return prisma.user.create({
            data: {
                ...data,
                pokeballs: 6,
                maxPokeballs: 6,
                dailyAttempts: 0,
            }
        })
    }

    /**
     * Obtener usuario con sus Pokémon atrapados
     */
    async getUserWithPokemon(userId: string) {
        return prisma.user.findUnique({
            where: { id: userId },
            include: {
                caughtPokemon: {
                    include: {
                        pokemon: true
                    },
                    orderBy: {
                        caughtAt: 'desc'
                    }
                }
            }
        })
    }

    /**
     * Actualizar progreso diario
     */
    async updateDailyProgress(
        userId: string,
        data: {
            caughtToday: boolean
            dailyAttempts: number
            lastGameDate: Date
        }
    ) {
        return prisma.user.update({
            where: { id: userId },
            data
        })
    }

    /**
     * Incrementar experiencia y verificar subida de nivel
     */
    async addExperience(userId: string, experience: number) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { experience: true, level: true }
        })

        if (!user) throw new Error('Usuario no encontrado')

        const newExp = user.experience + experience
        const newLevel = Math.floor(newExp / 100) + 1 // 100 exp por nivel

        return prisma.user.update({
            where: { id: userId },
            data: {
                experience: newExp,
                level: newLevel,
                ...(newLevel > user.level && {
                    maxPokeballs: Math.min(10, 6 + (newLevel - user.level)) // +1 pokeball cada nivel hasta 10
                })
            }
        })
    }

    /**
     * Resetear juego diario (ejecutar en cron)
     */
    /**
     * Resetear juego diario (ejecutar en cron)
     */
    async resetDailyForAllUsers() {
        return prisma.$executeRaw`
            UPDATE "User"
            SET "caughtToday" = false,
                "dailyAttempts" = 0,
                "dailyPokemonId" = NULL,
                "pokeballs" = "maxPokeballs"
            WHERE "caughtToday" = true OR "dailyAttempts" > 0
        `
    }

    /**
     * Obtener ranking de usuarios
     */
    async getLeaderboard(limit: number = 10) {
        return prisma.user.findMany({
            take: limit,
            orderBy: [
                { totalCatches: 'desc' },
                { currentStreak: 'desc' }
            ],
            select: {
                username: true,
                level: true,
                totalCatches: true,
                currentStreak: true,
                maxStreak: true
            }
        })
    }
}