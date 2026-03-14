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
     * Simple catch attempt with base probability.
     */
    attemptCatch(pokeballsLeft: number): CatchResult {
        if (pokeballsLeft <= 0) {
            return this.createResult(false, 0, 'No Pokéballs left!');
        }

        const newPokeballsLeft = pokeballsLeft - 1;
        const random = Math.random();

        // First, check critical catch (overrides normal probability)
        if (random < this.criticalRate) {
            return this.createResult(
                true,
                newPokeballsLeft,
                'Critical catch! Incredible!',
                true,
                'success'
            );
        }

        // Normal catch probability
        if (random < this.catchRate + this.criticalRate) {
            return this.createResult(
                true,
                newPokeballsLeft,
                'You did it! Pokémon caught',
                false,
                'success'
            );
        }

        // Missed throw - message depends on remaining Pokéballs
        const message = newPokeballsLeft > 0
            ? `Missed... You have ${newPokeballsLeft} Pokéballs left`
            : 'Oh no! It escaped. Come back tomorrow.';

        return this.createResult(
            false,
            newPokeballsLeft,
            message,
            false,
            newPokeballsLeft > 0 ? 'shake' : 'break'
        );
    }

    /**
     * Improved version that accounts for Pokémon difficulty and user level.
     */
    attemptCatchWithDifficulty(
        pokeballsLeft: number,
        pokemon: Pokemon,
        userLevel: number = 1
    ): CatchResult {
        if (pokeballsLeft <= 0) {
            return this.createResult(false, 0, 'No Pokéballs left!');
        }

        // Dynamic catch probability
        let catchProbability = this.calculateCatchProbability(pokemon, userLevel);

        const random = Math.random();
        const newPokeballsLeft = pokeballsLeft - 1;

        // More excitement: harder Pokémon produce more animation
        if (random < catchProbability) {
            const isCritical = random < this.criticalRate;
            const experience = this.calculateExperience(pokemon, isCritical);

            return {
                success: true,
                pokeballsRemaining: newPokeballsLeft,
                message: isCritical
                    ? 'CRITICAL! Epic catch!'
                    : 'Caught!',
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
     * Compute probability based on Pokémon difficulty and user level.
     */
    private calculateCatchProbability(pokemon: Pokemon, userLevel: number): number {
        let baseRate = GAME_CONSTANTS.BASE_CATCH_RATE;

        // Legendary Pokémon are harder to catch
        if (pokemon.isLegendary) {
            baseRate *= 0.3; // 7.5% base
        }

        // Higher base experience ⇒ harder
        const experienceFactor = Math.max(0.5, 1 - (pokemon.baseExperience / 1000));

        // User level helps a bit
        const userFactor = 1 + (userLevel * 0.05);

        // Clamp between 5% and 90%
        return Math.min(0.9, Math.max(0.05, baseRate * experienceFactor * userFactor));
    }

    /**
     * Compute experience gained on successful catch.
     */
    private calculateExperience(pokemon: Pokemon, critical: boolean): number {
        let exp = GAME_CONSTANTS.EXPERIENCE_PER_CATCH;

        // Bonus based on Pokémon difficulty
        exp += Math.floor(pokemon.baseExperience / 4);

        if (pokemon.isLegendary) {
            exp += GAME_CONSTANTS.BONUS_LEGENDARY;
        }

        if (critical) {
            exp *= 2; // Double experience on critical
        }

        return exp;
    }

    private getFailureMessage(remaining: number, pokemon: Pokemon): string {
        if (remaining === 0) {
            return `${pokemon.name} escaped... Try again tomorrow!`;
        }

        const messages = [
            `${pokemon.name} jumped out!`,
            'You almost had it...',
            'So close! Keep trying.',
            'Nearly there... throw again!'
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