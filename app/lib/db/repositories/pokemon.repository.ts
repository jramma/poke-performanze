// app/lib/db/repositories/pokemon.repository.ts
import { prisma, Pokemon, Prisma } from '../index'

export class PokemonRepository {
    /**
     * Initialize database with the original 151 Pokémon.
     */
    async initializePokemon() {
        // Fetch from PokéAPI and persist
        const promises = []
        for (let i = 1; i <= 151; i++) {
            promises.push(this.fetchAndSavePokemon(i))
        }

        const results = await Promise.allSettled(promises)
        console.log(`Seeded ${results.filter(r => r.status === 'fulfilled').length} Pokémon`)
    }

    private async fetchAndSavePokemon(id: number) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()

        const speciesResponse = await fetch(data.species.url)
        const speciesData = await speciesResponse.json()

        return prisma.pokemon.upsert({
            where: { id },
            update: {},
            create: {
                id: data.id,
                name: data.name,
                sprite: data.sprites.front_default,
                spriteShiny: data.sprites.front_shiny,
                types: data.types.map((t: any) => t.type.name),
                height: data.height,
                weight: data.weight,
                baseExperience: data.base_experience,
                isLegendary: speciesData.is_legendary,
                captureRate: speciesData.capture_rate
            }
        })
    }

    /**
     * Get a random Pokémon from the first 151.
     */
    async getRandomPokemon(): Promise<Pokemon> {
        let count = await prisma.pokemon.count()

        if (count === 0) {
            await this.initializePokemon()
            count = await prisma.pokemon.count()
        }

        const skip = Math.floor(Math.random() * Math.min(count, 151))
        const [pokemon] = await prisma.pokemon.findMany({
            take: 1,
            skip,
            orderBy: { id: 'asc' }
        })

        return pokemon
    }

    /**
     * Get a Pokémon by id.
     */
    async getPokemonById(id: number) {
        return prisma.pokemon.findUnique({
            where: { id }
        })
    }

    /**
     * Get all 151 first‑generation Pokémon.
     */
    async getAllFirstGen() {
        return prisma.pokemon.findMany({
            where: {
                id: { lte: 151 }
            },
            orderBy: {
                id: 'asc'
            }
        })
    }

    /**
     * Search Pokémon by name.
     */
    async searchPokemon(query: string) {
        return prisma.pokemon.findMany({
            where: {
                name: {
                    contains: query,
                    mode: 'insensitive'
                }
            },
            take: 10
        })
    }
}