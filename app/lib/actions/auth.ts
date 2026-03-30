'use server'

import { UserRepository } from '@lib/db/repositories/user.repository'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { hashPassword, verifyPassword } from '@lib/auth/password'
import { checkLoginRateLimit, resetLoginRateLimit } from '@lib/auth/rate-limit'
import { Prisma } from '@lib/db'

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

  const rateLimit = checkLoginRateLimit(email)
  if (!rateLimit.allowed) {
    return {
      success: false,
      message: `Too many login attempts. Try again in ${Math.ceil((rateLimit.retryAfterSec ?? 900) / 60)} minutes.`,
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

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      return {
        success: false,
        message: 'Incorrect email or password',
      }
    }

    resetLoginRateLimit(email)
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
      message: 'An error occurred. Please try again.',
    }
  }
}

/**
 * Registration: username, email and password.
 * The password is hashed before being stored.
 */
export async function registerAction(formData: FormData): Promise<AuthResult> {
  const nickname = (formData.get('nickname') as string)?.trim()
  const email = (formData.get('email') as string)?.trim().toLowerCase()
  const password = formData.get('password') as string

  if (!nickname || !email || !password) {
    return {
      success: false,
      message: 'Nickname, email and password are required',    }
  }

  const username = nickname

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
                message: 'That email is already registered. Please log in instead.',
            }
        }

        const existingUsername = await userRepo.findByUsername(username)
        if (existingUsername) {
            return {
                success: false,
                message: 'That nickname is already taken',
            }
        }

        const hashedPassword = await hashPassword(password)
        const user = await userRepo.createUser({
            username,
            nickname,
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

        // Fallback por si Prisma lanza un error de unicidad en email/username
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = Array.isArray(error.meta?.target) ? error.meta?.target.join(', ') : error.meta?.target

            if (typeof target === 'string' && target.includes('email')) {
                return {
                    success: false,
                    message: 'That email is already registered. Please log in instead.',
                }
            }

            if (typeof target === 'string' && target.includes('username')) {
                return {
                    success: false,
                    message: 'That nickname is already taken',
                }
            }

            return {
                success: false,
                message: 'That account already exists. Please log in.',
            }
        }

        return {
            success: false,
            message: 'An error occurred. Please try again.',
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

export async function updateProfileAction(formData: FormData): Promise<AuthResult> {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value
  if (!userId) redirect('/login')

  const nickname = (formData.get('nickname') as string)?.trim()
  if (!nickname || nickname.length < 3) {
    return { success: false, message: 'Nickname must be at least 3 characters' }
  }

  try {
    const existing = await userRepo.findByUsername(nickname)
    if (existing && existing.id !== userId) {
      return { success: false, message: 'That nickname is already taken' }
    }

    await userRepo.updateNickname(userId, nickname)
    revalidatePath('/profile')
    return { success: true, message: 'Profile updated!' }
  } catch {
    return { success: false, message: 'An error occurred. Please try again.' }
  }
}

export async function logoutAction() {
  ;(await cookies()).delete('userId')
  revalidatePath('/')
  redirect('/login')
}

export async function deleteAccountAction() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) {
    redirect('/login')
  }

  await userRepo.deleteUserById(userId)

  cookieStore.delete('userId')
  revalidatePath('/')
  redirect('/login')
}
