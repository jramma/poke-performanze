import { GAME_CONSTANTS, CatchResult, DailyReset, Pokemon } from './types';

export class GameEngine {
    private catchRate: number;
    private criticalRate: number;

    constructor(
        catchRate: number = GAME_CONSTANTS.BASE_CATCH_RATE,
        criticalRate: number = GAME_CONSTANTS.CRITICAL_CATCH_RATE
    ) {
        this.catchRate = catchRate;
        this.criticalRate = criticalRate;
    }

    /**
     * Intento de atrapar Pokémon con probabilidad pura
     */
    attemptCatch(pokeballsLeft: number): CatchResult {
        if (pokeballsLeft <= 0) {
            return this.createResult(false, 0, '¡No te quedan pokeballs!');
        }

        const newPokeballsLeft = pokeballsLeft - 1;
        const random = Math.random();

        // Primero verificar si es crítico (sobreescribe la probabilidad normal)
        if (random < this.criticalRate) {
            return this.createResult(
                true,
                newPokeballsLeft,
                '¡Atrapado crítico! ¡Increíble!',
                true,
                'success'
            );
        }

        // Probabilidad normal de captura
        if (random < this.catchRate + this.criticalRate) {
            return this.createResult(
                true,
                newPokeballsLeft,
                '¡Lo lograste! Pokémon atrapado',
                false,
                'success'
            );
        }

        // Fallo - depende de cuántas pokeballs quedan
        const message = newPokeballsLeft > 0
            ? `Fallaste... Te quedan ${newPokeballsLeft} pokeballs`
            : '¡Oh no! Se escapó. Vuelve mañana';

        return this.createResult(
            false,
            newPokeballsLeft,
            message,
            false,
            newPokeballsLeft > 0 ? 'shake' : 'break'
        );
    }

    /**
     * Versión mejorada con dificultad basada en el Pokémon
     */
    attemptCatchWithDifficulty(
        pokeballsLeft: number,
        pokemon: Pokemon,
        userLevel: number = 1
    ): CatchResult {
        if (pokeballsLeft <= 0) {
            return this.createResult(false, 0, '¡No te quedan pokeballs!');
        }

        // Calcular probabilidad dinámica
        let catchProbability = this.calculateCatchProbability(pokemon, userLevel);

        const random = Math.random();
        const newPokeballsLeft = pokeballsLeft - 1;

        // Añadir emoción - cuanto más difícil, más animación
        if (random < catchProbability) {
            const isCritical = random < this.criticalRate;
            const experience = this.calculateExperience(pokemon, isCritical);

            return {
                success: true,
                pokeballsRemaining: newPokeballsLeft,
                message: isCritical
                    ? '¡CRÍTICO! ¡Atrapado de manera épica!'
                    : '¡Atrapado!',
                critical: isCritical,
                animation: 'success',
                experience
            };
        }

        return {
            success: false,
            pokeballsRemaining: newPokeballsLeft,
            message: this.getFailureMessage(newPokeballsLeft, pokemon),
            animation: newPokeballsLeft > 0 ? 'shake' : 'break'
        };
    }

    /**
     * Calcula probabilidad basada en dificultad del Pokémon
     */
    private calculateCatchProbability(pokemon: Pokemon, userLevel: number): number {
        let baseRate = GAME_CONSTANTS.BASE_CATCH_RATE;

        // Pokémon legendarios son más difíciles
        if (pokemon.isLegendary) {
            baseRate *= 0.3; // 7.5% base
        }

        // Los de mayor experiencia son más difíciles
        const experienceFactor = Math.max(0.5, 1 - (pokemon.baseExperience / 1000));

        // El nivel del usuario ayuda (más experiencia = mejor probabilidad)
        const userFactor = 1 + (userLevel * 0.05);

        // Asegurar que nunca sea menor a 5% ni mayor a 90%
        return Math.min(0.9, Math.max(0.05, baseRate * experienceFactor * userFactor));
    }

    /**
     * Calcula experiencia ganada
     */
    private calculateExperience(pokemon: Pokemon, critical: boolean): number {
        let exp = GAME_CONSTANTS.EXPERIENCE_PER_CATCH;

        // Bonus por dificultad
        exp += Math.floor(pokemon.baseExperience / 4);

        if (pokemon.isLegendary) {
            exp += GAME_CONSTANTS.BONUS_LEGENDARY;
        }

        if (critical) {
            exp *= 2; // Doble experiencia por crítico
        }

        return exp;
    }

    private getFailureMessage(remaining: number, pokemon: Pokemon): string {
        if (remaining === 0) {
            return `${pokemon.name} se escapó... ¡Mañana será!`;
        }

        const messages = [
            `${pokemon.name} saltó!`,
            'Fallaste por poco...',
            '¡Agotó! Sigue intentando',
            'Casi... ¡otra vez!'
        ];

        return messages[Math.floor(Math.random() * messages.length)];
    }

    private createResult(
        success: boolean,
        remaining: number,
        message: string,
        critical: boolean = false,
        animation: 'shake' | 'break' | 'success' = 'shake'
    ): CatchResult {
        return {
            success,
            pokeballsRemaining: remaining,
            message,
            critical,
            animation
        };
    }
}