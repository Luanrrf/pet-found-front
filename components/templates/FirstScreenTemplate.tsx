'use client'

import React, { useEffect, useState } from 'react'
import { WelcomeTemplate } from './WelcomeTemplate'
import useAuthentication from '../utils/useAuthentication'
import { FetcherResponse } from '../utils/useFetcher'
import { HomeTemplate } from './HomeTemplate'

const FirstScreenTemplate = () => {
  const [user, setUser] = useState<FetcherResponse | null>(null)

  const loadUser = async () => {
    const req = await useAuthentication()

    if (req) {
      setUser(req)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])

  if (!user || !user.userId) {
    return <WelcomeTemplate />
  }

  return <HomeTemplate user={user} />
}

export default FirstScreenTemplate
