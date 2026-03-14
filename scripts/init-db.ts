// scripts/init-db.ts
import { PrismaClient } from '@prisma/client'
import { PokemonRepository } from '../app/lib/db/repositories/pokemon.repository'

const prisma = new PrismaClient()
const pokemonRepo = new PokemonRepository()

async function main() {
    console.log('🌱 Initializing database...')

    // Clean database (dev only, optional)
    if (process.env.NODE_ENV === 'development') {
        console.log('🧹 Truncating tables...')
        await prisma.$transaction([
            prisma.caughtPokemon.deleteMany(),
            prisma.gameSession.deleteMany(),
            prisma.dailyLog.deleteMany(),
            prisma.userAchievement.deleteMany(),
            prisma.user.deleteMany(),
            prisma.pokemon.deleteMany(),
        ])
    }

    // Load first 151 Pokémon
    console.log('📦 Loading Pokémon...')
    await pokemonRepo.initializePokemon()

    // Create achievements
    console.log('🏆 Creating achievements...')
    await prisma.achievement.createMany({
        data: [
            {
                name: 'First catch',
                description: 'Catch your first Pokémon',
                icon: '🎯',
                condition: JSON.stringify({ type: 'catch', count: 1 }),
                reward: JSON.stringify({ experience: 50, pokeballs: 3 })
            },
            {
                name: 'Collector',
                description: 'Catch 10 different Pokémon',
                icon: '📚',
                condition: JSON.stringify({ type: 'unique', count: 10 }),
                reward: JSON.stringify({ experience: 200, pokeballs: 5 })
            },
            {
                name: 'Living legend',
                description: 'Catch a legendary Pokémon',
                icon: '🌟',
                condition: JSON.stringify({ type: 'legendary', count: 1 }),
                reward: JSON.stringify({ experience: 500, title: 'Legend Hunter' })
            },
            {
                name: '7-day streak',
                description: 'Play 7 days in a row',
                icon: '🔥',
                condition: JSON.stringify({ type: 'streak', count: 7 }),
                reward: JSON.stringify({ experience: 300, pokeballs: 10 })
            }
        ]
    })

    console.log('✅ Database initialized successfully')
}

main()
    .catch(e => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })