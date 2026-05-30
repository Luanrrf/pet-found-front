'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { EditUserTemplate } from '@/components/templates/EditUserTemplate'
import useFetcher, { FetcherResponse } from '@/components/utils/useFetcher'
import Swal from 'sweetalert2'

import { useState } from 'react'
import { API_URL } from '@/components/constants/api'

export default function EditUserPage() {
  const [response, setResponse] = useState<FetcherResponse | undefined>()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const cpf = formData.get('cpf')
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    const request = await useFetcher({
      url: `${API_URL}/user`,
      method: 'PATCH',
      body: {
        cpf,
        name,
        email,
        password,
      },
    })

    setResponse(request)
  }

  async function handleDelete() {
    const confirm = await Swal.fire({
      title: 'Tem certeza?',
      text: 'Esta ação não poderá ser desfeita.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Apagar conta',
      cancelButtonText: 'Cancelar',
    })

    if (!confirm.isConfirmed) return

    const request = await useFetcher({
      url: `${API_URL}/user/deactivate`,
      method: 'PATCH',
    })

    setResponse(request)
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      {status === 0 && (
        <EditUserTemplate onSubmit={handleSubmit} onDelete={handleDelete} />
      )}
      {status === 401 && <UnauthorizedError message={response?.message} />}
      {status > 401 && <RequestGenericError message={response?.message} />}
      {status >= 200 && status < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
