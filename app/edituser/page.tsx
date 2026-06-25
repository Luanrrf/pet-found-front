'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { EditUserTemplate } from '@/components/templates/EditUserTemplate'
import fetcher, { FetcherResponse } from '@/components/utils/fetcher'
import Swal from 'sweetalert2'

import { useEffect, useState } from 'react'
import { API_URL } from '@/components/constants/api'
import RequireAuth from '@/components/utils/RequireAuth'
import getUserAuthentication from '@/components/utils/getUserAuthentication'
import Loader from '@/components/atoms/Loader'
import { getCookie } from '@/components/utils/getCookie'
import { useRouter } from 'next/navigation'

function normalizeUser(user: FetcherResponse | null) {
  if (!user) return undefined

  const nestedUser = user.user
  if (nestedUser && typeof nestedUser === 'object') {
    return nestedUser as Record<string, unknown>
  }

  const data = user.data
  if (data && typeof data === 'object') {
    return data as Record<string, unknown>
  }

  return user
}

export default function EditUserPage() {
  const [response, setResponse] = useState<FetcherResponse | undefined>()
  const [user, setUser] = useState<FetcherResponse | null>(null)
  const [loadingUser, setLoadingUser] = useState(true)
  const router = useRouter()

  useEffect(() => {
    getUserAuthentication()
      .then(async (authenticatedUser) => {
        const normalizedUser = normalizeUser(authenticatedUser)
        const email = normalizedUser?.email

        if (
          typeof email === 'string' &&
          (!normalizedUser?.name || !normalizedUser?.cellphone)
        ) {
          const userResult = await fetch(
            `${API_URL}/user?email=${encodeURIComponent(email)}`
          )

          if (userResult.ok) {
            const fullUser = await userResult.json()
            setUser({ ...fullUser, status: userResult.status })
            return
          }
        }

        setUser(authenticatedUser)
      })
      .finally(() => setLoadingUser(false))
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')
    const email = formData.get('email')
    const cellphone = formData.get('cellphone')

    const token = getCookie('token')

    const request = await fetcher({
      url: `${API_URL}/user`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        name,
        email,
        cellphone,
      },
    })

    setResponse(request)

    if (request.status >= 200 && request.status < 300) {
      await Swal.fire({
        icon: 'success',
        title: 'Usuário atualizado',
        text: 'Seus dados foram atualizados com sucesso.',
        confirmButtonColor: '#EF7E06',
        confirmButtonText: 'OK',
      })
      router.push('/')
    }
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

    const request = await fetcher({
      url: `${API_URL}/user/deactivate`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${getCookie('token')}`,
      },
    })

    setResponse(request)

    if (request.status >= 200 && request.status < 300) {
      await Swal.fire({
        icon: 'success',
        title: 'Conta excluída',
        text: 'Sua conta foi desativada com sucesso.',
        confirmButtonColor: '#EF7E06',
        confirmButtonText: 'OK',
      })
      document.cookie = 'token=; path=/; max-age=0'
      router.push('/login')
    }
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      <RequireAuth>
        {loadingUser && <Loader />}
        {!loadingUser && status === 0 && (
          <EditUserTemplate
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            user={normalizeUser(user)}
          />
        )}
        {status === 401 && <UnauthorizedError message={response?.message} />}
        {status >= 400 && status !== 401 && (
          <RequestGenericError message={response?.message} />
        )}
      </RequireAuth>
    </PageTemplate>
  )
}
