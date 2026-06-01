import { useEffect, useState } from 'react'
import { useProductContext } from '../contexts/ProductContext'
import useAnimalOwnerContact from './useAnimalOwnerContact'
import useAuthentication from './useAuthentication'
import { FetcherResponse } from './useFetcher'

const useContact = () => {
  const [user, setUser] = useState<FetcherResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const { productContext } = useProductContext()
  const [userContact, setUserContact] = useState<string | null>(null)

  useEffect(() => {
    const initRequests = async () => {
      const [firstRequest, secondRequest] = await Promise.all([
        useAuthentication(),
        useAnimalOwnerContact(productContext?.id ?? 0),
      ])

      setLoading(false)

      if (!firstRequest || !secondRequest) {
        return
      }

      const contact = secondRequest['cellphone']
        ? String(secondRequest['cellphone'])
        : null

      setUser(firstRequest)
      setUserContact(contact)
    }

    initRequests()
  }, [])

  return {
    user,
    loading,
    userContact,
  }
}

export default useContact
