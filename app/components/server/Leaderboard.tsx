import { UserRepository } from "@lib/db/repositories/user.repository";
import { Trophy } from "lucide-react";

const userRepo = new UserRepository();

const MEDAL = ["🥇", "🥈", "🥉"];

export async function Leaderboard() {
    const players = await userRepo.getLeaderboard(10);

    if (players.length === 0) return null;

    return (
        <section className="space-y-4 py-52 px-5">
            <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-main shrink-0" />
                <h2 className="text-xl font-black uppercase tracking-tighter italic">
                    Top Trainers
                </h2>
                <div className="h-1 bg-border flex-1 rounded-full opacity-50" />
            </div>

            <ol className="space-y-2">
                {players.map((player, i) => (
                    <li
                        key={player.username}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-border bg-card hover:border-primary transition-colors"
                    >
                        <span className="w-8 text-center text-lg shrink-0">
                            {MEDAL[i] ?? <span className="text-sm font-black text-muted-foreground">{i + 1}</span>}
                        </span>

                        <span className="font-black italic tracking-tight flex-1 truncate">
                            {player.nickname ?? player.username}
                        </span>

                        <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground shrink-0">
                            <span className="hidden sm:inline">Lv.{player.level}</span>
                            <span className="font-black text-foreground">{player.totalCatches}/151</span>
                            {player.currentStreak > 0 && (
                                <span className="text-main">🔥 {player.currentStreak}</span>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
