import Link from "next/link";
import { cookies } from "next/headers";
import { UserRepository } from "@lib/db/repositories/user.repository";

import { UserMenu } from "@components/client/UserMenu";
import { Button } from "@components/ui/button";

const userRepo = new UserRepository();

export default async function Header() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;

    let user = null;
    if (userId) {
        user = await userRepo.findById(userId);
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-background border-b-4 border-primary z-50 shadow-shadow">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-8">
                <Link
                    href="/"
                    className="text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter uppercase hover:text-main transition-colors truncate"
                >
                    poke-performanze
                </Link>

                <nav className="font-bold flex items-center gap-3 sm:gap-6">
                    {user && (
                        <>
                            <Button
                                asChild
                                className="h-8 px-3 text-xs sm:text-sm font-black uppercase tracking-tighter rounded-full"
                            >
                                <Link href="/profile">Profile</Link>
                            </Button>
                            <UserMenu username={user.username} />
                        </>
                    )}
                </nav>
            </div>
        </header>
    );
}