'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { FilterContextProps, FilterPageContextProps } from './types'
import { API_URL } from '@/components/constants/api'

const FilterContext = createContext<FilterContextProps | null>(null)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageContext, setPageContext] = useState<FilterPageContextProps>({
    animals: [],
    filters: {},
  })

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
