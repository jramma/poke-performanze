// app/lib/db/repositories/user.repository.ts
import { prisma, User, Prisma } from '../index'

export class UserRepository {
    /**
     * Create a new user.
     * The password must already be hashed (e.g. with hashPassword from @lib/auth/password).
     */
    async createUser(data: { username: string; nickname: string; email: string; password: string }): Promise<User> {
        return prisma.user.create({
            data: {
                username: data.username,
                nickname: data.nickname,
                email: data.email,
                password: data.password,
                pokeballs: 6,
                maxPokeballs: 6,
                dailyAttempts: 6,
                experience: 0,
                level: 1,
                currentStreak: 0,
                maxStreak: 0,
                totalCatches: 0,
                caughtToday: false
            }
        })
    }

    /**
     * Find user by email.
     */
    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email }
        })
    }

    /**
     * Find user by username.
     */
    async findByUsername(username: string) {
        return prisma.user.findUnique({
            where: { username }
        })
    }

    /**
     * Update nickname and keep username in sync.
     */
    async updateNickname(userId: string, nickname: string) {
        return prisma.user.update({
            where: { id: userId },
            data: { nickname, username: nickname }
        })
    }

    /**
     * Update password (expects hash, never plain text).
     */
    async updatePassword(userId: string, hashedPassword: string) {
        return prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword }
        })
    }

    /**
     * Find user by id.
     */
    async findById(id: string) {
        return prisma.user.findUnique({
            where: { id }
        })
    }

    /**
     * Find user by IP (requires lastIp field in User; currently unused).
     */
    async findByIp(_ip: string) {
        return prisma.user.findFirst({
            where: { id: '' }
        })
    }

    /**
     * Get user with their caught Pokémon.
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
     * Update daily game progress.
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
     * Increment experience and check for level up.
     */
    async addExperience(userId: string, experience: number) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { experience: true, level: true }
        })

        if (!user) throw new Error('User not found')

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
                nickname: true,
                level: true,
                totalCatches: true,
                currentStreak: true,
                maxStreak: true
            }
        })
    }

    /**
     * Delete a user and their related data.
     * This removes dependent records first to avoid FK constraint errors.
     */
    async deleteUserById(userId: string) {
        await prisma.$transaction([
            prisma.caughtPokemon.deleteMany({ where: { userId } }),
            prisma.gameSession.deleteMany({ where: { userId } }),
            prisma.dailyLog.deleteMany({ where: { userId } }),
            prisma.userAchievement.deleteMany({ where: { userId } }),
            prisma.user.delete({ where: { id: userId } }),
        ])
    }
}