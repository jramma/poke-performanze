import { getDailyGameAction } from '@lib/actions/game'
import { GameBoard } from '@components/client/GameBoard'
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
        <main className="w-full font-sans py-6 md:py-8">
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
                <section className="bg-card/70 border-2 border-dashed border-primary rounded-2xl p-4 text-xs md:text-sm text-muted-foreground font-medium leading-relaxed">
                    <h2 className="font-black uppercase tracking-widest text-foreground text-[11px] mb-2">
                        How the daily game works
                    </h2>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Each day a <span className="font-bold text-foreground">single wild Pokémon</span> appears for you to catch.</li>
                        <li>You start with <span className="font-bold text-foreground">your maximum Pokéballs</span> (this increases as you level up).</li>
                        <li>Each throw uses 1 Pokéball. If you run out, the Pokémon escapes until the next day.</li>
                        <li>You can only catch <span className="font-bold text-foreground">1 daily Pokémon</span>, but in DEV mode (<code>NODE_ENV=development</code>) you can replay without limits.</li>
                        <li>Difficulty and experience rewards depend on the Pokémon and your current level.</li>
                    </ul>
                </section>
            </div>
        </main>
    )
}
