'use client'

import LoginForm from '@/components/molecules/LoginForm'
import AgreementModal from '@/components/molecules/AgreementModal'

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
            handleLogin={handleLogin}
          />
        </div>
      </div>

      <AgreementModal
        open={agreementOpen}
        onClose={() => setAgreementOpen(false)}
      />
    </div>
  )
}
