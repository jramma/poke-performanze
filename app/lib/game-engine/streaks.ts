// app/lib/game-engine/streaks.ts
export class StreakSystem {
    async calculateStreak(userId: string): Promise<{
        currentStreak: number;
        maxStreak: number;
        bonus: number;
    }> {
        const user = await db.user.findUnique({
            where: { id: userId },
            include: { dailyLogs: { orderBy: { date: 'desc' } } }
        });

        let currentStreak = 0;
        let maxStreak = 0;
        let streak = 0;

        // Calcular racha actual
        for (const log of user.dailyLogs) {
            if (log.caught) {
                streak++;
                currentStreak = streak;
            } else {
                break;
            }
        }

        // Bonus por racha
        const bonus = currentStreak * 0.05; // +5% por día de racha

        return {
            currentStreak,
            maxStreak: user.maxStreak || 0,
            bonus
        };
    }

    getStreakRewards(streak: number): {
        bonusCatchRate: number;
        extraPokeballs: number;
        title?: string;
    } {
        if (streak >= 30) {
            return { bonusCatchRate: 0.3, extraPokeballs: 3, title: 'Leyenda Pokémon' };
        }
        if (streak >= 15) {
            return { bonusCatchRate: 0.2, extraPokeballs: 2, title: 'Maestro Pokémon' };
        }
        if (streak >= 7) {
            return { bonusCatchRate: 0.1, extraPokeballs: 1, title: 'Entrenador Experto' };
        }
        return { bonusCatchRate: 0, extraPokeballs: 0 };
    }
}