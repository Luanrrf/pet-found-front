'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import type { FilterContextProps } from './types'
import { AnimalProps } from '@/components/types/animal'
import { API_URL } from '@/components/constants/api'

const FilterContext = createContext<FilterContextProps | null>(null)

export const FilterProvider = ({
  children,
}: AnimalProps & { children: React.ReactNode }) => {
  const [pageContext, setPageContext] = useState<AnimalProps[]>([])

  useEffect(() => {
    fetch(`${API_URL}/animal`)
      .then((res) => res.json())
      .then((data: AnimalProps[]) => setPageContext(data))
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

  if (!context)
    throw new Error('useFilterContext must be used within a FilterProvider')

  return context
}
