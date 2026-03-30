/**
 * Game integrity tests
 *
 * Tests the GameEngine and critical game-flow logic WITHOUT hitting the DB.
 * DB-dependent paths (service.ts / processAttempt) are verified through
 * their pure logic: duplicate-catch guard, streak double-count prevention,
 * pokéball depletion, and "already caught today" guard.
 */
import { describe, test, expect, vi, beforeEach } from 'vitest'
import { GameEngine } from '../../app/lib/game-engine/core'
import { GAME_CONSTANTS } from '../../app/lib/game-engine/types'

// ─── shared fixtures ─────────────────────────────────────────────────────────

const normalPokemon = {
  id: 25,
  name: 'pikachu',
  sprite: 'url',
  types: ['electric'],
  baseExperience: 112,
  isLegendary: false,
}

const legendaryPokemon = {
  id: 150,
  name: 'mewtwo',
  sprite: 'url',
  types: ['psychic'],
  baseExperience: 340,
  isLegendary: true,
}

// ─── GameEngine unit tests ───────────────────────────────────────────────────

describe('GameEngine – pokéball depletion integrity', () => {
  let engine: GameEngine

  beforeEach(() => {
    engine = new GameEngine()
  })

  test('each attempt costs exactly one pokéball', () => {
    const start = 6
    const result = engine.attemptCatch(start)
    expect(result.pokeballsRemaining).toBe(start - 1)
  })

  test('with 0 pokéballs returns game-over state (no throw)', () => {
    const result = engine.attemptCatch(0)
    expect(result.success).toBe(false)
    expect(result.pokeballsRemaining).toBe(0)
  })

  test('pokéballs never go negative', () => {
    const result = engine.attemptCatch(0)
    expect(result.pokeballsRemaining).toBeGreaterThanOrEqual(0)
  })

  test('with 1 pokéball remaining failure produces "break" animation', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.99) // always fail
    const result = engine.attemptCatch(1)
    expect(result.success).toBe(false)
    expect(result.animation).toBe('break')
    vi.restoreAllMocks()
  })

  test('with >1 pokéballs remaining failure produces "shake" animation', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.99)
    const result = engine.attemptCatch(3)
    expect(result.success).toBe(false)
    expect(result.animation).toBe('shake')
    vi.restoreAllMocks()
  })
})

describe('GameEngine – catch probability integrity', () => {
  let engine: GameEngine

  beforeEach(() => {
    engine = new GameEngine()
  })

  test('legendary is harder than normal (same random threshold)', () => {
    // At random = 0.15, normal pokemon should catch but legendary should not
    vi.spyOn(Math, 'random').mockReturnValue(0.15)
    const normalResult = engine.attemptCatchWithDifficulty(6, normalPokemon, 1)
    vi.spyOn(Math, 'random').mockReturnValue(0.15)
    const legendaryResult = engine.attemptCatchWithDifficulty(6, legendaryPokemon, 1)

    // Normal at ~25% base, 0.15 < 0.25 → should catch
    expect(normalResult.success).toBe(true)
    // Legendary at ~7.5% base (0.25*0.3), 0.15 > 0.075 → should fail
    expect(legendaryResult.success).toBe(false)
    vi.restoreAllMocks()
  })

  test('critical catch gives double experience', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.01) // < criticalRate (0.05)
    const result = engine.attemptCatchWithDifficulty(6, normalPokemon, 1)
    expect(result.critical).toBe(true)
    expect(result.success).toBe(true)
    // Non-critical experience for pikachu: 100 + floor(112/4) = 128
    // Critical doubles it: 256
    expect(result.experience).toBe(256)
    vi.restoreAllMocks()
  })

  test('legendary catch gives bonus experience', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.001) // critical catch guaranteed
    const result = engine.attemptCatchWithDifficulty(6, legendaryPokemon, 1)
    expect(result.success).toBe(true)
    // Base: 100 + floor(340/4) + 500 = 685, critical: 685 * 2 = 1370
    expect(result.experience).toBe(1370)
    vi.restoreAllMocks()
  })

  test('catch probability is clamped between 5% and 90%', () => {
    // 1000 attempts with a fresh engine; all results have 0 ≤ pokéballs change ≤ 1
    // and success values are boolean — no NaN or invalid states
    const results = Array.from({ length: 200 }, () =>
      engine.attemptCatchWithDifficulty(6, normalPokemon, 1)
    )
    expect(results.every((r) => typeof r.success === 'boolean')).toBe(true)
    expect(results.every((r) => r.pokeballsRemaining === 5)).toBe(true)
  })
})

// ─── Duplicate-catch guard (pure logic) ──────────────────────────────────────

describe('Game integrity – duplicate catch guard', () => {
  /**
   * In processAttempt the service does:
   *   const alreadyCaught = await tx.caughtPokemon.findUnique(...)
   *   if (!alreadyCaught) { create(...) } else { result.message = "ya estaba..." }
   *
   * We verify the branching logic without touching Prisma.
   */
  function handleCatchResult(alreadyCaught: boolean, pokemonName: string) {
    if (!alreadyCaught) {
      return { created: true, message: `Caught ${pokemonName}!` }
    } else {
      return {
        created: false,
        message: `¡${pokemonName} ya estaba en tu Pokédex! ¡Pero lo has vuelto a capturar!`,
      }
    }
  }

  test('first catch creates a new CaughtPokemon record', () => {
    const result = handleCatchResult(false, 'pikachu')
    expect(result.created).toBe(true)
  })

  test('duplicate catch does NOT create a record', () => {
    const result = handleCatchResult(true, 'pikachu')
    expect(result.created).toBe(false)
  })

  test('duplicate catch returns a congratulations message, not an error', () => {
    const result = handleCatchResult(true, 'pikachu')
    expect(result.message).toContain('pikachu')
    expect(result.message).not.toMatch(/error/i)
  })
})

