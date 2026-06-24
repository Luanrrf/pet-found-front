import React from 'react'
import { Button } from '../atoms/Button'
import Modal from '../organisms/Modal'
import { useProductContext } from '../contexts/ProductContext'
import { getCookie } from '../utils/getCookie'
import fetcher from '../utils/fetcher'
import { API_URL } from '../constants/api'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

const ModalAdoptionConfirmation = ({
  setModalState,
}: {
  setModalState: React.Dispatch<
    React.SetStateAction<'open' | 'loading' | 'close'>
  >
}) => {
  const { productContext, setProductContext } = useProductContext()
  const router = useRouter()

  async function updateAnimal(
    id: number | undefined,
    key: string,
    value: boolean
  ) {
    setModalState('loading')

    const token = getCookie('token')
    if (!id || !token) {
      setModalState('close')
      await Swal.fire({
        icon: 'error',
        title: 'Erro ao processar sua solicitação',
        text: 'Não foi possível alterar o status do animal.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      })
      return
    }

    const req = await fetcher({
      url: `${API_URL}/animal/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'PATCH',
      body: { [key]: value },
    })

    if (req.status >= 200 && req.status < 300) {
      setProductContext((current) =>
        current ? { ...current, [key]: value } : current
      )
      setModalState('close')
      await Swal.fire({
        icon: 'success',
        title: 'Sucesso',
        text: 'Status do animal atualizado com sucesso!',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      })
      router.replace('/pets')
      return
    }

    setModalState('close')
    await Swal.fire({
      icon: 'error',
      title: 'Erro ao processar sua solicitação',
      text: req.message || 'Não foi possível alterar o status do animal.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    })
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
