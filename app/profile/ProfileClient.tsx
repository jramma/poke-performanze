'use client'

import { useState, useTransition } from 'react'
import { Button } from '@components/ui/button'
import { updateProfileAction, deleteAccountAction } from '@lib/actions/auth'
import { toast } from 'sonner'
import { Share2, Pencil, Trash2, Check, X } from 'lucide-react'

interface Props {
    userId: string
    nickname: string
    level: number
    totalCatches: number
    currentStreak: number
}

export function ProfileClient({ nickname, level, totalCatches, currentStreak }: Props) {
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState(nickname)
    const [isPending, startTransition] = useTransition()

    function handleShare() {
        const text = `I'm a Level ${level} trainer on Pokémon Performanze!\n🎯 ${totalCatches}/151 Pokémon caught · 🔥 ${currentStreak} day streak`
        if (navigator.share) {
            navigator.share({ title: 'Pokémon Performanze', text }).catch(() => {})
        } else {
            navigator.clipboard.writeText(text).then(() => toast.success('Copied to clipboard!'))
        }
    }

    function handleEdit() {
        setValue(nickname)
        setEditing(true)
    }

    function handleCancel() {
        setValue(nickname)
        setEditing(false)
    }

    function handleSave() {
        if (value.trim() === nickname) { setEditing(false); return }
        startTransition(async () => {
            const fd = new FormData()
            fd.set('nickname', value.trim())
            const result = await updateProfileAction(fd)
            if (result.success) {
                toast.success(result.message)
                setEditing(false)
            } else {
                toast.error(result.message)
            }
        })
    }

    function handleDelete() {
        startTransition(async () => {
            await deleteAccountAction()
        })
    }

    return (
        <div className="space-y-6">
            {/* Nickname row */}
            <div className="flex items-center justify-between gap-4 border-b border-border/40 pb-4">
                <div className="space-y-1 flex-1 min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Nickname</p>
                    {editing ? (
                        <input
                            autoFocus
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            onKeyDown={e => { if (e.key === 'Enter') handleSave(); if (e.key === 'Escape') handleCancel() }}
                            className="w-full px-3 py-1.5 bg-muted border-2 border-primary rounded-lg font-bold text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                            maxLength={32}
                        />
                    ) : (
                        <p className="font-black text-lg tracking-tight truncate">{nickname}</p>
                    )}
                </div>

                <div className="flex gap-2 shrink-0">
                    {editing ? (
                        <>
                            <Button size="icon" variant="reverse" onClick={handleCancel} disabled={isPending} className="h-8 w-8">
                                <X className="w-4 h-4" />
                            </Button>
                            <Button size="icon" onClick={handleSave} disabled={isPending} className="h-8 w-8">
                                <Check className="w-4 h-4" />
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button size="sm" variant="reverse" onClick={handleShare} className="gap-2 font-black uppercase tracking-tighter text-xs">
                                <Share2 className="w-4 h-4" />
                                Share
                            </Button>
                            <Button size="sm" variant="reverse" onClick={handleEdit} className="gap-2 font-black uppercase tracking-tighter text-xs">
                                <Pencil className="w-4 h-4" />
                                Edit
                            </Button>
                        </>
                    )}
                </div>
            </div>

            {/* Danger zone */}
            <div className="pt-2 border-t border-border/60 space-y-3">
                <p className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">Danger zone</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                    Deleting your profile will permanently remove your trainer, your Pokédex progress and all game data. This action cannot be undone.
                </p>
                <Button
                    variant="reverse"
                    onClick={handleDelete}
                    disabled={isPending}
                    className="gap-2 font-black uppercase tracking-tighter"
                >
                    <Trash2 className="w-4 h-4" />
                    Delete my profile
                </Button>
            </div>
        </div>
    )
}
