'use client'

import React, { useState } from 'react'
import { EmailPasswordFields } from '../molecules/EmailPasswordFields'
import { ErrorMessage } from '../molecules/ErrorMessage'
import { Button } from '../atoms/Button'

export function LoginForm() {
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const password = formData.get('password')
    console.log(email, password)

    setError('')
  }

  return (
    <form
      onSubmit={handleLogin}
      className="flex flex-col w-full max-w-xs gap-4"
    >
      <div className="text-gray-500 text-center">Ou entre com o seu e-mail</div>
      <EmailPasswordFields />
      {error && <ErrorMessage message={error} />}
      <Button type="submit">Entrar</Button>
    </form>
  )
}
