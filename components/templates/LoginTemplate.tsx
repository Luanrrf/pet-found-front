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
    <div className="px-5 py-6">
      <div className="w-full max-w-[390px] mx-auto flex items-center justify-center h-full flex-1">
        <div className="bg-white rounded-xl p-5">
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
      </div>

      <AgreementModal
        open={agreementOpen}
        handleLogin={handleLogin}
        email={email}
        password={password}
      />
    </div>
  )
}
