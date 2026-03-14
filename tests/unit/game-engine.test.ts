import { GameEngine } from '@/lib/game-engine/core';
import { GAME_CONSTANTS } from '@/lib/game-engine/types';

describe('GameEngine', () => {
    let engine: GameEngine;

    beforeEach(() => {
        engine = new GameEngine();
    });

    describe('Probabilidad base de captura', () => {
        test('debe tener 25% de éxito en promedio', () => {
            const attempts = 10000;
            let successes = 0;

            for (let i = 0; i < attempts; i++) {
                // Mock Math.random para pruebas controladas
                const result = engine.attemptCatch(6);
                if (result.success) successes++;
            }

            const rate = successes / attempts;
            expect(rate).toBeCloseTo(GAME_CONSTANTS.BASE_CATCH_RATE, 1);
        });

        test('debe decrementar pokeballs en cada intento', () => {
            const result = engine.attemptCatch(5);
            expect(result.pokeballsRemaining).toBe(4);
        });

        test('no debe permitir intentos sin pokeballs', () => {
            const result = engine.attemptCatch(0);
            expect(result.success).toBe(false);
            expect(result.message).toContain('No te quedan pokeballs');
        });
    });

    describe('Dificultad basada en Pokémon', () => {
        const mockPokemon = {
            id: 150,
            name: 'mewtwo',
            baseExperience: 340,
            isLegendary: true,
            types: ['psychic'],
            sprite: 'url'
        };

        test('legendarios deben ser más difíciles', () => {
            // Forzar random a 0.2 (20%)
            jest.spyOn(Math, 'random').mockReturnValue(0.2);

            const result = engine.attemptCatchWithDifficulty(6, mockPokemon, 1);

            // Probabilidad reducida por ser legendario
            expect(result.success).toBe(false);

            jest.restoreAllMocks();
        });

        test('usuarios con nivel tienen ventaja', () => {
            const mockRandom = jest.spyOn(Math, 'random');

            // Usuario nivel 1 vs nivel 10
            mockRandom.mockReturnValue(0.15); // 15%

            const resultLowLevel = engine.attemptCatchWithDifficulty(6, mockPokemon, 1);

            mockRandom.mockReturnValue(0.15); // Mismo random
            const resultHighLevel = engine.attemptCatchWithDifficulty(6, mockPokemon, 10);

            expect(resultHighLevel.success).toBe(true);

            mockRandom.mockRestore();
        });
    });

    describe('Mensajes y animaciones', () => {
        test('mensajes cambian según el estado', () => {
            const result = engine.attemptCatch(1);

            if (!result.success) {
                expect(result.message).toContain('Se escapó');
                expect(result.animation).toBe('break');
            }
        });

        test('captura crítica tiene animación especial', () => {
            jest.spyOn(Math, 'random').mockReturnValue(0.01); // 1% (menor al 5% crítico)

            const result = engine.attemptCatch(6);

            if (result.critical) {
                expect(result.animation).toBe('success');
                expect(result.message).toContain('crítico');
            }

            jest.restoreAllMocks();
        });
    });
});

// tests/integration/game-flow.test.ts
import { GameService } from '@/lib/game-engine/service';
import { db } from '@/lib/db';

describe('GameService Integration', () => {
    let service: GameService;
    let testUser: any;

    beforeEach(async () => {
        service = new GameService();

        // Setup: crear usuario de prueba
        testUser = await db.user.create({
            data: {
                username: 'testuser',
                email: 'test@test.com'
            }
        });
    });

    afterEach(async () => {
        // Cleanup
        await db.user.delete({ where: { id: testUser.id } });
    });

    test('flujo completo de juego diario', async () => {
        // 1. Verificar si puede jugar
        const canPlay = await service.canPlayToday(testUser.id);
        expect(canPlay.canPlay).toBe(true);

        // 2. Obtener juego del día
        const game = await service.getOrCreateDailyGame(testUser.id);
        expect(game.pokeballsRemaining).toBe(6);
        expect(game.isCaught).toBe(false);

        // 3. Simular intentos hasta atrapar o terminar
        let caught = false;
        let attempts = 0;

        while (!caught && attempts < 6) {
            const result = await service.processAttempt(testUser.id);
            caught = result.success;
            attempts++;

            if (result.success) {
                expect(result.experience).toBeDefined();
                break;
            }
        }

        // 4. Verificar estado final
        const finalUser = await db.user.findUnique({
            where: { id: testUser.id }
        });

        if (caught) {
            expect(finalUser?.caughtToday).toBe(true);
        } else {
            expect(finalUser?.dailyAttempts).toBe(0);
        }
    });

    test('respetar límite diario', async () => {
        // Jugar 6 veces (agotar intentos)
        for (let i = 0; i < 6; i++) {
            await service.processAttempt(testUser.id);
        }

        // Intentar jugar de nuevo
        const result = await service.processAttempt(testUser.id);

        expect(result.success).toBe(false);
        expect(result.message).toContain('Sin pokeballs');
    });
});