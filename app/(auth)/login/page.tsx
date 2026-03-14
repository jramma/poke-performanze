'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import { Button } from '@components/ui/button'
import { loginAction, registerAction } from '@lib/actions/auth'
import { toast } from 'sonner'

type Mode = 'login' | 'register'

export default function LoginPage() {
    const [mode, setMode] = useState<Mode>('login')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    async function handleSubmit(formData: FormData) {
        setIsLoading(true)
        try {
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
            toast.error(error instanceof Error ? error.message : 'Error al procesar')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full bg-secondary-background flex items-center justify-center px-4 py-8 sm:px-6 font-early-gameboy relative">
            <div className="absolute top-10 left-10 w-32 h-32 bg-main/5 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary/5 rounded-full animate-pulse" />

            <div className="w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-8">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all" />
                        <div className="relative bg-primary text-primary-foreground p-6 rounded-full border-4 border-primary shadow-shadow animate-bounce">
                            <span className="text-4xl font-black italic">PK</span>
                        </div>
                    </div>
                </div>

                <Card className="border-4 border-primary shadow-shadow overflow-hidden bg-card">
                    <CardHeader className="space-y-1 bg-primary text-primary-foreground p-6">
                        <div className="flex gap-2 border-b-2 border-primary-foreground/30 pb-2">
                            <button
                                type="button"
                                onClick={() => setMode('login')}
                                className={`flex-1 py-2 text-sm font-black uppercase tracking-tighter transition-colors ${mode === 'login' ? 'text-primary-foreground' : 'text-primary-foreground/60 hover:text-primary-foreground'}`}
                            >
                                Log in
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode('register')}
                                className={`flex-1 py-2 text-sm font-black uppercase tracking-tighter transition-colors ${mode === 'register' ? 'text-primary-foreground' : 'text-primary-foreground/60 hover:text-primary-foreground'}`}
                            >
                                Sign up
                            </button>
                        </div>
                        <CardTitle className="text-2xl font-black italic tracking-tighter uppercase pt-2">
                            {mode === 'login' ? 'Welcome back!' : 'Create your account'}
                        </CardTitle>
                        <CardDescription className="text-primary-foreground/70 font-bold uppercase tracking-widest text-[10px]">
                            {mode === 'login' ? 'Email and password' : 'Username, email and password'}
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="p-8 space-y-6">
                        <form action={handleSubmit} className="space-y-5">
                            {mode === 'register' && (
                                <div className="space-y-2">
                                    <label
                                        htmlFor="username"
                                        className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic"
                                    >
                                        Trainer name
                                    </label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                    placeholder="ASH"
                                        required={mode === 'register'}
                                        autoComplete="username"
                                        className="w-full px-4 py-3 bg-muted border-2 border-primary rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:opacity-30"
                                    />
                                </div>
                            )}

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="john.doe@example.com"
                                    required
                                    autoComplete="email"
                                    className="w-full px-4 py-3 bg-muted border-2 border-primary rounded-xl font-bold focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all placeholder:opacity-30"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="password"
                                    className="text-xs font-black uppercase tracking-tighter text-muted-foreground italic"
                                >
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

                        <div className="flex items-center gap-4">
                            <div className="h-1 bg-border flex-1 rounded-full opacity-50" />
                            <div className="text-[10px] font-black text-muted-foreground uppercase italic tracking-widest">
                                Pokémon Performanze
                            </div>
                            <div className="h-1 bg-border flex-1 rounded-full opacity-50" />
                        </div>

                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter leading-relaxed text-center">
                            {mode === 'login'
                                ? 'Passwords are stored encrypted. 6 Pokéballs per day.'
                                : 'At least 6 characters. Passwords are stored encrypted.'}
                        </p>
                    </CardContent>
                </Card>

                <div className="justify-between items-center mt-8 px-4 opacity-50 hidden sm:flex">
                    <div className="flex gap-4">
                        <div className="w-4 h-12 bg-muted border-2 border-primary rounded-full rotate-45" />
                        <div className="w-4 h-12 bg-muted border-2 border-primary rounded-full rotate-45" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="w-12 h-12 bg-main rounded-full border-2 border-primary shadow-shadow" />
                        <div className="w-12 h-12 bg-primary rounded-full border-2 border-primary shadow-shadow" />
                    </div>
                </div>
            </div>
        </div>
    )
}
