'use client'

import { API_URL } from '../constants/api'
import { getCookie } from './getCookie'
import fetcher from './fetcher'

const useMyAnimals = async () => {
  const token = getCookie('token')
  if (!token) return null

  const url = `${API_URL}/animal/mine`

  const animals = await fetcher({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!animals) return null

  return animals
}

export default useMyAnimals
