'use client'

import { API_URL } from '../constants/api'
import { getCookie } from './getCookie'
import useFetcher from './useFetcher'

const useAnimalOwnerContact = async (id: number) => {
  const token = getCookie('token')
  if (!token) return null

  const url = `${API_URL}/animal/${id}/contact`

  const contact = await useFetcher({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!contact) return null

  return contact
}

export default useAnimalOwnerContact
