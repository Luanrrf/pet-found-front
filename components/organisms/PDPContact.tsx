import React, { useState } from 'react'
import { Button } from '../atoms/Button'
import Loading from '../atoms/Loading'
import useContact from '../utils/useContact'
import ModalContactConfirmation from '../molecules/ModalContactConfirmation'
import { formatPhone } from '../utils/formatPhone'
import Link from 'next/link'

const PDPContact = () => {
  const [showInformation, setShowInformation] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const { user, loading, userContact } = useContact()

  if (loading) {
    return <Loading />
  }

  const hasUser = !!user && user.status !== 401

  return (
    <div className="max-md:mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-[#111827]">
        Informações de Contato
      </h2>

      {!hasUser ? (
        <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] p-4">
          <p className="text-sm leading-relaxed text-[#1E40AF]">
            Para proteger a privacidade do responsável pelo animal, os dados de
            contato são exibidos apenas para usuários logados.
          </p>

          <div className="mt-4">
            <Button>
              <Link href="/login">Entrar na conta</Link>
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="pb-4">
            <p className="mt-1 text-sm leading-relaxed text-red-500">
              As informações de contato são fornecidas diretamente pelo
              responsável pelo animal. O Pet Found atua apenas como
              intermediador entre os usuários e não se responsabiliza pela
              veracidade das informações, negociações, acordos ou encontros
              realizados entre as partes. Recomendamos cautela ao compartilhar
              dados pessoais seja realizado sem a devida verificação.
            </p>
          </div>

          {!showInformation ? (
            <Button onClick={() => setModalOpen(true)}>
              Visualizar contato
            </Button>
          ) : (
            <div className="rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] p-4">
              <p className="text-sm font-medium text-[#065F46]">
                Contato do responsável
              </p>

              <div className="mt-2 text-base text-[#111827]">
                {formatPhone(userContact)}
              </div>
            </div>
          )}
          {modalOpen && (
            <ModalContactConfirmation
              setModalState={setModalOpen}
              setShowInformation={setShowInformation}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default PDPContact
