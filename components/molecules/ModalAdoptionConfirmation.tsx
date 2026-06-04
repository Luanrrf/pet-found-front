import React from 'react'
import { Button } from '../atoms/Button'
import Modal from '../organisms/Modal'
import { useProductContext } from '../contexts/ProductContext'
import { getCookie } from '../utils/getCookie'
import fetcher from '../utils/fetcher'

const ModalAdoptionConfirmation = ({
  setModalState,
}: {
  setModalState: React.Dispatch<
    React.SetStateAction<'open' | 'loading' | 'close'>
  >
}) => {
  const { productContext } = useProductContext()

  async function updateAnimal(
    id: number | undefined,
    key: string,
    value: boolean
  ) {
    setModalState('loading')

    const token = getCookie('token')
    if (!id || !token) return

    const req = await fetcher({
      url: `/api/animal/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'PATCH',
      body: { [key]: value },
    })

    if (req[key] === value) {
      window.location.reload()
    }
  }

  return (
    <Modal closeModal={() => setModalState('close')} hasCloseButton={false}>
      <div className="flex flex-col gap-6 p-2">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Confirmar alteração</h2>

          <p className="text-gray-600 leading-relaxed">
            Deseja alterar o status deste animal de{' '}
            <strong>
              {productContext?.is_adopted ? 'Adotado' : 'Não adotado'}
            </strong>{' '}
            para{' '}
            <strong>
              {!productContext?.is_adopted ? 'Adotado' : 'Não adotado'}
            </strong>
            ?
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row gap-3 justify-center">
          <Button
            className="bg-[var(--secondary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80"
            onClick={() => setModalState('close')}
          >
            Cancelar
          </Button>

          <Button
            className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80"
            onClick={() => {
              updateAnimal(
                productContext?.id,
                'is_adopted',
                !productContext?.is_adopted
              )
            }}
          >
            Confirmar
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalAdoptionConfirmation
