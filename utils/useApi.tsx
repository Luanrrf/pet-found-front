'use client'
import { useEffect, useState } from 'react'

type UseApiOptions = {
  cacheKey?: string
  skip?: boolean
}

const globalCache = new Map<string, unknown>()

export function useApi<T>(
  url: string,
  options?: RequestInit,
  config?: UseApiOptions
) {
  const { cacheKey = url, skip = false } = config || {}

  const [data, setData] = useState<T | null>(() => {
    return (globalCache.get(cacheKey) as T) || null
  })

  const [loading, setLoading] = useState<boolean>(!globalCache.has(cacheKey))
  const [error, setError] = useState<Error | null>(null)

  async function fetchData(ignoreCache = false): Promise<void> {
    try {
      if (!ignoreCache && globalCache.has(cacheKey)) {
        setData(globalCache.get(cacheKey) as T)
        setLoading(false)
        return
      }

      setLoading(true)

      const response = await fetch(url, options)

      if (!response.ok) {
        throw new Error(`Erro: ${response.status}`)
      }

      const json: T = await response.json()

      globalCache.set(cacheKey, json)
      setData(json)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Erro desconhecido'))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!skip) {
      fetchData()
    }
  }, [url, skip])

  return {
    data,
    loading,
    error,
    refetch: () => fetchData(true),
  }
}
