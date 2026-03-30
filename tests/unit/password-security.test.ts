/**
 * Security tests – password hashing
 *
 * Ensures passwords are never stored in plain text and that
 * verification works correctly.
 */
import { describe, test, expect } from 'vitest'
import { hashPassword, verifyPassword } from '../../app/lib/auth/password'

describe('hashPassword', () => {
  test('produces a non-plain-text string', async () => {
    const plain = 'secret123'
    const hashed = await hashPassword(plain)
    expect(hashed).not.toBe(plain)
  })

  test('starts with a bcrypt marker ($2b$ or $2a$)', async () => {
    const hashed = await hashPassword('mypassword')
    expect(hashed).toMatch(/^\$2[ab]\$/)
  })

  test('two hashes of the same password are different (salt)', async () => {
    const p = 'samepassword'
    const h1 = await hashPassword(p)
    const h2 = await hashPassword(p)
    expect(h1).not.toBe(h2)
  })

  test('hash length is >= 60 characters', async () => {
    const hashed = await hashPassword('pass')
    expect(hashed.length).toBeGreaterThanOrEqual(60)
  })
})

describe('verifyPassword', () => {
  test('returns true for correct password', async () => {
    const plain = 'correct-horse-battery'
    const hashed = await hashPassword(plain)
    expect(await verifyPassword(plain, hashed)).toBe(true)
  })

  test('returns false for wrong password', async () => {
    const hashed = await hashPassword('right')
    expect(await verifyPassword('wrong', hashed)).toBe(false)
  })

  test('returns false for empty string against real hash', async () => {
    const hashed = await hashPassword('notEmpty')
    expect(await verifyPassword('', hashed)).toBe(false)
  })

  test('returns false for hash used as plain text', async () => {
    const plain = 'tricky'
    const hashed = await hashPassword(plain)
    // Passing the hash as the "plain" argument must fail
    expect(await verifyPassword(hashed, hashed)).toBe(false)
  })
})
