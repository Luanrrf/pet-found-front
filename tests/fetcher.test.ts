import fetcher from '../components/utils/fetcher'

describe('fetcher', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('returns json with status', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 200,
      text: async () => JSON.stringify({ name: 'Rafa' }),
    } as Response)

    await expect(fetcher({ url: '/api/user/me' })).resolves.toEqual({
      name: 'Rafa',
      status: 200,
    })
  })

  it('does not throw on empty response body', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 204,
      text: async () => '',
    } as Response)

    await expect(fetcher({ url: '/api/animal/report' })).resolves.toEqual({
      status: 204,
    })
  })

  it('sends json body and default content type', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 200,
      text: async () => '{}',
    } as Response)

    await fetcher({
      url: '/api/auth/forgot-password',
      method: 'POST',
      body: { email: 'a@b.com' },
    })

    expect(fetchMock).toHaveBeenCalledWith('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'a@b.com' }),
    })
  })

  it('merges custom headers', async () => {
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 200,
      text: async () => '{}',
    } as Response)

    await fetcher({
      url: '/api/user/me',
      headers: { Authorization: 'Bearer token' },
    })

    expect(fetchMock).toHaveBeenCalledWith('/api/user/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
      },
      body: null,
    })
  })

  it('keeps api message on error response', async () => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      status: 400,
      text: async () => JSON.stringify({ message: 'Erro' }),
    } as Response)

    await expect(fetcher({ url: '/api/test' })).resolves.toEqual({
      message: 'Erro',
      status: 400,
    })
  })
})
