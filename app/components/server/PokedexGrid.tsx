import { PokemonRepository } from '@/lib/db/repositories/pokemon.repository'
import { UserRepository } from '@/lib/db/repositories/user.repository'
import { PokemonCard } from './PokemonCard';

const pokemonRepo = new PokemonRepository()
const userRepo = new UserRepository()

export async function PokedexGrid({ userId }: { userId: string }) {
    // Obtenemos los 151 pokemons (asegurando que estén inicializados)
    // En una app real esto se haría en un script de despliegue
    const pokemon = await pokemonRepo.getPokemonById(1).then(async (exists) => {
        if (!exists) await pokemonRepo.initializePokemon();
        // @ts-ignore - asumiendo que el repo tiene este método o similar
        return prisma.pokemon.findMany({
            where: { id: { lte: 151 } },
            orderBy: { id: 'asc' }
        });
    });

    // Obtenemos los IDs de los pokemon atrapados por el usuario
    const userWithPokemon = await userRepo.getUserWithPokemon(userId);
    const caughtIds = userWithPokemon?.caughtPokemon.map((cp: any) => cp.pokemonId) || [];

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {pokemon.map((p: any) => (
                <PokemonCard
                    key={p.id}
                    pokemon={{
                        id: p.id,
                        name: p.name,
                        sprite: p.sprite,
                        types: p.types as string[]
                    }}
                    isCaught={caughtIds.includes(p.id)}
                />
            ))}
        </div>
    );
}