'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { FilterContextProps, FilterPageContextProps } from './types'
import { API_URL } from '@/components/constants/api'

const FilterContext = createContext<FilterContextProps | null>(null)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()

  const [pageContext, setPageContext] = useState<FilterPageContextProps>({
    animals: [],
    filters: {},
  })

  useEffect(() => {
    const paramsObject: Record<string, string[]> = {}

    searchParams.forEach((value, key) => {
      const values = value.split(',')

      if (!paramsObject[key]) {
        paramsObject[key] = []
      }

      paramsObject[key].push(...values)
    })

    setPageContext((prev) => ({
      ...prev,
      filters: paramsObject,
    }))
  }, [searchParams])

  useEffect(() => {
    fetch(`${API_URL}/animal`)
      .then((res) => res.json())
      .then((data) =>
        setPageContext((prev) => ({
          ...prev,
          animals: data,
        }))
      )
  }, [])

  const contextValue = useMemo(
    () => ({ pageContext, setPageContext }),
    [pageContext]
  )

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => {
  const context = useContext(FilterContext)

  if (!context) {
    throw new Error('useFilterContext must be used within a FilterProvider')
  }

  return context
}
