'use client'

import React from 'react'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export function EditPasswordForm({ onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full max-md:max-w-[350px] md:max-w-[800px] gap-4"
    >
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Nova senha"
        required
      />

      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirmar nova senha"
        required
      />

      <Button type="submit">Salvar nova senha</Button>
    </form>
  )
}
