"use client";

import { logoutAction } from "@lib/actions/auth";
import { Button } from "@components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton({ className }: { className?: string }) {
    return (
        <form action={logoutAction}>
            <Button
                type="submit"
                variant="neutral"
                className={`cursor-pointer px-3 text-xs font-black uppercase tracking-tighter gap-1.5 ${className ?? "h-8 rounded-full"}`}
            >
                <LogOut className="w-3.5 h-3.5" />
                Logout
            </Button>
        </form>
    );
}
