'use client'

import { API_URL } from '@/components/constants/api'
import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { UnblockUserTemplate } from '@/components/templates/UnblockUserTemplate'
import useFetcher, { FetcherResponse } from '@/components/utils/useFetcher'
import { useState } from 'react'

export default function UnblockUserPage() {
  const [response, setResponse] = useState<FetcherResponse | undefined>()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const userResult = await fetch(
      `${API_URL}/user?email=${encodeURIComponent(email)}`
    )

    if (!userResult.ok) {
      setResponse({ ...response, status: userResult.status })
      return
    }

    const user = await userResult.json()
    const request = await useFetcher({
      url: `${API_URL}/user/unblock/${user.id}`,
      method: 'PATCH',
    })

    setResponse(request)
  }

  const status = response?.status ?? 0

  return (
    <PageTemplate hasDefaultHeader>
      {status === 0 && <UnblockUserTemplate onSubmit={handleSubmit} />}
      {status === 401 && <UnauthorizedError message={response?.message} />}
      {status > 401 && <RequestGenericError message={response?.message} />}
      {status >= 200 && status < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
