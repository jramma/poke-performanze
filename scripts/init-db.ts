// scripts/init-db.ts
import { PrismaClient } from '@prisma/client'
import { PokemonRepository } from '../app/lib/db/repositories/pokemon.repository'

const prisma = new PrismaClient()
const pokemonRepo = new PokemonRepository()

async function main() {
    console.log('🌱 Inicializando base de datos...')

    // Limpiar base de datos (opcional en desarrollo)
    if (process.env.NODE_ENV === 'development') {
        console.log('🧹 Limpiando tablas...')
        await prisma.$transaction([
            prisma.caughtPokemon.deleteMany(),
            prisma.gameSession.deleteMany(),
            prisma.dailyLog.deleteMany(),
            prisma.userAchievement.deleteMany(),
            prisma.user.deleteMany(),
            prisma.pokemon.deleteMany(),
        ])
    }

    // Cargar Pokémon
    console.log('📦 Cargando Pokémon...')
    await pokemonRepo.initializePokemon()

    // Crear achievements
    console.log('🏆 Creando logros...')
    await prisma.achievement.createMany({
        data: [
            {
                name: 'Primer atrapado',
                description: 'Atrapa tu primer Pokémon',
                icon: '🎯',
                condition: JSON.stringify({ type: 'catch', count: 1 }),
                reward: JSON.stringify({ experience: 50, pokeballs: 3 })
            },
            {
                name: 'Coleccionista',
                description: 'Atrapa 10 Pokémon diferentes',
                icon: '📚',
                condition: JSON.stringify({ type: 'unique', count: 10 }),
                reward: JSON.stringify({ experience: 200, pokeballs: 5 })
            },
            {
                name: 'Leyenda viviente',
                description: 'Atrapa un Pokémon legendario',
                icon: '🌟',
                condition: JSON.stringify({ type: 'legendary', count: 1 }),
                reward: JSON.stringify({ experience: 500, title: 'Cazador de Leyendas' })
            },
            {
                name: 'Racha de 7 días',
                description: 'Juega 7 días seguidos',
                icon: '🔥',
                condition: JSON.stringify({ type: 'streak', count: 7 }),
                reward: JSON.stringify({ experience: 300, pokeballs: 10 })
            }
        ]
    })

    console.log('✅ Base de datos inicializada correctamente')
}

main()
    .catch(e => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })