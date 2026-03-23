'use server'

import { gameService } from '@lib/game-engine/service'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { Prisma } from '@prisma/client'

export async function catchPokemonAction(userId: string, sessionId?: string) {
    try {
        const result = await gameService.processAttempt(userId, sessionId)

        // Revalidate the dashboard so the new caught Pokémon appears immediately
        if (result.success) {
            revalidatePath('/')
        }

        return result
    } catch (error: any) {
        if (error.message === 'User not found') {
            redirect('/login')
        }
        // Unique constraint: Pokémon already caught today
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return {
                success: false,
                message: '¡Ya tienes este Pokémon! Vuelve mañana.',
                pokeballsRemaining: 0,
                animation: 'break' as const
            }
        }
        return {
            success: false,
            message: 'Error while trying to catch the Pokémon',
            pokeballsRemaining: 0,
            animation: 'break' as const
        }
    }
}

export async function getDailyGameAction(userId: string) {
    try {
        return await gameService.getOrCreateDailyGame(userId)
    } catch (error: any) {
        if (error.message === 'User not found') {
            redirect('/login')
        }
        throw new Error(error.message || 'Error while loading the daily game')
    }
}
