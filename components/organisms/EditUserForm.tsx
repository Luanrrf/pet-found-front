'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { EditFields } from '../molecules/EditFields'
import { Button } from '../atoms/Button'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onDelete: () => void
  user?: Record<string, unknown>
}

export function EditUserForm({ onSubmit, onDelete, user }: Props) {
  const router = useRouter()
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full max-md:max-w-[350px] md:max-w-[800px] gap-4"
    >
      <EditFields initialValues={user} />

      <Button type="submit">Salvar alterações</Button>

      <Button type="button" onClick={() => router.push('/editpassword')}>
        Alterar senha
      </Button>

      <Button type="button" onClick={onDelete} emojiSrc="/trash.png">
        Apagar Minha Conta
      </Button>
    </form>
  )
}
