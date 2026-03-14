// app/hooks/useGameLogic.ts
"use client";

import { useState, useCallback, useEffect } from 'react';
import { CatchResult, GameState } from '@lib/game-engine/types';

export function useGameLogic(userId: string) {
    const [gameState, setGameState] = useState<GameState | null>(null);
    const [lastResult, setLastResult] = useState<CatchResult | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Cargar juego al montar
    useEffect(() => {
        loadGame();
    }, []);

    const loadGame = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/game/state?userId=${userId}`);
            const data = await response.json();
            setGameState(data);
        } catch (err) {
            setError('Error al cargar el juego');
        } finally {
            setLoading(false);
        }
    };

    const throwPokeball = useCallback(async () => {
        if (gameState?.gameOver || gameState?.isCaught) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('/api/game/attempt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId })
            });

            const result = await response.json();
            setLastResult(result);

            if (result.success) {
                setGameState(prev => ({
                    ...prev!,
                    isCaught: true,
                    gameOver: true,
                    pokeballsRemaining: result.pokeballsRemaining
                }));
            } else {
                setGameState(prev => ({
                    ...prev!,
                    pokeballsRemaining: result.pokeballsRemaining,
                    gameOver: result.pokeballsRemaining === 0
                }));
            }
        } catch (err) {
            setError('Error al lanzar pokeball');
        } finally {
            setLoading(false);
        }
    }, [gameState, userId]);

    const resetGame = useCallback(() => {
        setLastResult(null);
        setError(null);
        loadGame();
    }, []);

    return {
        gameState,
        lastResult,
        loading,
        error,
        throwPokeball,
        resetGame
    };
}