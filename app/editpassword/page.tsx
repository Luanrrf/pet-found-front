'use client'

import { useState } from 'react'
import Swal from 'sweetalert2'

import PageTemplate from '@/components/pages/PageTemplate'
import RequireAuth from '@/components/utils/RequireAuth'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import RequestGenericError from '@/components/molecules/RequestGenericError'
import { EditPasswordTemplate } from '@/components/templates/EditPasswordTemplate'
import fetcher, { FetcherResponse } from '@/components/utils/fetcher'
import { API_URL } from '@/components/constants/api'
import { getCookie } from '@/components/utils/getCookie'

export default function EditPasswordPage() {
  const [response, setResponse] = useState<FetcherResponse | undefined>()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (password !== confirmPassword) {
      await Swal.fire({
        icon: 'error',
        title: 'Erro',
        text: 'As senhas não coincidem.',
        confirmButtonColor: '#EF7E06',
        confirmButtonText: 'OK',
      })

      return
    }

    const request = await fetcher({
      url: `${API_URL}/user`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
      body: {
        password,
      },
    })

    setResponse(request)

    if (request.status >= 200 && request.status < 300) {
      await Swal.fire({
        icon: 'success',
        title: 'Senha alterada',
        text: 'Sua senha foi alterada com sucesso.',
        confirmButtonColor: '#EF7E06',
        confirmButtonText: 'OK',
      })
    }
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      <RequireAuth>
        {status === 0 && <EditPasswordTemplate onSubmit={handleSubmit} />}

        {status === 401 && <UnauthorizedError message={response?.message} />}

        {status >= 400 && status !== 401 && (
          <RequestGenericError message={response?.message} />
        )}
      </RequireAuth>
    </PageTemplate>
  )
}
