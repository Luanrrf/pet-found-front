'use client'

import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import type { FormEventHandler } from 'react'

export function UnblockUserForm({
  onSubmit,
}: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full max-w-xs gap-4">
      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
      />

      <Button type="submit">Desbloquear</Button>
    </form>
  )
}
