import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@components/ui/card'
import { Button } from '@components/ui/button'
import { UserRepository } from '@lib/db/repositories/user.repository'
import { deleteAccountAction } from '@lib/actions/auth'

const userRepo = new UserRepository()

export const dynamic = 'force-dynamic'

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) {
    redirect('/login')
  }

  const user = await userRepo.findById(userId)

  if (!user) {
    redirect('/login')
  }

  async function handleDelete() {
    'use server'
    await deleteAccountAction()
  }

  return (
    <main className="w-full max-w-2xl mx-auto py-10 md:py-14 font-sans space-y-8">
      <Card className="border-4 border-primary shadow-shadow bg-card">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">
            Trainer profile
          </CardTitle>
          <CardDescription className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Your account details and game stats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <section className="space-y-2 text-sm md:text-base">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Account
            </h2>
            <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Trainer name
              </span>
              <span className="font-bold">{user.username}</span>

              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Email
              </span>
              <span className="font-bold break-all">{user.email}</span>
            </div>
          </section>

          <section className="space-y-2 text-sm md:text-base">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground">
              Progress
            </h2>
            <div className="grid grid-cols-[120px_1fr] gap-2 text-sm">
              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Level
              </span>
              <span className="font-bold">{user.level}</span>

              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Total catches
              </span>
              <span className="font-bold">{user.totalCatches}</span>

              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Current streak
              </span>
              <span className="font-bold">{user.currentStreak}</span>

              <span className="font-black uppercase tracking-tighter text-muted-foreground">
                Max streak
              </span>
              <span className="font-bold">{user.maxStreak}</span>
            </div>
          </section>

          <form action={handleDelete} className="pt-4 border-t border-border/60 space-y-3">
            <p className="text-[11px] md:text-xs text-muted-foreground font-medium uppercase tracking-widest">
              Danger zone
            </p>
            <p className="text-[11px] md:text-xs text-muted-foreground leading-relaxed">
              Deleting your profile will permanently remove your trainer, your Pokédex progress and
              all game data. This action cannot be undone.
            </p>
            <Button
              type="submit"
              variant="destructive"
              className="w-full md:w-auto mt-1 font-black uppercase tracking-tighter"
            >
              Delete my profile
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}

