'use client'

import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import Link from 'next/link'

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

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    setAgreementOpen(true)
  }

  return (
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

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2 cursor-pointer"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>

      <p className="text-center text-sm text-[#777] mt-6">
        Primeira vez?{' '}
        <span
          onClick={() => router.push('/register')}
          className="text-[#EF7E06] font-semibold cursor-pointer"
        >
          Clique aqui
        </span>
      </p>

      <div className="flex w-full mb-4">
        <Link href="/" className="flex w-full">
          <Button className="w-full bg-transparent border border-orange-400 text-orange-400 rounded cursor-pointer">
            Voltar
          </Button>
        </Link>
      </div>
    </form>
  )
}
