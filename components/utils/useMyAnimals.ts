'use client'

import { API_URL } from '../constants/api'
import { getCookie } from './getCookie'
import useFetcher from './useFetcher'

const useMyAnimals = async () => {
  const token = getCookie('token')
  if (!token) return null

  const url = `${API_URL}/animal/mine`

  const animals = await useFetcher({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!animals) return null

  return animals
}

export default useMyAnimals
