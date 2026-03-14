'use server'

import { gameService } from '@lib/game-engine/service'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

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
        return {
            success: false,
            message: error.message || 'Error while trying to catch the Pokémon',
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
