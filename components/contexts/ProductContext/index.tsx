'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ProductContextProps } from './types'
import { API_URL } from '@/components/constants/api'

const ProductContext = createContext<ProductContextProps | null>(null)

export const ProductProvider = ({
  children,
  petId,
}: {
  children: React.ReactNode
  petId: string
}) => {
  const [productContext, setProductContext] =
    useState<ProductContextProps['productContext']>(null)

  useEffect(() => {
    fetch(`${API_URL}/animal/${petId}`)
      .then((res) => res.json())
      .then((animal) => setProductContext(() => animal))
  }, [petId])

  const contextValue = useMemo(
    () => ({ productContext, setProductContext }),
    [productContext]
  )

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }

  return context
}
