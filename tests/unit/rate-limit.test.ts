/**
 * Security tests – login rate limiter
 *
 * The store is a module-level Map, so we re-import the module fresh in each
 * describe block using vi.resetModules() + dynamic import.
 */
import { describe, test, expect, beforeEach, vi } from 'vitest'

// We re-import each time to get a clean in-memory store.
async function freshModule() {
  vi.resetModules()
  return import('../../app/lib/auth/rate-limit')
}

describe('checkLoginRateLimit – security', () => {
  test('allows the first attempt', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const result = checkLoginRateLimit('test@example.com')
    expect(result.allowed).toBe(true)
  })

  test('allows up to 5 attempts within the window', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const email = 'a@b.com'
    for (let i = 0; i < 5; i++) {
      expect(checkLoginRateLimit(email).allowed).toBe(true)
    }
  })

  test('blocks on the 6th attempt', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const email = 'block@b.com'
    for (let i = 0; i < 5; i++) checkLoginRateLimit(email)
    const result = checkLoginRateLimit(email)
    expect(result.allowed).toBe(false)
  })

  test('blocked result includes retryAfterSec', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const email = 'retry@b.com'
    for (let i = 0; i < 5; i++) checkLoginRateLimit(email)
    const result = checkLoginRateLimit(email)
    expect(result.retryAfterSec).toBeGreaterThan(0)
    expect(result.retryAfterSec).toBeLessThanOrEqual(900) // 15 min window
  })

  test('different emails are isolated', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const emailA = 'userA@x.com'
    const emailB = 'userB@x.com'
    for (let i = 0; i < 5; i++) checkLoginRateLimit(emailA)
    // emailA is blocked, emailB should still be allowed
    expect(checkLoginRateLimit(emailA).allowed).toBe(false)
    expect(checkLoginRateLimit(emailB).allowed).toBe(true)
  })

  test('resetLoginRateLimit clears the counter', async () => {
    const { checkLoginRateLimit, resetLoginRateLimit } = await freshModule()
    const email = 'reset@b.com'
    for (let i = 0; i < 5; i++) checkLoginRateLimit(email)
    expect(checkLoginRateLimit(email).allowed).toBe(false)
    resetLoginRateLimit(email)
    expect(checkLoginRateLimit(email).allowed).toBe(true)
  })

  test('expired window allows new attempts', async () => {
    const { checkLoginRateLimit } = await freshModule()
    const email = 'expired@b.com'
    // Use fake timers to advance past the 15-minute window
    vi.useFakeTimers()
    for (let i = 0; i < 5; i++) checkLoginRateLimit(email)
    expect(checkLoginRateLimit(email).allowed).toBe(false)
    vi.advanceTimersByTime(15 * 60 * 1000 + 1)
    expect(checkLoginRateLimit(email).allowed).toBe(true)
    vi.useRealTimers()
  })
})
