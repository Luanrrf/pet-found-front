'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  loading: boolean
  error: string
  setAgreementOpen: (value: boolean) => void
  handleLogin: (data: { email: string; password: string }) => void
}

export default function LoginForm({
  loading,
  error,
  setAgreementOpen,
  handleLogin,
}: Props) {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    setAgreementOpen(true)

    handleLogin({
      email,
      password,
    })
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-[48px] rounded-xl border border-[#BDBDBD] px-4 outline-none"
      />

      <input
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
        type="submit"
        disabled={loading}
        className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>

      <p className="text-center text-sm text-[#777] mt-6">
        Primeira vez?{' '}
        <span
          onClick={() => router.push('/register')}
          className="text-[#EF7E06] font-semibold cursor-pointer"
        >
          Clique aqui
        </span>
      </p>
    </form>
  )
}
