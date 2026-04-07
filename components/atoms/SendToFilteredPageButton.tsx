import React, { Dispatch, SetStateAction } from 'react'
import { FilterPageContextProps } from '../contexts/FilterContext/types'
import { Button } from './Button'
import { useRouter } from 'next/navigation'

const SendToFilteredPageButton = ({
  filters,
  setOpenFilter,
}: {
  filters: FilterPageContextProps['filters']
  setOpenFilter: Dispatch<SetStateAction<boolean>>
}) => {
  const query = buildQueryString(filters)

  const router = useRouter()

  return (
    <Button
      onClick={() => {
        router.push(`/pets${query}`)
        setOpenFilter(false)
      }}
    >
      Filtrar
    </Button>
  )
}

function buildQueryString(params: Record<string, string[]>): string {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, values]) => {
    if (values?.length) {
      searchParams.append(key, values.join(','))
    }
  })

  const query = searchParams.toString()
  return query ? `?${query}` : ''
}

export default SendToFilteredPageButton
