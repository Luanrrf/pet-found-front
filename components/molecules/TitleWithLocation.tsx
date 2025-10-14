'use client'
import { useGeolocation } from '@/utils/useGeolocation'

export default function TitleWithLocation() {
  const geolocation = useGeolocation()

  const { location, error } = geolocation

  let cityName = ''

  if (error) cityName = 'Não Informado'
  if (location?.city) cityName = location.city

  return (
    <div>
      <h2
        className="m-0 text-[#EF7E06] font-inter text-[16px] font-semibold leading-normal flex"
        style={{ margin: '0' }}
      >
        Localização
      </h2>
      <h1
        className="m-0 text-[#333] font-inter text-[32px] font-bold leading-normal"
        style={{ margin: '0 0 22px' }}
      >
        {cityName}
      </h1>
    </div>
  )
}
