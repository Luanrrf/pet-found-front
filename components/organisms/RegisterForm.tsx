'use client'

import React, { useState } from 'react'
import { RegisterFields } from '../molecules/RegisterFields'
import { Button } from '../atoms/Button'
import Modal from './Modal'
import AgreementTerms from '../atoms/AgreementTerms'

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function RegisterForm({ onSubmit }: Props) {
  const [error, setError] = useState('')
  const [openModal, setOpenModal] = useState(false)

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')
    onSubmit(event)
  }

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col w-full max-md:max-w-[350px] md:max-w-[800px] gap-4"
    >
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <AgreementTerms />
        </Modal>
      )}

      <RegisterFields />

      <label className="flex items-center gap-4 cursor-pointer">
        <input type="checkbox" name="agree" required className="peer sr-only" />

        <div className="relative size-6 shrink-0 rounded-lg border border-stone-300 bg-white transition-colors peer-checked:border-orange-500 peer-checked:bg-orange-500">
          <svg
            className="absolute inset-0 m-auto hidden size-4 text-white peer-checked:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="text-base font-normal leading-6 text-stone-500">
          Estou de acordo com os{' '}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="text-base font-normal leading-6 text-orange-500 hover:underline"
          >
            termos e condições
          </button>
        </span>
      </label>

      <Button
        type="submit"
        className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80 mt-4"
      >
        Registrar
      </Button>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  )
}
