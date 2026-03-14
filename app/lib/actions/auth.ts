'use server'

import { UserRepository } from '@lib/db/repositories/user.repository'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { hashPassword, verifyPassword } from '@lib/auth/password'

const userRepo = new UserRepository()

export type AuthResult = {
  success: boolean
  message: string
  userId?: string
}

/**
 * Login: email + password.
 * Verifies that the password matches the stored hash.
 */
export async function loginAction(formData: FormData): Promise<AuthResult> {
  // Normalizar igual que en registerAction: trim + toLowerCase
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const password = formData.get('password') as string

  if (!email || !password) {
    return {
      success: false,
      message: 'Email and password are required',
    }
  }

    try {
        const user = await userRepo.findByEmail(email)
        if (!user) {
            return {
                success: false,
                message: 'Incorrect email or password',
            }
        }

        // Legacy users with plain-text passwords: migrate to hash on first login
        const LEGACY_PLACEHOLDER = 'temp-pass'
        if (user.password === LEGACY_PLACEHOLDER) {
            if (!password || password.length < 6) {
                return {
                    success: false,
                    message: 'This account must set a password with at least 6 characters. Use it here.',
                }
            }
            const hashed = await hashPassword(password)
            await userRepo.updatePassword(user.id, hashed)
        } else {
            const isValid = await verifyPassword(password, user.password)
            if (!isValid) {
                return {
                    success: false,
                    message: 'Incorrect email or password',
                }
            }
        }

        await setAuthCookie(user.id)
    revalidatePath('/')
    return {
      success: true,
      message: `Welcome back, ${user.username}!`,
      userId: user.id,
    }
  } catch (error: unknown) {
    console.error('Login error:', error)
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Error al iniciar sesión',
    }
  }
}

/**
 * Registration: username, email and password.
 * The password is hashed before being stored.
 */
export async function registerAction(formData: FormData): Promise<AuthResult> {
  const username = (formData.get('username') as string)?.trim()
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const password = formData.get('password') as string

  if (!username || !email || !password) {
    return {
      success: false,
      message: 'Username, email and password are required',
    }
  }

  if (password.length < 6) {
    return {
      success: false,
      message: 'Password must be at least 6 characters',
    }
  }

  try {
    const existing = await userRepo.findByEmail(email)
    if (existing) {
      return {
        success: false,
        message: 'An account with that email already exists. Please log in.',
      }
    }

    const existingUsername = await userRepo.findByUsername(username)
    if (existingUsername) {
      return {
        success: false,
        message: 'That trainer name is already in use',
      }
    }

    const hashedPassword = await hashPassword(password)
    const user = await userRepo.createUser({
      username,
      email,
      password: hashedPassword,
    })

    await setAuthCookie(user.id)
    revalidatePath('/')
    return {
      success: true,
      message: `Account created! Welcome, ${user.username}.`,
      userId: user.id,
    }
  } catch (error: unknown) {
    console.error('Register error:', error)
    return {
      success: false,
      message:
        error instanceof Error ? error.message : 'Error while creating the account',
    }
  }
}

async function setAuthCookie(userId: string) {
  ;(await cookies()).set('userId', userId, {
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30 días
    httpOnly: true,
    secure: process.env.NODE_ENV === 'development' ? false : true,
    sameSite: 'lax',
  })
}

export async function logoutAction() {
  ;(await cookies()).delete('userId')
  revalidatePath('/')
  redirect('/login')
}
