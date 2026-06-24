'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import PageTemplate from '@/components/pages/PageTemplate'
import { RegisterTemplate } from '@/components/templates/RegisterTemplate'
import fetcher from '@/components/utils/fetcher'
import type { FetcherResponse } from '@/components/utils/fetcher'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { validateCPF } from '@/utils/ValidateCpf'
import { API_URL } from '@/components/constants/api'
import Swal from 'sweetalert2'

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
      await Swal.fire({
        icon: 'error',
        title: 'Termos obrigatórios',
        text: 'Você precisa concordar com os termos para continuar.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      })
      return
    }

    if (password !== confirmPassword) {
      await Swal.fire({
        icon: 'error',
        title: 'Senhas diferentes',
        text: 'As senhas não coincidem.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      })
      return
    }

    if (!validateCPF(cpf as string)) {
      await Swal.fire({
        icon: 'error',
        title: 'CPF inválido',
        text: 'Informe um CPF válido para continuar.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      })
      return
    }

    const emailResult = await fetch(
      `${API_URL}/user?email=${encodeURIComponent(String(email))}`
    )

    if (emailResult.ok) {
      await Swal.fire({
        icon: 'error',
        title: 'E-mail já cadastrado',
        text: 'Já existe um usuário cadastrado com este e-mail.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      })
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
      await Swal.fire({
        icon: 'success',
        title: 'Usuário cadastrado',
        text: 'Cadastro realizado com sucesso. Você já pode entrar na sua conta.',
        confirmButtonColor: '#EF7E06',
        confirmButtonText: 'OK',
      })
      router.push('/login')
    }
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      <RegisterTemplate onSubmit={handleSubmit} />

      {status >= 400 && <RequestGenericError message={response?.message} />}
    </PageTemplate>
  )
}
