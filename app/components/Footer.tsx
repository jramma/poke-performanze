import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-background font-sans ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 flex flex-col items-center gap-6 text-center">

        {/* Brand */}
        <div className="flex items-center gap-2 font-bold uppercase tracking-tighter text-sm">
          <span>Made with</span>
          <Heart className="w-4 h-4 fill-main animate-pulse" />
          <span>by</span>
          <a
            href="https://casset.cat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-main underline decoration-2 underline-offset-4 hover:opacity-80 transition-opacity"
          >
            casset.cat
          </a>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-border rounded-full" />

        {/* Legal */}
        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground max-w-sm">
          <p>Not affiliated with Nintendo or The Pokémon Company.</p>
          <p>Your data is encrypted and deletable at any time from your profile.</p>
        </div>

        {/* Copyright + GitHub */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} poke-performanze · GPL-3.0 ·{" "}
          <a
            href="https://github.com/jramma/poke-performanze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline underline-offset-4"
          >
            GitHub
          </a>
        </p>

      </div>
    </footer>
  );
}
