import { useEffect, useState } from 'react'

interface LocationData {
  lat: number
  lon: number
  city?: string
  state?: string
  country?: string
}

export function useGeolocation() {
  const [location, setLocation] = useState<LocationData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setError('Geolocalização não é suportada neste navegador.')
      setLoading(false)
      return
    }

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude

        try {
          const response = await fetch(
            `https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&accept-language=pt-BR&api_key=69a04bb470d5a286933597olr3b7930`
          )

          if (!response.ok) throw new Error('Falha na requisição')

          const data = await response.json()

          setLocation({
            lat,
            lon,
            city:
              data.address.city ||
              data.address.town ||
              data.address.village ||
              data.address.municipality,
            state: data.address.state,
            country: data.address.country,
          })
        } catch (err) {
          console.error(err)
          setError('Erro ao buscar nome da cidade.')
        }

        setLoading(false)
      },
      (err) => {
        setError(err.message)
        setLoading(false)
      }
    )
  }, [])

  return { location, error, loading }
}
