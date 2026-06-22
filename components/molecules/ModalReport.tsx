import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { API_URL } from '../constants/api'
import fetcher from '../utils/fetcher'
import { useProductContext } from '../contexts/ProductContext'
import { Button } from '../atoms/Button'
import Modal from '../organisms/Modal'
import getUserAuthentication from '../utils/getUserAuthentication'
import { getCookie } from '../utils/getCookie'

const ModalReport = ({
  setReportModalOpen,
}: {
  setReportModalOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { productContext } = useProductContext()
  const [reportText, setReportText] = useState('')
  const [reportedSuccessfully, setReportedSuccessfully] = useState(false)
  const [alreadyReported, setAlreadyReported] = useState(false)
  const [loadingUser, setLoadingUser] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchUser() {
    setLoadingUser(true)
    try {
      const user = await getUserAuthentication()
      if (user) {
        setAlreadyReported(
          user.reported_animals_ids?.includes(productContext?.id ?? 0) ?? false
        )
      }
    } catch (error) {
      console.error(error)
    } finally {
      setLoadingUser(false)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const closeModal = () => setReportModalOpen(false)

  function handleReportTextChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setReportText(e.target.value)
  }

  const handleReport = () => {
    if (!productContext?.id) {
      setError('Animal não carregado. Tente novamente em instantes.')
      return
    }

    const token = getCookie('token')
    setLoading(true)
    setError('')

    fetcher({
      url: `${API_URL}/animal/report`,
      method: 'POST',
      body: {
        animalId: productContext?.id,
        reason: reportText,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          const message: string = response.message ?? ''
          if (
            message.toLowerCase().includes('already') ||
            message.toLowerCase().includes('já') ||
            message.toLowerCase().includes('reportado')
          ) {
            setAlreadyReported(true)
            return
          }
          throw new Error(message || 'Erro ao enviar denúncia.')
        }

        setReportedSuccessfully(true)
        setAlreadyReported(true)
        setReportText('')
      })
      .catch((err: unknown) => {
        setReportedSuccessfully(false)
        setError(
          err instanceof Error
            ? err.message
            : 'Não foi possível enviar a denúncia.'
        )
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const showAlreadyReported = alreadyReported && !reportedSuccessfully

  console.log('>>> alreadyReported', alreadyReported)
  console.log('>>> reportedSuccessfully', reportedSuccessfully)

  return (
    <Modal closeModal={closeModal} hasCloseButton={false}>
      <div className="flex flex-col gap-6 p-2">
        {loadingUser ? (
          <div className="flex flex-col items-center gap-3 py-6">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-[var(--primary)]" />
            <p className="text-sm text-gray-500">Carregando...</p>
          </div>
        ) : showAlreadyReported ? (
          <>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <svg
                  className="h-6 w-6 text-amber-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  />
                </svg>
              </div>

              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Anúncio já reportado
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Você já enviou uma denúncia para este anúncio anteriormente.
                Nossa equipe está analisando o caso.
              </p>
            </div>

            <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800">
              Caso tenha novas informações relevantes, entre em contato com o
              suporte da plataforma diretamente.
            </div>

            <Button
              className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--primary)] px-4 py-[10px] text-white hover:brightness-90"
              onClick={closeModal}
            >
              Fechar
            </Button>
          </>
        ) : reportedSuccessfully ? (
          <>
            <div className="text-center">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Denúncia enviada
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Obrigado por contribuir com a segurança da plataforma. Nossa
                equipe analisará a denúncia o mais breve possível.
              </p>
            </div>

            <Button
              className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--primary)] px-4 py-[10px] text-white hover:brightness-90"
              onClick={closeModal}
            >
              Fechar
            </Button>
          </>
        ) : (
          <>
            <div className="text-center">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Reportar anúncio
              </h2>

              <p className="text-sm leading-relaxed text-gray-600">
                Caso você acredite que este anúncio seja indevido ou contenha
                informações falsas, informe o motivo da denúncia abaixo.
              </p>
            </div>

            <div className="rounded-xl border border-red-200 bg-red-50 p-4">
              <h3 className="mb-2 text-sm font-semibold text-red-800">
                Antes de denunciar
              </h3>

              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-red-700">
                <li>
                  • Utilize esta funcionalidade apenas para denúncias legítimas.
                </li>
                <li>• Forneça informações claras para auxiliar na análise.</li>
                <li>• Denúncias falsas podem prejudicar outros usuários.</li>
              </ul>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Motivo da denúncia
              </label>

              <textarea
                value={reportText}
                onChange={handleReportTextChange}
                placeholder="Descreva por que você acredita que este anúncio é inadequado."
                className="min-h-[120px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700 outline-none transition focus:border-[var(--primary)] focus:bg-white"
              />
            </div>

            <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
              Ao enviar a denúncia, você confirma que as informações fornecidas
              são verdadeiras e serão utilizadas para análise da equipe
              responsável.
            </div>

            {error && (
              <p className="text-center text-sm font-medium text-red-500">
                {error}
              </p>
            )}

            <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-center">
              <Button
                onClick={closeModal}
                className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--secondary)] px-4 py-[10px] text-white hover:brightness-90"
              >
                Cancelar
              </Button>

              <Button
                onClick={handleReport}
                disabled={!reportText.trim() || loading}
                className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--primary)] px-4 py-[10px] text-white hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Enviando...' : 'Enviar denúncia'}
              </Button>
            </div>

            {loading && (
              <p className="text-center text-sm font-medium text-gray-500">
                Enviando denúncia, aguarde...
              </p>
            )}
          </>
        )}
      </div>
    </Modal>
  )
}

export default ModalReport
