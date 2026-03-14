import { cache } from "react";

export const getPokemonList = cache(async () => {
    // 🔒 cache() de React - deduplica requests
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151', {
        next: { revalidate: 3600 } // Revalidar cada hora
    });
    return response.json();
});