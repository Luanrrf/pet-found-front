'use client'

import React, { useState } from 'react'
import { RegisterFields } from '../molecules/RegisterFields'
import { Button } from '../atoms/Button'
import { handleShowTerms } from '../molecules/handleShowTerms'

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function RegisterForm({ onSubmit }: Props) {
  const [error, setError] = useState('')

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    onSubmit(event)
  }

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col w-full max-w-xs gap-4"
    >
      <RegisterFields />

      <label className="flex items-start gap-2 text-gray-700 text-sm">
        <input type="checkbox" name="agree" className="mt-1" required />

        <span>
          Estou de acordo com os{' '}
          <button
            type="button"
            onClick={handleShowTerms}
            className="text-orange-600 font-semibold underline"
          >
            termos e condições
          </button>
        </span>
      </label>

      <Button type="submit" color="orange">
        Registrar
      </Button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  )
}
