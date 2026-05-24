import { Dispatch, SetStateAction } from 'react'

export interface FetcherProps {
  url: string
  method?: string
  body?: object
  setState?: Dispatch<SetStateAction<number>>
}

const useFetcher = async ({ url, method, body, setState }: FetcherProps) => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  })

  if (setState) setState(response.status)

  return response
}

export default useFetcher
