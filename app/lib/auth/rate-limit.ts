/**
 * In-memory rate limiter for login attempts.
 * NOTE: resets on server restart and does not share state across
 * multiple instances (e.g. serverless). For multi-instance deployments
 * move the store to Redis or the database.
 */

const MAX_ATTEMPTS = 5
const WINDOW_MS = 15 * 60 * 1000 // 15 minutes

interface Record {
  count: number
  resetAt: number
}

const store = new Map<string, Record>()

export function checkLoginRateLimit(key: string): { allowed: boolean; retryAfterSec?: number } {
  const now = Date.now()
  const record = store.get(key)

  if (!record || now > record.resetAt) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true }
  }

  if (record.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfterSec: Math.ceil((record.resetAt - now) / 1000) }
  }

  record.count++
  return { allowed: true }
}

export function resetLoginRateLimit(key: string) {
  store.delete(key)
}
