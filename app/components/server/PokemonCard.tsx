"use client";

import Image from 'next/image';
import { Badge } from 'lucide-react'; // Simulo badges con íconos o clases

interface PokemonCardProps {
  pokemon: {
    id: number;
    name: string;
    sprite: string;
    types: string[];
  };
  isCaught: boolean;
}

export function PokemonCard({ pokemon, isCaught }: PokemonCardProps) {
  return (
    <div className={`
      relative group flex flex-col items-center justify-center p-4 rounded-2xl border-4 transition-all duration-300
      ${isCaught 
        ? 'bg-card border-primary shadow-shadow grayscale-0' 
        : 'bg-muted/30 border-border/50 grayscale opacity-60 hover:opacity-80 hover:grayscale-[0.5]'
      }
    `}>
      {/* Sprite Container */}
      <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
        {isCaught && (
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping scale-75 opacity-50" />
        )}
        <img 
          src={pokemon.sprite} 
          alt={pokemon.name} 
          className={`w-20 h-20 object-contain z-10 transition-transform group-hover:scale-110`}
        />
      </div>

      {/* ID Badge */}
      <span className="absolute top-2 right-2 text-[10px] font-black font-mono text-muted-foreground/50">
        #{String(pokemon.id).padStart(3, '0')}
      </span>

      {/* Info */}
      <div className="text-center space-y-1">
        <h3 className="font-black uppercase tracking-tighter text-sm text-foreground truncate max-w-[120px]">
          {pokemon.name}
        </h3>
        
        <div className="flex gap-1 justify-center">
          {pokemon.types.map(type => (
            <span 
              key={type} 
              className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-border text-muted-foreground uppercase"
            >
              {type}
            </span>
          ))}
        </div>
      </div>

      {/* Status Overlay */}
      {!isCaught && (
        <div className="absolute inset-0 bg-background/10 backdrop-blur-[1px] rounded-xl pointer-events-none" />
      )}
    </div>
  );
}
