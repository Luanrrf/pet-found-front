'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import PageTemplate from '@/components/pages/PageTemplate'
import { RegisterTemplate } from '@/components/templates/RegisterTemplate'
import fetcher from '@/components/utils/fetcher'
import type { FetcherResponse } from '@/components/utils/fetcher'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateCPF } from '@/utils/ValidateCpf'
import { API_URL } from '@/components/constants/api'

export default function RegisterPage() {
  const [response, setResponse] = useState<FetcherResponse | undefined>()
  const router = useRouter()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const cpf = formData.get('cpf')
    const name = formData.get('name')
    const email = formData.get('email')
    const cellphone = formData.get('cellphone')
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

    const request = await fetcher({
      url: `${API_URL}/user`,
      method: 'POST',
      body: {
        cpf,
        name,
        email,
        cellphone,
        password,
      },
    })

    setResponse(request)

    if (request.status >= 200 && request.status < 300) {
      router.push('/login')
    }
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      <RegisterTemplate onSubmit={handleSubmit} />

      {status > 401 && <RequestGenericError message={response?.message} />}
      {status >= 200 && status < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
