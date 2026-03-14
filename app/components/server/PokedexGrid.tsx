import { PokemonRepository } from '@lib/db/repositories/pokemon.repository'
import { UserRepository } from '@lib/db/repositories/user.repository'
import { PokemonCard } from './PokemonCard'

const pokemonRepo = new PokemonRepository()
const userRepo = new UserRepository()

export async function PokedexGrid({ userId }: { userId: string }) {
    const pokemon = await pokemonRepo.getAllFirstGen()
    
    // Obtenemos los IDs de los pokemon atrapados por el usuario
    let caughtIds = new Set<number>()
    try {
        const userWithPokemon = await userRepo.getUserWithPokemon(userId)
        caughtIds = new Set(userWithPokemon?.caughtPokemon.map((cp: any) => cp.pokemonId) || [])
    } catch (e) {
        // Si el usuario no existe, mostramos la pokedex vacía (todos sin atrapar)
    }

    // Mostrar primero los capturados, luego el resto (orden por id dentro de cada grupo)
    const sorted = [...pokemon].sort((a, b) => {
        const aCaught = caughtIds.has(a.id) ? 1 : 0
        const bCaught = caughtIds.has(b.id) ? 1 : 0
        if (bCaught !== aCaught) return bCaught - aCaught // capturados primero
        return a.id - b.id
    })

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {sorted.map((p) => (
                <PokemonCard
                    key={p.id}
                    pokemon={p}
                    isCaught={caughtIds.has(p.id)}
                />
            ))}
        </div>
    )
}