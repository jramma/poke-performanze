"use client";

import { useState } from "react";





function GameBoard({ dailyPokemon }: { dailyPokemon: Pokemon }) {
    const [pokeballs, setPokeballs] = useState(6);
    const [gameState, setGameState] = useState<GameState>('playing');

    const throwPokeball = () => {
        // Lógica en cliente - respuesta inmediata
        const success = Math.random() < 0.25;
        // Actualizar UI instantáneamente
    };

    return (
        <div>
            <PokemonDisplay pokemon={dailyPokemon} />
            <PokeballCounter count={pokeballs} />
            <button onClick={throwPokeball}>¡Lanzar Pokeball!</button>
        </div>
    );
}