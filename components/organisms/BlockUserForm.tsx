'use client'

import type { FormEventHandler } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export function BlockUserForm({ onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full max-w-xs gap-4">
      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
      />

      <Button type="submit" color="orange">
        Bloquear
      </Button>
    </form>
  )
}
