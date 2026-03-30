import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@components/ui/card'
import { UserRepository } from '@lib/db/repositories/user.repository'
import { ProfileClient } from './ProfileClient'
import { Leaderboard } from '@components/server/Leaderboard'

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
    redirect('/api/logout')
  }

  return (
    <div className="w-full max-w-2xl mx-auto pb-10 md:pb-14 font-sans space-y-10">
      <Card className="border-4 border-primary shadow-shadow bg-card">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl font-black italic tracking-tighter uppercase">
            Trainer profile
          </CardTitle>
          <CardDescription className="text-xs md:text-sm font-medium text-muted-foreground">
            Your account details and game stats
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">

          <ProfileClient
            userId={userId}
            nickname={user.nickname ?? user.username}
            level={user.level}
            totalCatches={user.totalCatches}
            currentStreak={user.currentStreak}
          />

          <section className="space-y-3 border-t border-border/40 pt-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Account</h2>
            <div className="grid grid-cols-[100px_1fr] gap-y-2 gap-x-4 text-sm">
              <span className="font-black uppercase tracking-tighter text-muted-foreground text-xs">Email</span>
              <span className="font-medium break-all">{user.email}</span>
            </div>
          </section>

          <section className="space-y-3 border-t border-border/40 pt-4">
            <h2 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Progress</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat label="Level" value={user.level} />
              <Stat label="Caught" value={`${user.totalCatches}/151`} />
              <Stat label="Streak" value={`${user.currentStreak}d`} />
              <Stat label="Best streak" value={`${user.maxStreak}d`} />
            </div>
          </section>

        </CardContent>
      </Card>

      <section id="ranking">
        <Leaderboard />
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="bg-muted rounded-xl p-3 text-center border-2 border-border">
      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className="text-xl font-black tracking-tighter">{value}</p>
    </div>
  )
}
