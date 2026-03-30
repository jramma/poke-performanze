'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@components/ui/button'
import { loginAction, registerAction } from '@lib/actions/auth'
import { toast } from 'sonner'
import { z } from 'zod'

type Mode = 'login' | 'register'

const ROW_A = Array.from({ length: 51 }, (_, i) => i + 1)
const ROW_B = Array.from({ length: 50 }, (_, i) => i + 52)
const ROW_C = Array.from({ length: 50 }, (_, i) => i + 102)

const loginSchema = z.object({
    email: z.string().trim().toLowerCase().email('Please enter a valid email'),
    password: z.string().min(1, 'Password is required'),
})

const registerSchema = z.object({
    nickname: z.string().trim().min(3, 'Nickname must be at least 3 characters'),
    email: z.string().trim().toLowerCase().email('Please enter a valid email'),
    password: z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
        .regex(/[0-9]/, 'Password must contain at least one number'),
})

function MarqueeRow({ ids, reverse }: { ids: number[]; reverse?: boolean }) {
    const doubled = [...ids, ...ids]
    return (
        <div className="overflow-hidden">
            <div
                className={reverse ? 'animate-marquee-right flex gap-3' : 'animate-marquee-left flex gap-3'}
                style={{ width: 'max-content' }}
            >
                {doubled.map((id, i) => (
                    <div
                        key={`${id}-${i}`}
                        className="w-16 h-16 shrink-0 rounded-xl flex items-center justify-center bg-white/10"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={`/api/pokemon/image?id=${id}`}
                            alt=""
                            width={52}
                            height={52}
                            className="w-13 h-13 object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default function LoginPage() {
    const [mode, setMode] = useState<Mode>('login')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        try {
            const raw = Object.fromEntries(formData.entries())

            if (mode === 'login') {
                const parsed = loginSchema.safeParse({ email: raw.email, password: raw.password })
                if (!parsed.success) {
                    toast.error(parsed.error.issues.map(i => i.message).join('\n'))
                    return
                }
            } else {
                const parsed = registerSchema.safeParse({ nickname: raw.nickname, email: raw.email, password: raw.password })
                if (!parsed.success) {
                    toast.error(parsed.error.issues.map(i => i.message).join('\n'))
                    return
                }
            }

            setIsLoading(true)
            const result = mode === 'login'
                ? await loginAction(formData)
                : await registerAction(formData)

            if (result?.success) {
                toast.success(result.message)
                router.push('/')
            } else if (result) {
                toast.error(result.message)
            }
        } catch (error: unknown) {
            toast.error(error instanceof Error ? error.message : 'Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="-mx-4 sm:-mx-6 -mt-42 min-h-screen flex font-early-gameboy">
            {/* ── Left decorative panel ── */}
            <div className="hidden lg:flex flex-col justify-between  flex-1 bg-primary text-primary-foreground overflow-hidden relative py-16 px-14">
                {/* Marquee strips (background) */}
                <div className="absolute inset-0 flex flex-col justify-center gap-4 opacity-15 pointer-events-none select-none">
                    <MarqueeRow ids={ROW_A} />
                    <MarqueeRow ids={ROW_B} reverse />
                    <MarqueeRow ids={ROW_C} />
                </div>

                {/* Gradient fade on right edge */}
                <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-primary to-transparent pointer-events-none" />

                {/* Hero text */}
                <div className="relative z-10 mt-auto">
                    <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-4">
                        Pokémon Performanze
                    </p>
                    <h1 className="text-6xl xl:text-8xl font-black italic tracking-tighter uppercase leading-none mb-6">
                        Hazte<br />con<br />todos
                    </h1>
                    <p className="text-base font-bold opacity-60 max-w-xs leading-relaxed font-sans">
                        Catch all 151 original Pokémon.<br />
                        Come back every day to hunt a new one.
                    </p>
                </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="flex flex-col w-full lg:w-120 lg:shrink-0 px-8 py-10 lg:py-12 bg-background min-h-screen lg:min-h-0 lg:items-center lg:justify-center">

                {/* Mobile title */}
                <div className="lg:hidden text-center mb-8 pt-2">
                    <h1 className="text-4xl font-black italic tracking-tighter uppercase">Gotta catch &apos;em all!</h1>
                    <p className="text-[10px] text-muted-foreground mt-1 font-sans font-bold uppercase tracking-widest">
                        Pokémon Performanze
                    </p>
                </div>

                {/* Form area — expands to fill space on mobile, natural on desktop */}
                <div className="w-full max-w-sm space-y-8 flex-1 flex flex-col justify-center self-center lg:flex-none lg:justify-start">
                    {/* Mode switcher */}
                    <div className="flex border-4 border-primary rounded-2xl overflow-hidden shadow-shadow">
                        <button
                            type="button"
                            onClick={() => setMode('login')}
                            className={`flex-1 py-3 text-sm font-black uppercase tracking-tighter transition-colors ${mode === 'login'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-background text-foreground hover:bg-primary/10'
                                }`}
                        >
                            Log in
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode('register')}
                            className={`flex-1 py-3 text-sm font-black uppercase tracking-tighter transition-colors ${mode === 'register'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-background text-foreground hover:bg-primary/10'
                                }`}
                        >
                            Sign up
                        </button>
                    </div>

                    {/* Heading */}
                    <div>
                        <h2 className="text-2xl font-black italic tracking-tighter uppercase">
                            {mode === 'login' ? 'Welcome back!' : 'Create your account'}
                        </h2>
                        <p className="text-xs text-muted-foreground font-sans font-medium mt-1">
                            {mode === 'login' ? 'Email and password' : 'Nickname, email and password'}
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {mode === 'register' && (
                            <div className="space-y-2">
                                <label htmlFor="nickname" className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic">
                                    Nickname
                                </label>
                                <input
                                    id="nickname"
                                    name="nickname"
                                    type="text"
                                    placeholder="ASH"
                                    required
                                    autoComplete="username"
                                    className="w-full px-4 py-3 bg-muted border-2 border-primary rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:opacity-30"
                                />
                            </div>
                        )}

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="ash@pokemon.com"
                                required
                                autoComplete="email"
                                className="w-full px-4 py-3 bg-muted border-2 border-primary rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:opacity-30"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder={mode === 'register' ? 'At least 6 characters' : '••••••••'}
                                required
                                minLength={mode === 'register' ? 6 : undefined}
                                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                                className="w-full px-4 py-3 bg-muted border-2 border-primary rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:opacity-30"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-14 text-lg font-black italic tracking-tighter uppercase"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : mode === 'login' ? 'Log in' : 'Sign up'}
                        </Button>
                    </form>

                    <p className="text-xs text-muted-foreground font-sans font-medium leading-relaxed text-center">
                        {mode === 'login'
                            ? 'Passwords are stored encrypted. 6 Pokéballs per day.'
                            : 'At least 6 characters. Passwords are stored encrypted.'}
                    </p>
                </div>

                {/* Mobile marquee at the bottom */}
                <div className="lg:hidden -mx-8 mt-8 space-y-3 opacity-20 pointer-events-none select-none">
                    <MarqueeRow ids={ROW_A} />
                    <MarqueeRow ids={ROW_B} reverse />
                </div>
            </div>
        </div>
    )
}
