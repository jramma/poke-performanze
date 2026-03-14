"use client";

export function PokedexSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 animate-pulse">
      {Array.from({ length: 12 }).map((_, i) => (
        <div 
          key={i} 
          className="aspect-square rounded-xl border-2 border-border bg-card shadow-shadow flex flex-col items-center justify-center p-4 gap-2"
        >
          {/* Sprite Placeholder */}
          <div className="w-16 h-16 rounded-full bg-muted" />
          
          {/* Name Placeholder */}
          <div className="h-4 w-20 bg-muted rounded" />
          
          {/* Type Placeholder */}
          <div className="flex gap-1 mt-1">
            <div className="h-3 w-10 bg-muted rounded-full" />
            <div className="h-3 w-10 bg-muted rounded-full" />
          </div>
        </div>
      ))}
    </div>
  );
}
