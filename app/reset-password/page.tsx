'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import DOMPurify from 'dompurify'
import PageTemplate from '@/components/pages/PageTemplate'
import ResetPasswordTemplate from '@/components/templates/ResetPasswordTemplate'
import { API_URL } from '@/components/constants/api'

export default function ResetPasswordPage() {
  const searchParams = useSearchParams()
  const token = searchParams.get('token') ?? ''

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleReset(data: {
    password: string
    confirmPassword: string
  }) {
    try {
      setLoading(true)
      setError('')

      const sanitizedPassword = DOMPurify.sanitize(data.password)

      const response = await fetch(`${API_URL}/auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password: sanitizedPassword,
        }),
      })

      if (!response.ok) {
        throw new Error(
          'Token inválido ou expirado. Solicite um novo link de redefinição.'
        )
      }

      setSuccess(true)

      setTimeout(() => {
        window.location.href = '/login'
      }, 3000)
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'Erro ao redefinir senha'

      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <ResetPasswordTemplate
        loading={loading}
        error={error}
        success={success}
        handleReset={handleReset}
      />
    </PageTemplate>
  )
}
