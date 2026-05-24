'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { UnblockUserTemplate } from '@/components/templates/UnblockUserTemplate'
import useFetcher from '@/components/utils/useFetcher'
import { useState } from 'react'

const API_URL = 'https://pet-found-backend.up.railway.app'

export default function UnblockUserPage() {
  const [responseStatus, setResponseStatus] = useState<number>(0)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const userResult = await fetch(
      `${API_URL}/user?email=${encodeURIComponent(email)}`
    )

    if (!userResult.ok) {
      setResponseStatus(userResult.status)
      return
    }

    const user = await userResult.json()
    await useFetcher({
      url: `${API_URL}/user/unblock/${user.id}`,
      method: 'PATCH',
      setState: setResponseStatus,
    })
  }

  return (
    <PageTemplate hasDefaultHeader>
      {responseStatus === 0 && <UnblockUserTemplate onSubmit={handleSubmit} />}
      {responseStatus === 401 && <UnauthorizedError />}
      {responseStatus > 401 && <RequestGenericError />}
      {responseStatus >= 200 && responseStatus < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
