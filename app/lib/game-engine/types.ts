export interface Pokemon {
    id: number;
    name: string;
    sprite: string;
    types: string[];
    baseExperience: number;
    isLegendary?: boolean;
}

export interface User {
    id: string;
    username: string;
    caughtPokemon: number[]; // IDs of caught Pokémon
    lastGameDate?: string;   // ISO date string
    dailyAttempts: number;
}

export interface GameState {
    userId: string;
    pokemonId: number;
    pokeballsRemaining: number;
    attempts: number;
    isCaught: boolean;
    gameOver: boolean;
    lastAttemptDate: Date;
    sessionId?: string;
}

export interface CatchResult {
    success: boolean;
    pokeballsRemaining: number;
    message: string;
    critical?: boolean;      // Critical catch
    animation?: 'shake' | 'break' | 'success';
    experience?: number;
}

export interface DailyReset {
    canPlay: boolean;
    timeUntilReset: number;  // Milliseconds until next reset
    nextResetDate: Date;
}

export const GAME_CONSTANTS = {
    BASE_CATCH_RATE: 0.25,           // 25% base
    CRITICAL_CATCH_RATE: 0.05,       // 5% critical catch rate
    MAX_DAILY_POKEBALLS: 6,
    POKEMON_LIMIT: 151,
    RESET_HOUR_UTC: 0,               // Reset at midnight UTC
    EXPERIENCE_PER_CATCH: 100,
    BONUS_LEGENDARY: 500,
} as const;