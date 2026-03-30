import Link from "next/link";
import { cookies } from "next/headers";
import { UserRepository } from "@lib/db/repositories/user.repository";
import { LogoutButton } from "@components/client/LogoutButton";
import { Button } from "@components/ui/button";
import { Menu, X } from "lucide-react";

const userRepo = new UserRepository();

export default async function Header() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("userId")?.value;

  let user = null;
  if (userId) {
    user = await userRepo.findById(userId);
  }

  return (
    <header className="fixed max-w-screen top-0 left-0 right-0 bg-background border-b-4 border-primary z-50 shadow-shadow pt-[env(safe-area-inset-top)]">
      {/* Hidden checkbox — controls mobile menu via CSS peer */}
      {user && (
        <input type="checkbox" id="mobile-nav" className="peer/mob sr-only" />
      )}

      {/* ── Main bar ── */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between h-16 sm:h-20 px-4 sm:px-6 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-black italic tracking-tighter uppercase hover:text-main transition-colors truncate"
        >
          <img
            src="/favicon_io/favicon-32x32.png"
            alt="Poke-Performanze"
            className="w-8 h-8 sm:hidden rounded-xs"
          />
          <span className="hidden sm:inline">poke-performanze</span>
        </Link>

        {user && (
          <>
            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-2">
              <div className="flex flex-col items-end mr-2">
                <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest leading-none">
                  Trainer
                </span>
                <span className="text-base font-black italic text-main leading-tight truncate max-w-32">
                  {user.nickname ?? user.username}
                </span>
              </div>

              <Button
                asChild
                variant="neutral"
                className="h-8 px-3 text-xs font-black uppercase tracking-tighter rounded-full"
              >
                <Link href="/profile#ranking">🏆 Ranking</Link>
              </Button>
              <Button
                asChild
                variant="neutral"
                className="h-8 px-3 text-xs font-black uppercase tracking-tighter rounded-full"
              >
                <Link href="/profile">Profile</Link>
              </Button>
              <LogoutButton />
            </nav>

            {/* Mobile hamburger — label toggles the checkbox */}
            <label
              htmlFor="mobile-nav"
              className="lg:hidden cursor-pointer p-2 -mr-2 relative"
              aria-label="Toggle menu"
            >
              {/* ☰ shown when unchecked, × when checked — toggled via sibling peer */}
              <Menu className="w-6 h-6 peer-checked/mob:hidden" />
              <X className="w-6 h-6 hidden peer-checked/mob:block absolute inset-2" />
            </label>
          </>
        )}
      </div>

      {/* ── Mobile dropdown — slides in from top ── */}
      {user && (
        <nav
          className="
            lg:hidden absolute top-full left-0 right-0
            bg-background border-b-4 border-primary shadow-shadow
            flex flex-col gap-3 px-4 pb-5 pt-4
            opacity-0 -translate-y-3 pointer-events-none
            peer-checked/mob:opacity-100 peer-checked/mob:translate-y-0 peer-checked/mob:pointer-events-auto
            transition-all duration-200 ease-out
          "
        >
          <div className="flex items-center justify-between border-b border-border pb-3">
            <div>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                Trainer
              </p>
              <p className="font-black italic text-main text-lg leading-tight">
                {user.nickname ?? user.username}
              </p>
            </div>
            <label htmlFor="mobile-nav" className="cursor-pointer p-2 -mr-2">
              <X className="w-5 h-5" />
            </label>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Button
              asChild
              variant="neutral"
              className="h-10 text-xs font-black uppercase tracking-tighter rounded-xl"
            >
              <Link href="/profile#ranking">🏆 Ranking</Link>
            </Button>
            <Button
              asChild
              variant="neutral"
              className="h-10 text-xs font-black uppercase tracking-tighter rounded-xl"
            >
              <Link href="/profile">Profile</Link>
            </Button>
            <LogoutButton className="h-10 rounded-xl" />
          </div>
        </nav>
      )}
    </header>
  );
}
