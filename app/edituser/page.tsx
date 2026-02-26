'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { EditUserTemplate } from '@/components/templates/EditUserTemplate'
import useFetcher from '@/components/utils/useFetcher'
import Swal from 'sweetalert2'

import { useState } from 'react'

export default function EditUserPage() {
  const [responseStatus, setResponseStatus] = useState<number>(0)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const cpf = formData.get('cpf')
    const name = formData.get('name')
    const email = formData.get('email')
    const password = formData.get('password')

    await useFetcher({
      url: 'http://localhost:3001/user/update', // <-- sua rota
      method: 'PATCH',
      body: {
        cpf,
        name,
        email,
        password,
      },
      setState: setResponseStatus,
    })
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

    await useFetcher({
      url: 'http://localhost:3001/user/delete', // <-- coloque sua rota real
      method: 'DELETE',
      setState: setResponseStatus,
    })
  }

  return (
    <PageTemplate hasDefaultHeader>
      {responseStatus === 0 && (
        <EditUserTemplate onSubmit={handleSubmit} onDelete={handleDelete} />
      )}
      {responseStatus === 401 && <UnauthorizedError />}
      {responseStatus > 401 && <RequestGenericError />}
      {responseStatus >= 200 && responseStatus < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
