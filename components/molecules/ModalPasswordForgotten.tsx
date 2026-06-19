import React, { useState } from 'react'
import Modal from '../organisms/Modal'
import { Button } from '../atoms/Button'
import { Input } from '../atoms/Input'
import Loading from '../atoms/Loading'
import fetcher from '../utils/fetcher'
import { API_URL } from '../constants/api'

const ModalPasswordForgotten = ({
  setModalState,
}: {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error'
    message: string
  } | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!email.trim()) return

    try {
      setLoading(true)
      setFeedback(null)

      const response = await fetcher({
        url: `${API_URL}/auth/forgot-password`,
        method: 'POST',
        body: {
          email,
        },
      })

      if (response.status >= 200 && response.status < 300) {
        setFeedback({
          type: 'success',
          message:
            'Se existir uma conta com esse e-mail, enviaremos instruções para redefinição de senha.',
        })

        setTimeout(() => setModalState(false), 3000)
        return
      }

      setFeedback({
        type: 'error',
        message: response.message || 'Erro ao solicitar redefinição de senha.',
      })
    } catch (error) {
      console.error(error)

      setFeedback({
        type: 'error',
        message: 'Erro ao solicitar redefinição de senha.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Modal closeModal={() => setModalState(false)} hasCloseButton={false}>
        <form className="flex flex-col gap-6 p-2" onSubmit={handleSubmit}>
          <div className="text-center">
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              Redefinir senha
            </h2>

            <p className="text-sm leading-relaxed text-gray-600">
              Informe seu e-mail cadastrado
            </p>
          </div>

          <Input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-amber-50 border border-amber-200 p-4"
          />

          {feedback && (
            <p
              className={`rounded-lg px-4 py-3 text-sm ${
                feedback.type === 'success'
                  ? 'bg-green-50 text-green-700'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {feedback.message}
            </p>
          )}

          <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-center">
            <Button
              className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--primary)] px-4 py-[10px] text-white hover:brightness-90"
              onClick={() => {
                setModalState(false)
              }}
            >
              Cancelar
            </Button>

            <Button
              className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--secondary)] px-4 py-[10px] text-white hover:brightness-90"
              type="submit"
            >
              Continuar
            </Button>
          </div>
        </form>
      </Modal>
      {loading && <Loading />}
    </>
  )
}

export default ModalPasswordForgotten
