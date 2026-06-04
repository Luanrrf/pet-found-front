export interface FetcherProps {
  url: string
  method?: string
  body?: object
  headers?: {
    [key: string]: string
  }
}

export interface FetcherResponse {
  status: number
  message?: string

  reported_animals_ids?: number[]
  [key: string]: unknown
}

const fetcher = async ({
  url,
  method,
  body,
  headers,
}: FetcherProps): Promise<FetcherResponse> => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  })

  const data = await response.json()

  return {
    ...data,
    status: response.status,
  }
}

export default fetcher
