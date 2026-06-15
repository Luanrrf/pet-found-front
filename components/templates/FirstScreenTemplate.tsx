'use client'

import React, { useEffect, useState } from 'react'
import { WelcomeTemplate } from './WelcomeTemplate'
import getUserAuthentication from '../utils/getUserAuthentication'
import { FetcherResponse } from '../utils/fetcher'
import { HomeTemplate } from './HomeTemplate'
import Loading from '../atoms/Loading'

const FirstScreenTemplate = () => {
  const [user, setUser] = useState<FetcherResponse | null>(null)
  const [loading, setLoading] = useState(true)

  const loadUser = async () => {
    const req = await getUserAuthentication()

    setUser(req)
    setLoading(false)
  }

  useEffect(() => {
    loadUser()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (!user || !user.userId) {
    return <WelcomeTemplate />
  }

  return <HomeTemplate user={user} />
}

export default FirstScreenTemplate
