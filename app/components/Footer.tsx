import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className=" bottom-0 left-0 right-0 h-12 bg-background border-t-4 border-primary z-50 flex items-center justify-center px-6">
            <div className="flex items-center gap-2 font-black uppercase tracking-tighter text-xs md:text-sm italic">
                <span>Made with</span>
                <Heart className="w-5 h-5  fill-main animate-pulse" />
                <span>Love by</span>
                <a
                    href="https://casset.cat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary  transition-colors underline decoration-2 underline-offset-4"
                >
                    casset.cat
                </a>
            </div>
        </footer>
    );
}
