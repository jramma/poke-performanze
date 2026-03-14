'use client'
import { useMemo, useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface UserProgressProps {
    level: number;
    experience: number;
    totalCatches: number;
    currentStreak: number;
}

export function UserProgress({ level, experience, totalCatches, currentStreak }: UserProgressProps) {
    const [displayProgress, setDisplayProgress] = useState(0);

    const targetProgress = useMemo(() => {
        const currentLevelTotalExp = (level - 1) * 100;
        const relativeExp = experience - currentLevelTotalExp;
        return Math.max(0, Math.min(100, relativeExp));
    }, [experience, level]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplayProgress(targetProgress);
        }, 100);
        return () => clearTimeout(timer);
    }, [targetProgress]);

    return (
        <div className="bg-card border-4 border-primary rounded-2xl p-6 shadow-shadow flex flex-col md:flex-row gap-8 items-center md:items-stretch overflow-hidden relative">
            {/* Retro backgrounds */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 animate-pulse" />

            {/* Level Circle */}
            <div className="relative flex flex-col items-center justify-center bg-primary text-primary-foreground w-24 h-24 rounded-full border-4 border-primary shadow-shadow shrink-0">
                <span className="text-[10px] uppercase font-black opacity-70">LVL</span>
                <span className="text-4xl font-black italic">{level}</span>
            </div>

            {/* Stats */}
            <div className="flex-1 w-full space-y-4">
                <div className="flex justify-between items-end">
                    <div className="space-y-1">
                        <div className="text-[10px] font-black uppercase text-muted-foreground">Experience</div>
                        <div className="text-xl font-black italic tracking-tighter">
                            {experience} <span className="text-xs text-muted-foreground not-italic font-bold tracking-normal">/ {level * 100} EXP</span>
                        </div>
                    </div>
                    <div className="text-right space-y-1">
                        <div className="text-[10px] font-black uppercase text-muted-foreground italic">Current streak</div>
                        <div className="text-xl font-black italic text-main tracking-tighter">
                            {currentStreak} <span className="text-xs not-italic">DAYS</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <Progress value={displayProgress} className="h-6 border-primary" />
                </div>

                <div className="flex gap-4 text-[10px] font-black uppercase tracking-tight text-muted-foreground">
                    <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Total caught: {totalCatches}
                    </span >
                </div>
            </div>
        </div>
    );
}
