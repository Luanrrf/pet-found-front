'use client'

import LoginForm from '@/components/molecules/LoginForm'
import AgreementModal from '@/components/molecules/AgreementModal'
import { useState } from 'react'

interface Props {
  loading: boolean
  error: string
  agreementOpen: boolean
  setAgreementOpen: (value: boolean) => void

  handleLogin: (data: { email: string; password: string }) => void
}

export default function LoginTemplate({
  loading,
  error,
  agreementOpen,
  setAgreementOpen,
  handleLogin,
}: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="w-full max-w-[600px] mx-auto h-full bg-white rounded-xl p-5 mt-[10vh] mb-[10vh]">
        <h2 className="text-4xl font-bold text-orange-400 mb-[60px] text-center text-shadow-lg">
          Entrar
        </h2>

        <LoginForm
          loading={loading}
          error={error}
          setAgreementOpen={setAgreementOpen}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
      </div>

      <AgreementModal
        open={agreementOpen}
        handleLogin={handleLogin}
        email={email}
        password={password}
        setAgreementOpen={setAgreementOpen}
      />
    </>
  )
}
