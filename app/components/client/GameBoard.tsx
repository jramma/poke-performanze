"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { CatchResult, GameState, Pokemon } from "@lib/game-engine/types";
import { catchPokemonAction } from "@lib/actions/game";
import { toast } from "sonner";
import { Loader2, Sparkles, RefreshCcw } from "lucide-react";

interface GameBoardProps {
    initialGameState: GameState;
    pokemon: Pokemon;
}

export function GameBoard({ initialGameState, pokemon }: GameBoardProps) {
    const [gameState, setGameState] = useState<GameState>(initialGameState);
    const [isPending, startTransition] = useTransition();
    const [animationState, setAnimationState] = useState<'idle' | 'throwing' | 'shaking' | 'success' | 'failure'>('idle');
    const [message, setMessage] = useState<string>('A wild Pokémon appeared!');

    const handleThrow = () => {
        if (gameState.pokeballsRemaining <= 0 || gameState.isCaught || animationState !== 'idle') return;

        setAnimationState('throwing');
        setMessage('Here we go!');

        startTransition(async () => {
            const result = await catchPokemonAction(gameState.userId, gameState.sessionId);
            
            // Simular tiempo de vuelo
            setTimeout(() => {
                setAnimationState('shaking');
                setMessage('...');

                // Simular tiempo de agitación
                setTimeout(() => {
                    if (result.success) {
                        setAnimationState('success');
                        setMessage(result.message);
                        toast.success(result.message, { icon: <Sparkles className="w-4 h-4 text-yellow-500" /> });
                    } else {
                        setAnimationState('failure');
                        setMessage(result.message);
                        if (result.pokeballsRemaining === 0) {
                            toast.error('It escaped!');
                        }
                    }

                    setGameState(prev => ({
                        ...prev,
                        pokeballsRemaining: result.pokeballsRemaining,
                        isCaught: result.success,
                        gameOver: result.pokeballsRemaining === 0 && !result.success
                    }));

                    // Resetear a idle después de mostrar el resultado
                    setTimeout(() => {
                        if (!result.success && result.pokeballsRemaining > 0) {
                            setAnimationState('idle');
                        }
                    }, 1500);
                }, 2000);
            }, 800);
        });
    };

    return (
        <div className="relative bg-secondary-background border-8 border-primary rounded-3xl p-8 shadow-shadow overflow-hidden min-h-[500px] flex flex-col items-center justify-between">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none select-none overflow-hidden">
                <div className="grid grid-cols-10 gap-4">
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className="w-10 h-10 border border-current rounded-full" />
                    ))}
                </div>
            </div>

            {/* Game Header */}
            <div className="w-full flex justify-between items-start z-10">
                <div className="space-y-1">
                    <h2 className="text-2xl font-black uppercase tracking-tighter italic">
                        {pokemon.name}
                    </h2>
                    <div className="flex gap-1">
                        {pokemon.types.map(t => (
                            <span key={t} className="text-[10px] font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full uppercase">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="text-right">
                    <div className="text-[10px] font-black uppercase text-muted-foreground mb-1">Pokéballs</div>
                    <div className="flex gap-1">
                        {Array.from({ length: initialGameState.pokeballsRemaining }).map((_, i) => (
                            <div 
                                key={i} 
                                className={`w-4 h-4 rounded-full border-2 border-primary ${
                                    i < gameState.pokeballsRemaining ? 'bg-main shadow-[inset_-2px_-2px_rgba(0,0,0,0.2)]' : 'bg-muted opacity-30 shadow-none'
                                } transition-all duration-300`} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Battle Stage */}
            <div className="relative flex-1 w-full flex items-center justify-center py-12">
                {/* Pokemon Shadow */}
                <div className="absolute bottom-16 w-32 h-6 bg-black/10 rounded-[100%] blur-sm animate-pulse" />

                {/* Pokemon Sprite */}
                <div className={`
                    relative transition-all duration-500
                    ${animationState === 'throwing' ? 'scale-95 opacity-80' : 'scale-100 opacity-100'}
                    ${animationState === 'shaking' ? 'translate-y-8 scale-0 opacity-0' : ''}
                    ${animationState === 'success' ? 'scale-0 opacity-0' : ''}
                    ${animationState === 'failure' ? 'translate-y-0 scale-100 opacity-100' : ''}
                    ${animationState === 'idle' ? 'animate-bounce-slow' : ''}
                `}>
                    <Image
                        src={`/api/pokemon/image?id=${pokemon.id}`}
                        alt={pokemon.name}
                        width={180}
                        height={180}
                        sizes="180px"
                        className="object-contain drop-shadow-2xl"
                        priority
                    />
                </div>

                {/* Pokéball Animation */}
                <div className={`
                    absolute transition-all duration-700 ease-out
                    ${animationState === 'idle' ? 'opacity-0 scale-0 translate-y-32' : ''}
                    ${animationState === 'throwing' ? 'opacity-100 scale-100 translate-y-0 animate-spin' : ''}
                    ${animationState === 'shaking' ? 'opacity-100 scale-125 translate-y-16 animate-shake-infinite' : ''}
                    ${animationState === 'success' ? 'opacity-100 scale-110 translate-y-16 animate-ping-once' : ''}
                    ${animationState === 'failure' ? 'opacity-0 scale-0 translate-y-0' : ''}
                `}>
                    <div className="relative w-16 h-16 bg-main rounded-full border-4 border-primary shadow-shadow overflow-hidden">
                        <div className="absolute top-0 w-full h-1/2 bg-red-500 border-b-2 border-primary" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-secondary-background border-4 border-primary rounded-full z-10 flex items-center justify-center">
                            <div className={`w-2 h-2 bg-primary rounded-full ${animationState === 'shaking' ? 'animate-pulse bg-red-500' : ''}`} />
                        </div>
                    </div>
                </div>
            </div>

            {/* UI Controls */}
            <div className="w-full z-10 space-y-6">
                <div className={`rounded-xl p-4 text-center border-2 transition-all duration-300 ${
                    animationState === 'failure'
                        ? 'bg-destructive/10 border-destructive'
                        : 'bg-primary/5 border-primary border-dashed'
                } ${isPending ? 'opacity-70' : 'opacity-100'}`}>
                    <p className={`text-sm font-black uppercase tracking-tight ${
                        animationState === 'failure' ? 'text-destructive' : ''
                    }`}>
                        {animationState === 'failure' && !gameState.gameOver
                            ? 'It escaped! You can try another Pokéball.'
                            : message}
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    {gameState.isCaught ? (
                        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-xl font-black text-main animate-pulse">POKÉMON CAUGHT!</p>
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-bold text-lg hover:-translate-y-0.5 transition-transform active:translate-y-0 shadow-shadow"
                            >
                                <RefreshCcw className="w-5 h-5" />
                                Back to Pokédex
                            </Link>
                        </div>
                    ) : gameState.gameOver ? (
                        <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-2xl font-black text-destructive uppercase tracking-tighter">It escaped!</p>
                            <p className="text-base font-bold text-muted-foreground uppercase">You have no Pokéballs left</p>
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 border-4 border-primary px-8 py-3 rounded-xl font-bold text-lg hover:bg-primary/5 transition-colors shadow-shadow"
                            >
                                Mañana será otro día
                            </Link>
                        </div>
                    ) : (
                        <button
                            onClick={handleThrow}
                            disabled={isPending || animationState !== 'idle'}
                            className={`
                                group relative w-full flex items-center justify-center gap-4 py-6 rounded-2xl font-black text-2xl uppercase tracking-tighter italic transition-all
                                ${isPending || animationState !== 'idle' 
                                    ? 'bg-muted text-muted-foreground cursor-not-allowed opacity-50' 
                                    : 'bg-primary text-primary-foreground shadow-shadow hover:-translate-y-1 active:translate-y-1'
                                }
                            `}
                        >
                            {isPending ? (
                                <Loader2 className="w-8 h-8 animate-spin" />
                            ) : (
                                <>
                                    <span>Throw Pokéball!</span>
                                    <div className="w-8 h-8 bg-white rounded-full border-2 border-primary overflow-hidden group-hover:rotate-45 transition-transform">
                                        <div className="h-1/2 bg-red-500 border-b-2 border-primary" />
                                    </div>
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-10px) rotate(2deg); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 3s ease-in-out infinite;
                }
                @keyframes shake-infinite {
                    0%, 100% { transform: translateY(64px) rotate(0); }
                    20% { transform: translateY(64px) rotate(-10deg); }
                    40% { transform: translateY(64px) rotate(10deg); }
                    60% { transform: translateY(64px) rotate(-10deg); }
                    80% { transform: translateY(64px) rotate(10deg); }
                }
                .animate-shake-infinite {
                    animation: shake-infinite 0.8s ease-in-out infinite;
                }
                @keyframes ping-once {
                    0% { transform: translateY(64px) scale(1); opacity: 1; }
                    50% { transform: translateY(64px) scale(1.5); opacity: 0.5; }
                    100% { transform: translateY(64px) scale(0.8); opacity: 0; }
                }
                .animate-ping-once {
                    animation: ping-once 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
}

import Link from "next/link";