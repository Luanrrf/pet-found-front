'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { RegisterTemplate } from '@/components/templates/RegisterTemplate'
import useFetcher from '@/components/utils/useFetcher'
import { useState } from 'react'
import { validateCPF } from '@/utils/ValidateCpf'
import { API_URL } from '@/components/constants/api'

export default function RegisterPage() {
  const [responseStatus, setResponseStatus] = useState<number>(0)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const cpf = formData.get('cpf')
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')
    const agree = formData.get('agree')

    if (!agree) {
      alert('Você precisa concordar com os termos para continuar.')
      return
    }

    if (password !== confirmPassword) {
      alert('As senhas não coincidem.')
      return
    }

    if (!validateCPF(cpf as string)) {
      alert('CPF inválido')
      return
    }

    await useFetcher({
      url: `${API_URL}/user`,
      method: 'POST',
      body: {
        cpf,
        name,
        email,
        password,
      },
      setState: setResponseStatus,
    })
  }

  return (
    <PageTemplate hasDefaultHeader>
      <RegisterTemplate onSubmit={handleSubmit} />

      {responseStatus === 401 && <UnauthorizedError />}
      {responseStatus > 401 && <RequestGenericError />}
      {responseStatus >= 200 && responseStatus < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
