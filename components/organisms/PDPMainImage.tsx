import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import EditButton from '../atoms/EditIcon'
import useMyAnimals from '../utils/useMyAnimals'
import { FetcherResponse } from '../utils/useFetcher'
import { useProductContext } from '../contexts/ProductContext'
import Modal from './Modal'
import { Button } from '../atoms/Button'

function findAnimalById(data: FetcherResponse, animalId: number) {
  return Object.values(data).some(
    (item) =>
      typeof item === 'object' &&
      item !== null &&
      'id' in item &&
      item.id === animalId
  )
}

const PDPMainImage = ({ src, alt }: { src: string; alt: string }) => {
  const [openModal, setOpenModal] = useState(false)
  const [thisIsMyAnimal, setThisIsMyAnimal] = useState<boolean>(false)

  const { productContext } = useProductContext()

  const verifyIfAnimalIsYours = async () => {
    const myAnimals = await useMyAnimals()
    if (!myAnimals) return

    const thisIsMyAnimal = findAnimalById(myAnimals, productContext?.id ?? 0)

    setThisIsMyAnimal(thisIsMyAnimal)
  }

  useEffect(() => {
    verifyIfAnimalIsYours()
  }, [])

  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full aspect-square object-cover rounded-[20px]"
      />
      {thisIsMyAnimal && (
        <div className="absolute top-4 left-[50%] transform -translate-x-1/2 flex items-center justify-between w-full px-4">
          <form
            className="flex items-center gap-2"
            onChange={() => {
              setOpenModal(true)
            }}
          >
            <input type="checkbox" id="mainImageZoom" className="peer hidden" />
            <span className="w-6 h-6 rounded-lg bg-white peer-checked:border-green-500 peer-checked:bg-[#EF7E06]" />
            <label htmlFor="mainImageZoom">Adotado?</label>
          </form>
          {openModal && (
            <Modal closeModal={() => setOpenModal(false)}>
              <p>
                Você tem certeza que quer alterar o estado do animal de{' '}
                {productContext?.is_adopted ? 'Adotado' : 'Não adotado'} para{' '}
                {!productContext?.is_adopted ? 'Adotado' : 'Não adotado'}
              </p>
              <Button
                className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80"
                onClick={() => {}}
              >
                Sim
              </Button>
              <Button
                className="bg-[var(--secondary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80"
                onClick={() => setOpenModal(false)}
              >
                Não
              </Button>
            </Modal>
          )}
          <EditButton />
        </div>
      )}
    </div>
  )
}

export default PDPMainImage
