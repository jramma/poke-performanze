import { PrismaClient, Prisma } from './generated'

// Singleton pattern para evitar múltiples conexiones en desarrollo
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { Prisma }
export type { 
    User, 
    Pokemon, 
    CaughtPokemon, 
    GameSession, 
    DailyLog, 
    Achievement, 
    UserAchievement 
} from './generated'
export * from './generated'