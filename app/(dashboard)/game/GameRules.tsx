'use client'

import { useState, useEffect } from 'react'
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react'

export function GameRules() {
    const [visible, setVisible] = useState(true)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        const fade = setTimeout(() => setFading(true), 5000)
        const hide = setTimeout(() => setVisible(false), 5700)
        return () => { clearTimeout(fade); clearTimeout(hide) }
    }, [])

    if (!visible) {
        return (
            <button
                onClick={() => { setVisible(true); setFading(false) }}
                className="flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-muted-foreground hover:text-foreground transition-colors mx-auto"
            >
                <BookOpen className="w-4 h-4" />
                Show rules
                <ChevronDown className="w-3.5 h-3.5" />
            </button>
        )
    }

    return (
        <section
            className={`bg-card/70 border-2 border-dashed border-primary rounded-2xl p-4 text-xs md:text-sm text-muted-foreground leading-relaxed transition-opacity duration-700 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
            <div className="flex items-center justify-between mb-2">
                <h2 className="font-black uppercase tracking-widest text-foreground text-[11px]">
                    How the daily game works
                </h2>
                <button
                    onClick={() => { setFading(true); setTimeout(() => setVisible(false), 700) }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Close rules"
                >
                    <ChevronUp className="w-4 h-4" />
                </button>
            </div>
            <ul className="list-disc list-inside space-y-1 font-sans font-medium">
                <li>Each day a <span className="font-bold text-foreground">single wild Pokémon</span> appears for you to catch.</li>
                <li>You start with <span className="font-bold text-foreground">your maximum Pokéballs</span> — this increases as you level up.</li>
                <li>Each throw uses 1 Pokéball. If you run out, the Pokémon escapes until the next day.</li>
                <li>You can only catch <span className="font-bold text-foreground">1 daily Pokémon</span> per day.</li>
                <li>Difficulty and experience rewards depend on the Pokémon and your current level.</li>
            </ul>
        </section>
    )
}
