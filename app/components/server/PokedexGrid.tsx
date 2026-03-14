import { PokemonRepository } from '@lib/db/repositories/pokemon.repository'
import { UserRepository } from '@lib/db/repositories/user.repository'
import { PokemonCard } from './PokemonCard'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger
} from '@components/ui/dialog'
import Image from 'next/image'

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
            {sorted.map((p) => {
                const isCaught = caughtIds.has(p.id)

                if (!isCaught) {
                    return (
                        <PokemonCard
                            key={p.id}
                            pokemon={p}
                            isCaught={false}
                        />
                    )
                }

                return (
                    <Dialog key={p.id}>
                        <DialogTrigger asChild>
                            <button
                                type="button"
                                className="text-left"
                                aria-label={`Open details for ${p.name}`}
                            >
                                <PokemonCard
                                    pokemon={p}
                                    isCaught={true}
                                />
                            </button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    #{String(p.id).padStart(3, '0')} {p.name}
                                </DialogTitle>
                                <DialogDescription>
                                    Detailed view of your caught Pokémon.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="flex flex-col items-center gap-4">
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                                    <Image
                                        src={`/api/pokemon/image?id=${p.id}`}
                                        alt={p.name}
                                        width={160}
                                        height={160}
                                        sizes="160px"
                                        className="relative z-10 object-contain drop-shadow-2xl"
                                    />
                                </div>

                                <div className="flex flex-wrap justify-center gap-2">
                                    {p.types.map((type) => (
                                        <span
                                            key={type}
                                            className="text-[10px] font-bold px-3 py-1 rounded-full uppercase bg-primary/20 text-primary"
                                        >
                                            {type}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                )
            })}
        </div>
    )
}