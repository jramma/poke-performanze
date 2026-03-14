import Link from "next/link";
import { cookies } from "next/headers";
import { UserRepository } from "@lib/db/repositories/user.repository";

import { UserMenu } from "@components/client/UserMenu";

const userRepo = new UserRepository();

export default async function Header() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;
    
    let user = null;
    if (userId) {
        user = await userRepo.findById(userId);
    }

    return (
        <header className="fixed top-0 left-0 right-0 h-20 bg-background border-b-4 border-primary z-50 shadow-shadow flex items-center px-6 md:px-12">
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
                <Link href="/" className="text-2xl font-black italic tracking-tighter uppercase hover:text-main transition-colors">
                    poke-performanze
                </Link>

                <nav className="font-bold flex items-center gap-6">
                    {user ? (
                        <UserMenu username={user.username} />
                    ) : (
                        <Link href="/login" className="text-sm uppercase font-black tracking-widest hover:text-main underline decoration-4 decoration-primary underline-offset-4">
                            Sign up
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    );
}