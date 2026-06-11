'use client'

import React from 'react'
import { RegisterFields } from '../molecules/RegisterFields'
import { Button } from '../atoms/Button'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onDelete: () => void
  user?: Record<string, unknown>
}

export function EditUserForm({ onSubmit, onDelete, user }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full max-md:max-w-[350px] md:max-w-[800px] gap-4"
    >
      <RegisterFields initialValues={user} requirePassword={false} />

      <Button type="submit">Salvar alterações</Button>

      <Button type="button" onClick={onDelete} emojiSrc="/trash.png">
        Apagar Minha Conta
      </Button>
    </form>
  )
}
