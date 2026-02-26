'use client'

// import RequestGenericError from '@/components/molecules/RequestGenericError'
// import RequestSuccess from '@/components/molecules/RequestSuccess'
// import UnauthorizedError from '@/components/molecules/UnauthorizedError'
// import { LoginTemplate } from '@/components/templates/LoginTemplate'
// import useFetcher from '@/components/utils/useFetcher'
// import { useState } from 'react'
import PageTemplate from '@/components/pages/PageTemplate'

export default function LoginPage() {
  // const [responseStatus, setResponseStatus] = useState<number>(0)

  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   const email = formData.get('email')
  //   const password = formData.get('password')

  //   await useFetcher({
  //     url: 'http://localhost:3001/auth/login',
  //     method: 'POST',
  //     body: {
  //       email: email as string,
  //       password: password as string,
  //     },
  //     setState: setResponseStatus,
  //   })
  // }

  return (
    <PageTemplate hasDefaultHeader>
      {/* {responseStatus === 0 && <LoginTemplate />}
      {responseStatus === 401 && <UnauthorizedError />}
      {responseStatus > 401 && <RequestGenericError />}
      {responseStatus >= 200 && responseStatus < 300 && <RequestSuccess />} */}
      teste
    </PageTemplate>
  )
}
