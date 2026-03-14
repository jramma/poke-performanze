"use client";

import { useState } from "react";
import { logoutAction } from "@lib/actions/auth";

interface UserMenuProps {
    username: string;
}

export function UserMenu({ username }: UserMenuProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={async () => {
                await logoutAction();
            }}
            className="flex flex-col items-end cursor-pointer group"
        >
            <span className="text-muted-foreground text-[10px] uppercase font-black transition-all duration-300 group-hover:opacity-0">
                Trainer
            </span>
            <span className="text-lg font-black italic text-main transition-all duration-300 group-hover:text-destructive">
                {isHovered ? "LOGOUT" : username}
            </span>
        </button>
    );
}
