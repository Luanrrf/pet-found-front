'use client'

import { useState } from 'react'
import DOMPurify from 'dompurify'
import PageTemplate from '@/components/pages/PageTemplate'
import LoginTemplate from '@/components/templates/LoginTemplate'
import { API_URL } from '@/components/constants/api'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [agreementOpen, setAgreementOpen] = useState(false)

  async function handleLogin(data: { email: string; password: string }) {
    try {
      setLoading(true)
      setError('')

      const sanitizedEmail = DOMPurify.sanitize(data.email)
      const sanitizedPassword = DOMPurify.sanitize(data.password)

      const ipResponse = await fetch('https://api.ipify.org?format=json')
      const ipData = await ipResponse.json()

      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: sanitizedEmail,
          password: sanitizedPassword,
        }),
      })

      if (!response.ok) {
        throw new Error('Email ou senha inválidos')
      }

      const result = await response.json()

      localStorage.setItem('token', result.access_token)
      localStorage.setItem('user', JSON.stringify(result.user))
      localStorage.setItem('user_ip', ipData.ip)

      window.location.href = '/pets'
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Erro ao fazer login'

      setError(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageTemplate hasDefaultHeader>
      <LoginTemplate
        loading={loading}
        error={error}
        agreementOpen={agreementOpen}
        setAgreementOpen={setAgreementOpen}
        handleLogin={handleLogin}
      />
    </PageTemplate>
  )
}
