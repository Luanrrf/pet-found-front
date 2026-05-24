'use client'

import { useGeolocation } from '@/utils/useGeolocation'

export default function TitleWithLocation() {
  const geolocation = useGeolocation()

  const { location, error } = geolocation

  let cityName = ''

  if (error) cityName = 'Não Informado'

  if (location?.city) {
    cityName = `${location.city}, RJ`
  }

  return (
    <div className="mb-6">
      <h2 className="text-[#EF7E06] text-[13px] font-semibold leading-none">
        Localização
      </h2>

      <h1 className="text-[#333] text-[34px] font-bold leading-[38px] mt-1">
        {cityName}
      </h1>
    </div>
  )
}
