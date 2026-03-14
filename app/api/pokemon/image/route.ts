import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const pokemonId = searchParams.get('id');

    if (!pokemonId) {
        return new NextResponse('Missing ID', { status: 400 });
    }

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

    try {
        const response = await fetch(imageUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (compatible; PokePerformanze/1.0)'
            }
        });
        
        if (!response.ok) {
            return new NextResponse('Error fetching from upstream', { status: response.status });
        }

        const buffer = await response.arrayBuffer();

        return new NextResponse(buffer, {
            headers: {
                'Content-Type': response.headers.get('Content-Type') || 'image/png',
                'Cache-Control': 'public, max-age=31536000, immutable',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new NextResponse('Image proxy error', { status: 500 });
    }
}
