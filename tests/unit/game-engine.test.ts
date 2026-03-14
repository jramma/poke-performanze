import { describe, test, expect, beforeEach, vi } from 'vitest'
import { GameEngine } from '../../app/lib/game-engine/core'
import { GAME_CONSTANTS } from '../../app/lib/game-engine/types'

describe('GameEngine', () => {
  let engine: GameEngine

  beforeEach(() => {
    engine = new GameEngine()
  })

  describe('Probabilidad base de captura', () => {
    test('debe tener ~25% de éxito en promedio', () => {
      const attempts = 5000
      let successes = 0

      for (let i = 0; i < attempts; i++) {
        const result = engine.attemptCatch(GAME_CONSTANTS.MAX_DAILY_POKEBALLS)
        if (result.success) successes++
      }

      const rate = successes / attempts
      // La probabilidad efectiva incluye el crítico (BASE_CATCH_RATE + CRITICAL_CATCH_RATE)
      const expected = GAME_CONSTANTS.BASE_CATCH_RATE + GAME_CONSTANTS.CRITICAL_CATCH_RATE
      expect(rate).toBeCloseTo(expected, 1)
    })

    test('debe decrementar pokeballs en cada intento', () => {
      const result = engine.attemptCatch(5)
      expect(result.pokeballsRemaining).toBe(4)
    })

    test('no debe permitir intentos sin pokeballs', () => {
      const result = engine.attemptCatch(0)
      expect(result.success).toBe(false)
      expect(result.pokeballsRemaining).toBe(0)
    })
  })

  describe('Dificultad basada en Pokémon', () => {
    const mockPokemon = {
      id: 150,
      name: 'mewtwo',
      baseExperience: 340,
      isLegendary: true,
      types: ['psychic'],
      sprite: 'url'
    }

    test('legendarios deben ser más difíciles', () => {
      // Forzar random a 0.2 (20%)
      vi.spyOn(Math, 'random').mockReturnValue(0.2)

      const result = engine.attemptCatchWithDifficulty(
        GAME_CONSTANTS.MAX_DAILY_POKEBALLS,
        mockPokemon,
        1
      )

      // Probabilidad reducida por ser legendario → con 0.2 no debería atrapar
      expect(result.success).toBe(false)

      vi.restoreAllMocks()
    })

    test('usuarios con nivel alto tienen ventaja', () => {
      const spy = vi.spyOn(Math, 'random')

      // Usuario nivel 1 vs nivel 10 con el mismo random.
      // Para un legendario con baseExp 340, con random 0.06:
      // - nivel 1 falla
      // - nivel 10 acierta (probabilidad ligeramente mayor)
      spy.mockReturnValue(0.06)

      const lowLevel = engine.attemptCatchWithDifficulty(
        GAME_CONSTANTS.MAX_DAILY_POKEBALLS,
        mockPokemon,
        1
      )

      spy.mockReturnValue(0.06)
      const highLevel = engine.attemptCatchWithDifficulty(
        GAME_CONSTANTS.MAX_DAILY_POKEBALLS,
        mockPokemon,
        10
      )

      expect(lowLevel.success).toBe(false)
      expect(highLevel.success).toBe(true)

      spy.mockRestore()
    })
  })

  describe('Mensajes y animaciones', () => {
    test('cuando fallas puede devolver shake o break', () => {
      const result = engine.attemptCatch(1)

      if (!result.success) {
        expect(['shake', 'break']).toContain(result.animation)
        expect(result.message).toBeDefined()
      }
    })

    test('captura crítica activa animación success', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.01) // < criticalRate

      const result = engine.attemptCatch(GAME_CONSTANTS.MAX_DAILY_POKEBALLS)

      expect(result.critical).toBe(true)
      expect(result.animation).toBe('success')

      vi.restoreAllMocks()
    })
  })
})

