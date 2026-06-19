'use client'

import { useState } from 'react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import Loading from '../atoms/Loading'

interface ResetPasswordTemplateProps {
  loading: boolean
  error: string
  success: boolean
  handleReset: (data: { password: string; confirmPassword: string }) => void
}

export default function ResetPasswordTemplate({
  loading,
  error,
  success,
  handleReset,
}: ResetPasswordTemplateProps) {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationError, setValidationError] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setValidationError('')

    if (password.length < 6) {
      setValidationError('A senha deve ter pelo menos 6 caracteres.')
      return
    }

    if (password !== confirmPassword) {
      setValidationError('As senhas não coincidem.')
      return
    }

    handleReset({ password, confirmPassword })
  }

  const displayError = validationError || error

  return (
    <>
      <div className="w-full max-w-[600px] mx-auto h-full bg-white rounded-xl p-5 mt-[10vh] mb-[10vh]">
        <h2 className="text-4xl font-bold text-orange-400 mb-[60px] text-center text-shadow-lg">
          Redefinir senha
        </h2>

        {success ? (
          <div className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm text-green-700">
            Senha redefinida com sucesso! Redirecionando para o login...
          </div>
        ) : (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Nova senha
              </label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-amber-50 border border-amber-200 p-4"
                placeholder="••••••••"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Confirmar nova senha
              </label>
              <Input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="bg-amber-50 border border-amber-200 p-4"
                placeholder="••••••••"
              />
            </div>

            {displayError && (
              <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                {displayError}
              </p>
            )}

            <Button
              className="mt-2 w-full rounded-xl bg-[var(--secondary)] px-4 py-[10px] text-white hover:brightness-90"
              type="submit"
            >
              Redefinir senha
            </Button>
          </form>
        )}
      </div>

      {loading && <Loading />}
    </>
  )
}
