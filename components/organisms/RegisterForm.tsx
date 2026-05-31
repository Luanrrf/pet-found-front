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
      className="flex flex-col w-full max-w-xs gap-4"
    >
      {openModal && (
        <Modal closeModal={() => setOpenModal(false)}>
          <AgreementTerms />
        </Modal>
      )}

      <RegisterFields />

      <label className="flex items-start gap-2 text-gray-700 text-sm">
        <input type="checkbox" name="agree" className="mt-1" required />

        <span>
          Estou de acordo com os{' '}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="text-orange-600 font-semibold underline"
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
