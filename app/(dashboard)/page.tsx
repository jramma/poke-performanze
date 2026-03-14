import { Suspense } from 'react';
import { PokedexGrid } from '@components/server/PokedexGrid';
import { PokedexSkeleton } from '@components/client/skeletons';
import { UserProgress } from '@components/client/UserProgress';
import { gameService } from '@lib/game-engine/service';
import Link from 'next/link';
import { Sword } from 'lucide-react';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { Button } from '@components/ui/button';
import { ResetTimer } from '@components/client/ResetTimer';

export default async function HomePage() {
    const cookieStore = await cookies();
    const userId = cookieStore.get('userId')?.value;

    if (!userId) {
        redirect('/login');
    }

    // Fetch user statistics
    let stats;
    try {
        stats = await gameService.getUserStats(userId);
    } catch (error: any) {
        if (error.message === 'User not found') {
            redirect('/login');
        }
        throw error;
    }

    return (
        <main className="w-full space-y-10 md:space-y-12 font-sans">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 items-start">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground uppercase italic border-b-8 border-primary inline-block">
                            My Pokédex
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-xl font-medium">
                            Collect the original 151. Come back every day to hunt a new Pokémon.
                        </p>
                    </div>
                </div>

                <Button
                    asChild
                    size="lg"
                    className="h-auto py-5 px-10 rounded-2xl text-2xl group relative"
                >
                    <Link href="/game" className="flex items-center gap-4">
                        <Sword className="w-12 h-12 animate-bounce" />
                        <span>HUNT!</span>
                        <ResetTimer isDevMode={process.env.NODE_ENV === "development"} />
                    </Link>
                </Button>
            </header>

            <section className="animate-in fade-in slide-in-from-top-4 duration-700">
                <UserProgress
                    level={stats.level || 1}
                    experience={stats.experience || 0}
                    totalCatches={stats.totalCatches || 0}
                    currentStreak={stats.currentStreak || 0}
                />
            </section>

            <section className="relative pt-8">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-xl font-black uppercase tracking-tighter text-foreground shrink-0 italic">
                        Your Collection
                    </h2>
                    <div className="h-1 bg-border flex-1 rounded-full opacity-50" />
                    <div className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                        {stats.totalCatches} / 151 Caught
                    </div>
                </div>

                <Suspense fallback={<PokedexSkeleton />}>
                    <PokedexGrid userId={userId} />
                </Suspense>
            </section>
        </main>
    );
}