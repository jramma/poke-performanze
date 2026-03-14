import { NextResponse } from 'next/server';
import { gameEngine } from '@/lib/game-engine';

export async function POST(req: Request) {
    const { userId, pokemonId } = await req.json();

    // Validar en servidor (seguridad)
    const canPlay = await gameEngine.canPlayToday(userId);
    if (!canPlay) {
        return NextResponse.json({ error: 'Ya jugaste hoy' }, { status: 400 });
    }

    const result = await gameEngine.attemptCatch(userId, pokemonId);

    // Cache-Control para evitar re-jugadas
    return NextResponse.json(result, {
        headers: {
            'Cache-Control': 'no-store, max-age=0',
        }
    });
}