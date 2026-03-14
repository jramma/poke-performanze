// app/lib/game-engine/streaks.ts
import { prisma } from '@lib/db';

export class StreakSystem {
    async calculateStreak(userId: string): Promise<{
        currentStreak: number;
        maxStreak: number;
        bonus: number;
    }> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: { dailyLogs: { orderBy: { date: 'desc' } } }
        });

        if (!user) {
            return { currentStreak: 0, maxStreak: 0, bonus: 0 };
        }

        let currentStreak = 0;
        let maxStreak = user.maxStreak ?? 0;
        let streak = 0;

        // Compute current streak
        for (const log of user.dailyLogs) {
            if (log.caught) {
                streak++;
                currentStreak = streak;
            } else {
                break;
            }
        }

        // Streak bonus: +5% catch rate per day
        const bonus = currentStreak * 0.05;

        return {
            currentStreak,
            maxStreak,
            bonus
        };
    }

    getStreakRewards(streak: number): {
        bonusCatchRate: number;
        extraPokeballs: number;
        title?: string;
    } {
        if (streak >= 30) {
            return { bonusCatchRate: 0.3, extraPokeballs: 3, title: 'Pokémon Legend' };
        }
        if (streak >= 15) {
            return { bonusCatchRate: 0.2, extraPokeballs: 2, title: 'Pokémon Master' };
        }
        if (streak >= 7) {
            return { bonusCatchRate: 0.1, extraPokeballs: 1, title: 'Expert Trainer' };
        }
        return { bonusCatchRate: 0, extraPokeballs: 0 };
    }
}