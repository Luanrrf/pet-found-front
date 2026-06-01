import React from 'react'
import { Button } from '../atoms/Button'
import Modal from '../organisms/Modal'

const ModalContactConfirmation = ({
  setModalState,
  setShowInformation,
}: {
  setModalState: React.Dispatch<React.SetStateAction<boolean>>
  setShowInformation: (value: React.SetStateAction<boolean>) => void
}) => {
  return (
    <Modal closeModal={() => setModalState(false)} hasCloseButton={false}>
      <div className="flex flex-col gap-6 p-2">
        <div className="text-center">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            Antes de visualizar o contato
          </h2>

          <p className="text-sm leading-relaxed text-gray-600">
            Você está prestes a acessar as informações de contato do responsável
            pelo animal.
          </p>
        </div>

        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
          <h3 className="mb-2 text-sm font-semibold text-amber-800">
            Aviso de segurança
          </h3>

          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-amber-700">
            <li>
              • Compartilhe apenas as informações necessárias para o contato.
            </li>
            <li>
              • Caso seja necessário encontrar o responsável pelo animal,
              priorize locais públicos e seguros.
            </li>
            <li>
              • Confirme as informações do animal antes de tomar qualquer
              decisão.
            </li>
            <li>
              • O Pet Found apenas conecta usuários e não participa das
              negociações, encontros ou acordos realizados entre as partes.
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
          Ao continuar, você declara estar ciente das recomendações acima e
          assume a responsabilidade pelo contato realizado com o responsável
          pelo animal.
        </div>

        <div className="flex flex-col-reverse gap-3 md:flex-row md:justify-center">
          <Button
            className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--secondary)] px-4 py-[10px] text-white hover:brightness-90"
            onClick={() => setModalState(false)}
          >
            Voltar
          </Button>

          <Button
            className="m-auto w-full max-w-[260px] rounded-xl bg-[var(--primary)] px-4 py-[10px] text-white hover:brightness-90"
            onClick={() => {
              setShowInformation(true)
              setModalState(false)
            }}
          >
            Estou ciente, exibir contato
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalContactConfirmation
