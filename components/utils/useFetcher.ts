export interface FetcherProps {
  url: string
  method?: string
  body?: object
}

export interface FetcherResponse {
  status: number
  message?: string
  [key: string]: unknown
}

const useFetcher = async ({
  url,
  method,
  body,
}: FetcherProps): Promise<FetcherResponse> => {
  const response = await fetch(url, {
    method: method || 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : null,
  })

  const data = await response.json()

  return {
    ...data,
    status: response.status,
  }
}

export default useFetcher
