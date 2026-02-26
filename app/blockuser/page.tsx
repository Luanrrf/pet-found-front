'use client'

import RequestGenericError from '@/components/molecules/RequestGenericError'
import RequestSuccess from '@/components/molecules/RequestSuccess'
import UnauthorizedError from '@/components/molecules/UnauthorizedError'
import PageTemplate from '@/components/pages/PageTemplate'
import { BlockUserTemplate } from '@/components/templates/BlockUserTemplate'
import useFetcher from '@/components/utils/useFetcher'
import { useState } from 'react'

export default function BlockUserPage() {
  const [responseStatus, setResponseStatus] = useState<number>(0)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')

    await useFetcher({
      url: 'http://localhost:3001/users/block',
      method: 'POST',
      body: { email },
      setState: setResponseStatus,
    })
  }

  return (
    <PageTemplate hasDefaultHeader>
      {responseStatus === 0 && <BlockUserTemplate onSubmit={handleSubmit} />}
      {responseStatus === 401 && <UnauthorizedError />}
      {responseStatus > 401 && <RequestGenericError />}
      {responseStatus >= 200 && responseStatus < 300 && <RequestSuccess />}
    </PageTemplate>
  )
}
