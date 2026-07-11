'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import ModalPasswordForgotten from './ModalPasswordForgotten'

interface Props {
  loading: boolean
  error: string
  setAgreementOpen: (value: boolean) => void
  email: string
  setEmail: Dispatch<SetStateAction<string>>
  password: string
  setPassword: Dispatch<SetStateAction<string>>
}

export default function LoginForm({
  loading,
  error,
  setAgreementOpen,
  email,
  setEmail,
  password,
  setPassword,
}: Props) {
  const router = useRouter()

  const [modalOpen, setModalOpen] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    setAgreementOpen(true)
  }

  return (
    <>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[48px] rounded-xl border border-[#BDBDBD] px-4 outline-none"
        />

        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-[48px] rounded-xl border border-[#BDBDBD] px-4 outline-none"
        />

        {error && (
          <span className="text-sm text-red-500 font-medium">{error}</span>
        )}

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="self-end text-sm font-semibold text-[#EF7E06] hover:underline"
        >
          Esqueci minha senha
        </button>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2 cursor-pointer"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </Button>

        <p className="text-center text-sm text-[#777]">
          Ainda nao possui uma conta?{' '}
          <span
            onClick={() => router.push('/register')}
            className="text-[#EF7E06] font-semibold cursor-pointer"
          >
            Cadastre-se
          </span>
        </p>
      </form>

      {modalOpen && <ModalPasswordForgotten setModalState={setModalOpen} />}
    </>
  )
}