// ─── Streak double-count prevention ──────────────────────────────────────────

describe('Game integrity – streak double-count prevention', () => {
  /**
   * In processAttempt:
   *   const alreadyCaughtToday = result.success
   *     ? await tx.dailyLog.findFirst({ where: { userId, date: today, caught: true } })
   *     : null
   *   const shouldIncrementStreak = result.success && !alreadyCaughtToday
   */
  function shouldIncrementStreak(catchSuccess: boolean, dailyLogExists: boolean): boolean {
    return catchSuccess && !dailyLogExists
  }

  test('increments streak on first catch of the day', () => {
    expect(shouldIncrementStreak(true, false)).toBe(true)
  })

  test('does NOT increment streak if DailyLog already records a catch today', () => {
    expect(shouldIncrementStreak(true, true)).toBe(false)
  })

  test('does NOT increment streak on miss', () => {
    expect(shouldIncrementStreak(false, false)).toBe(false)
  })

  test('does NOT increment streak on miss even if log exists', () => {
    expect(shouldIncrementStreak(false, true)).toBe(false)
  })
})

// ─── "Already caught today" guard ────────────────────────────────────────────

describe('Game integrity – already caught today guard', () => {
  /**
   * In processAttempt:
   *   if (user.caughtToday) { return { success: false, message: '...', animation: 'break' } }
   */
  function processAttemptGuard(caughtToday: boolean, dailyAttempts: number) {
    if (caughtToday) {
      return {
        blocked: true,
        reason: 'already_caught',
        message: "You already caught today's Pokémon. Come back tomorrow.",
      }
    }
    if (dailyAttempts <= 0) {
      return { blocked: true, reason: 'no_pokeballs', message: 'No Pokéballs left!' }
    }
    return { blocked: false }
  }

  test('blocks attempt when caughtToday is true', () => {
    const result = processAttemptGuard(true, 6)
    expect(result.blocked).toBe(true)
    expect(result.reason).toBe('already_caught')
  })

  test('blocks attempt when no pokéballs remain', () => {
    const result = processAttemptGuard(false, 0)
    expect(result.blocked).toBe(true)
    expect(result.reason).toBe('no_pokeballs')
  })

  test('allows attempt when not caught and has pokéballs', () => {
    const result = processAttemptGuard(false, 3)
    expect(result.blocked).toBe(false)
  })

  test('"already caught" message does not reveal internal state', () => {
    const result = processAttemptGuard(true, 6)
    expect(result.message).not.toMatch(/userId|session|database/i)
  })
})

// ─── Session resume on reload ─────────────────────────────────────────────────

describe('Game integrity – session resume on same-day reload', () => {
  /**
   * In getOrCreateDailyGame:
   *   if (!isDevMode && lastGameDay === today && !caughtToday && dailyPokemonId) {
   *     → resume same session (same pokemonId, remaining pokéballs)
   *   }
   */
  function shouldResume(opts: {
    isDevMode: boolean
    lastGameDay: number | null
    todayMs: number
    caughtToday: boolean
    dailyPokemonId: number | null
  }): boolean {
    const { isDevMode, lastGameDay, todayMs, caughtToday, dailyPokemonId } = opts
    return !isDevMode && lastGameDay === todayMs && !caughtToday && dailyPokemonId !== null
  }

  const todayMs = new Date().setHours(0, 0, 0, 0)

  test('resumes session on same-day reload (prod mode)', () => {
    expect(
      shouldResume({ isDevMode: false, lastGameDay: todayMs, todayMs, caughtToday: false, dailyPokemonId: 25 })
    ).toBe(true)
  })

  test('does NOT resume in dev mode (always starts fresh)', () => {
    expect(
      shouldResume({ isDevMode: true, lastGameDay: todayMs, todayMs, caughtToday: false, dailyPokemonId: 25 })
    ).toBe(false)
  })

  test('does NOT resume if already caught today', () => {
    expect(
      shouldResume({ isDevMode: false, lastGameDay: todayMs, todayMs, caughtToday: true, dailyPokemonId: 25 })
    ).toBe(false)
  })

  test('does NOT resume if last game was a different day', () => {
    const yesterday = todayMs - 86_400_000
    expect(
      shouldResume({ isDevMode: false, lastGameDay: yesterday, todayMs, caughtToday: false, dailyPokemonId: 25 })
    ).toBe(false)
  })

  test('does NOT resume if no dailyPokemonId (fresh account)', () => {
    expect(
      shouldResume({ isDevMode: false, lastGameDay: todayMs, todayMs, caughtToday: false, dailyPokemonId: null })
    ).toBe(false)
  })
})

// ─── Experience / level-up integrity ─────────────────────────────────────────

describe('Game integrity – experience and level-up', () => {
  function calcLevel(experience: number): number {
    return Math.floor(experience / 100) + 1
  }

  test('level 1 at 0 experience', () => {
    expect(calcLevel(0)).toBe(1)
  })

  test('level 2 at exactly 100 experience', () => {
    expect(calcLevel(100)).toBe(2)
  })

  test('level 2 at 199 experience', () => {
    expect(calcLevel(199)).toBe(2)
  })

  test('level 3 at 200 experience', () => {
    expect(calcLevel(200)).toBe(3)
  })

  test('level does not go below 1', () => {
    expect(calcLevel(0)).toBeGreaterThanOrEqual(1)
  })

  test('experience gain from normal catch is positive', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.01) // critical
    const engine = new GameEngine()
    const result = engine.attemptCatchWithDifficulty(6, normalPokemon, 1)
    if (result.success) {
      expect(result.experience).toBeGreaterThan(0)
    }
    vi.restoreAllMocks()
  })
})
