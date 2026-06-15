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

  const text = await response.text()
  const data = text ? JSON.parse(text) : {}

  return {
    ...data,
    status: response.status,
  }
}

export default fetcher
