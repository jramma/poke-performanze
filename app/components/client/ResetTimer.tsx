"use client";

import { useState, useEffect } from "react";

interface ResetTimerProps {
    isDevMode?: boolean;
}

export function ResetTimer({ isDevMode }: ResetTimerProps) {
    const [timeLeft, setTimeLeft] = useState<string>("");

    useEffect(() => {
        if (isDevMode) {
            setTimeLeft("DEVMODE");
            return;
        }

        const calculateTimeLeft = () => {
            const now = new Date();
            const tomorrow = new Date(now);
            tomorrow.setHours(24, 0, 0, 0);
            
            const diff = tomorrow.getTime() - now.getTime();
            
            const hours = Math.floor(diff / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            return `RESET ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        };

        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 60000); // Actualizar cada minuto

        return () => clearInterval(timer);
    }, [isDevMode]);

    if (!timeLeft) return null;

    return (
        <div className="absolute -top-3 -right-3 bg-main text-white text-[10px] px-3 py-1 rounded-base font-black animate-pulse shadow-shadow border-2 border-border z-10">
            {timeLeft}
        </div>
    );
}
