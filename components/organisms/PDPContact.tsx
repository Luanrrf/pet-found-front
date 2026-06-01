import React, { useEffect, useState } from 'react'
import useAuthentication from '../utils/useAuthentication'
import { Button } from '../atoms/Button'
import { FetcherResponse } from '../utils/useFetcher'
import Loading from '../atoms/Loading'
import { useProductContext } from '../contexts/ProductContext'
import useAnimalOwnerContact from '../utils/useAnimalOwnerContact'

const PDPContact = () => {
  const [user, setUser] = useState<FetcherResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [showInformation, setShowInformation] = useState(false)
  const { productContext } = useProductContext()
  const [userContact, setUserContact] = useState<string | null>(null)

  const initRequests = async () => {
    const firstRequest = await useAuthentication()
    const secondRequest = await useAnimalOwnerContact(productContext?.id ?? 0)

    setLoading(false)

    if (!firstRequest || !secondRequest) {
      return
    }

    const contact = secondRequest['cellphone']
      ? String(secondRequest['cellphone'])
      : null

    setUser(firstRequest)
    setUserContact(contact)
  }

  useEffect(() => {
    initRequests()
  }, [])

  if (loading) {
    return <Loading />
  }

  console.log('>>> productContext', productContext)

  return (
    <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
      <h2 className="mb-2 text-xl font-semibold text-[#111827]">
        Informações de Contato
      </h2>

      {!user ? (
        <div className="rounded-xl border border-[#DBEAFE] bg-[#EFF6FF] p-4">
          <p className="text-sm leading-relaxed text-[#1E40AF]">
            Para proteger a privacidade do responsável pelo animal, os dados de
            contato são exibidos apenas para usuários logados.
          </p>

          <div className="mt-4">
            <Button>Entrar na conta</Button>
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
            <Button onClick={() => setShowInformation(true)}>
              Visualizar contato
            </Button>
          ) : (
            <div className="rounded-xl border border-[#D1FAE5] bg-[#ECFDF5] p-4">
              <p className="text-sm font-medium text-[#065F46]">
                Contato do responsável
              </p>

              <div className="mt-2 text-base text-[#111827]">{userContact}</div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default PDPContact
