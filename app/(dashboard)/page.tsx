// app/(dashboard)/page.tsx
import { Suspense } from 'react';
import { PokedexGrid } from '@/components/server/PokedexGrid';
import { PokedexSkeleton } from '@/components/client/skeletons';
import Link from 'next/link';
import { Sword } from 'lucide-react';

export default function HomePage() {
    // Para el desafío, usamos un ID de usuario Dummy
    const session = { userId: "user_12345" };

    return (
        <main className="min-h-screen bg-background p-6 md:p-12 space-y-8 font-sans">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground uppercase italic border-b-4 border-primary inline-block">
                        Mi Pokédex
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-xl">
                        Bienvenido, Entrenador. Aquí puedes ver tu colección de Pokémon y jugar al desafío diario.
                    </p>
                </div>

                <Link 
                    href="/game"
                    className="group relative flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-xl shadow-shadow transition-transform active:translate-y-1 hover:-translate-y-0.5"
                >
                    <Sword className="w-6 h-6 animate-bounce" />
                    <span>¡Cazar Pokémon!</span>
                    <div className="absolute -top-2 -right-2 bg-main text-white text-xs px-2 py-1 rounded-full font-black animate-pulse shadow-sm">
                        DIARIO
                    </div>
                </Link>
            </header>

            <section className="relative">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-1 bg-border flex-1" />
                    <h2 className="text-sm font-black uppercase tracking-widest text-muted-foreground">
                        Colección Original 151
                    </h2>
                    <div className="w-12 h-1 bg-border flex-1" />
                </div>

                <Suspense fallback={<PokedexSkeleton />}>
                    <PokedexGrid userId={session.userId} />
                </Suspense>
            </section>
        </main>
    );
}