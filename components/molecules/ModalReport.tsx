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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function fetchUser() {
    const user = await getUserAuthentication()
    if (user) {
      setAlreadyReported(
        user.reported_animals_ids?.includes(productContext?.id ?? 0) ?? false
      )
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
          throw new Error(response.message || 'Erro ao enviar denúncia.')
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

  return (
    <Modal closeModal={closeModal} hasCloseButton={false}>
      <div className="flex flex-col gap-6 p-2">
        {alreadyReported && (
          <p className="text-red-500">
            Você já reportou este pet. Obrigado pela sua contribuição!
          </p>
        )}
        {reportedSuccessfully ? (
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
                disabled={!reportText.trim() || loading || alreadyReported}
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
