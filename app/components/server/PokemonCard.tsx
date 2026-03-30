import Image from 'next/image'

interface PokemonCardProps {
  pokemon: {
    id: number
    name: string
    sprite: string
    types: string[]
  }
  isCaught: boolean
}

export function PokemonCard({ pokemon, isCaught }: PokemonCardProps) {
  return (
    <div className={`
      relative group flex flex-col items-center justify-center p-4 rounded-2xl border-4 transition-all duration-300
      ${isCaught 
        ? 'bg-card border-primary shadow-shadow grayscale-0' 
        : 'bg-muted/30 border-border/50 grayscale opacity-40 hover:opacity-100 hover:grayscale-0'
      }
    `}>
      {/* Sprite Container */}
      <div className="relative w-24 h-24 mb-2 flex items-center justify-center">
        {isCaught && (
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping scale-75 opacity-50" />
        )}
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={pokemon.name}
          width={96}
          height={96}
          sizes="96px"
          className="object-contain z-10 transition-transform group-hover:scale-110"
          priority={isCaught && pokemon.id <= 20}
          unoptimized={!isCaught}
        />
      </div>

      {/* ID Badge */}
      <span className="absolute top-2 right-2 text-[10px] font-black font-mono text-muted-foreground/30">
        #{String(pokemon.id).padStart(3, '0')}
      </span>

      {/* Info */}
      <div className="text-center space-y-1">
        <h3 className="font-black uppercase tracking-tighter text-sm text-foreground truncate max-w-[120px]">
          {isCaught ? pokemon.name : '???'}
        </h3>
        
        <div className="flex gap-1 justify-center">
          {pokemon.types.map(type => (
            <span 
              key={type} 
              className={`text-[8px] font-bold px-2 py-0.5 rounded-full uppercase ${
                isCaught ? 'bg-primary/20 text-primary' : 'bg-border text-muted-foreground/50'
              }`}
            >
              {isCaught ? type : '???'}
            </span>
          ))}
        </div>
      </div>

      {/* Retro Look Scanline Effect for missing pokemon */}
      {!isCaught && (
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] z-20 pointer-events-none bg-[length:100%_2px,3px_100%] rounded-xl" />
      )}
    </div>
  )
}
