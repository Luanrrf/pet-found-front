'use client'

import { API_URL } from '../constants/api'
import { getCookie } from './getCookie'
import fetcher from './fetcher'

const getUserAuthentication = async () => {
  const token = getCookie('token')
  if (!token) return null

  const url = `${API_URL}/user/me`

  const user = await fetcher({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!user || user.status === 401) return null

  return user
}

export default getUserAuthentication
