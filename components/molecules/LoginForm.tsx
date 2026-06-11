'use client'

import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import fetcher from '../utils/fetcher'
import { API_URL } from '../constants/api'

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

  async function handleForgotPassword() {
    const emailResult = await Swal.fire({
      title: 'Redefinir senha',
      input: 'email',
      inputLabel: 'Informe seu e-mail cadastrado',
      inputValue: email,
      showCancelButton: true,
      confirmButtonText: 'Continuar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => (!value ? 'Informe seu e-mail.' : null),
    })

    if (!emailResult.isConfirmed || !emailResult.value) return

    const passwordResult = await Swal.fire({
      title: 'Nova senha',
      input: 'password',
      inputLabel: 'Digite sua nova senha',
      showCancelButton: true,
      confirmButtonText: 'Salvar senha',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) =>
        !value || value.length < 6
          ? 'A senha deve ter pelo menos 6 caracteres.'
          : null,
    })

    if (!passwordResult.isConfirmed || !passwordResult.value) return

    const response = await fetcher({
      url: `${API_URL}/auth/forgot-password`,
      method: 'POST',
      body: {
        email: emailResult.value,
        password: passwordResult.value,
      },
    })

    if (response.status >= 200 && response.status < 300) {
      await Swal.fire('Senha alterada', 'Voce ja pode fazer login.', 'success')
      setEmail(emailResult.value)
      setPassword('')
      return
    }

    await Swal.fire(
      'Nao foi possivel alterar a senha',
      response.message || 'Verifique o e-mail informado e tente novamente.',
      'error'
    )
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

      <button
        type="button"
        onClick={handleForgotPassword}
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
