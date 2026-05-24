'use client'

import React from 'react'
import { RegisterFields } from '../molecules/RegisterFields'
import { Button } from '../atoms/Button'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  onDelete: () => void
}

export function EditUserForm({ onSubmit, onDelete }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full max-w-xs gap-4">
      <RegisterFields />

      <Button type="submit" color="orange">
        Salvar alterações
      </Button>

      <Button
        type="button"
        onClick={onDelete}
        color="red"
        emojiSrc="/trash.png"
      >
        Apagar Minha Conta
      </Button>
    </form>
  )
}
