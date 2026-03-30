'use server'

import { gameService } from '@lib/game-engine/service'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

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
            redirect('/api/logout')
        }
        // Unique constraint: Pokémon already in Pokédex (race condition fallback)
        if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
            return {
                success: true,
                message: '¡Ya tenías este Pokémon en tu Pokédex! ¡Pero lo has vuelto a capturar!',
                pokeballsRemaining: 0,
                animation: 'success' as const
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
            redirect('/api/logout')
        }
        throw new Error(error.message || 'Error while loading the daily game')
    }
}
