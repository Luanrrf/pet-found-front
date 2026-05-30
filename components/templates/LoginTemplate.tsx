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
      <div className="w-full max-w-[390px] mx-auto">
        <div className="mt-28">
          <h2 className="text-[52px] font-bold text-[#333] text-center mb-14">
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
