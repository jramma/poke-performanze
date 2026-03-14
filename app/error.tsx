'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@components/ui/button'

type GlobalErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html lang="en">
      <body className="min-h-screen bg-secondary-background flex items-center justify-center px-4 py-8 font-early-gameboy">
        <div className="w-full max-w-md space-y-6 text-center border-4 border-primary rounded-3xl bg-card shadow-shadow p-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-black uppercase tracking-tighter italic text-foreground">
              Something went wrong!
            </h1>
            <p className="text-sm text-muted-foreground font-medium">
              A wild network error appeared while loading your Pokédex or today&apos;s game.
              Please try again in a moment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              type="button"
              onClick={reset}
              className="font-black uppercase tracking-tighter"
            >
              Try again
            </Button>
            <Button
              type="button"
              asChild
              variant="neutral"
              className="font-black uppercase tracking-tighter"
            >
              <Link href="/">
                Back to Pokédex
              </Link>
            </Button>
          </div>

          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
            If the problem persists, come back later – even Elite Four servers faint sometimes.
          </p>
        </div>
      </body>
    </html>
  )
}

