import { getDailyGameAction } from '@lib/actions/game'
import { GameBoard } from '@components/client/GameBoard'
import { GameRules } from './GameRules'
import { PokemonRepository } from '@lib/db/repositories/pokemon.repository'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const pokemonRepo = new PokemonRepository()

// Always fetch fresh data for the current day (no caching)
export const dynamic = 'force-dynamic'

export default async function GamePage() {
    const cookieStore = await cookies()
    const userId = cookieStore.get('userId')?.value

    if (!userId) {
        redirect('/login')
    }

    // Get or create today’s game
    const gameState = await getDailyGameAction(userId)
    const pokemon = await pokemonRepo.getPokemonById(gameState.pokemonId)

    if (!pokemon) {
        return <div>Failed to load today&apos;s Pokémon</div>
    }

    return (
        <div className="w-full font-sans pb-6 md:pb-8 md:min-w-4xl">
            <header className="mb-8">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-bold uppercase tracking-tighter"
                >
                    <ChevronLeft className="w-5 h-5" />
                    Back to Pokédex
                </Link>
            </header>

            <div className="max-w-4xl mx-auto space-y-6">
                <GameBoard
                    initialGameState={gameState}
                    pokemon={{
                        id: pokemon.id,
                        name: pokemon.name,
                        sprite: pokemon.sprite,
                        types: pokemon.types as string[],
                        baseExperience: pokemon.baseExperience,
                        isLegendary: pokemon.isLegendary
                    }}
                />
                <GameRules />
            </div>
        </div>
    )
}
