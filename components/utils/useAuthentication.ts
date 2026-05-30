'use client'

import { API_URL } from '../constants/api'
import { getCookie } from './getCookie'
import useFetcher from './useFetcher'

const useAuthentication = async () => {
  const token = getCookie('token')
  if (!token) return null

  const url = `${API_URL}/user/me`

  const user = await useFetcher({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!user) return null

  return user
}

export default useAuthentication
