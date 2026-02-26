'use client'

import React, { useState } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'

export function BlockUserForm() {
  const [error, setError] = useState('')

  async function handleBlock(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')

    console.log('E-mail para bloquear:', email)

    setError('')
  }

  return (
    <form
      onSubmit={handleBlock}
      className="flex flex-col w-full max-w-xs gap-4"
    >
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

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  )
}
