import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import EditButton from '../atoms/EditIcon'
import useMyAnimals from '../utils/useMyAnimals'
import { FetcherResponse } from '../utils/fetcher'
import { useProductContext } from '../contexts/ProductContext'
import ModalAdoptionConfirmation from '../molecules/ModalAdoptionConfirmation'
import Loading from '../atoms/Loading'

export function findAnimalById(data: FetcherResponse, animalId: number) {
  return Object.values(data).some(
    (item) =>
      typeof item === 'object' &&
      item !== null &&
      'id' in item &&
      item.id === animalId
  )
}

const PDPMainImage = ({
  src,
  alt,
  blurImage = false,
}: {
  src: string
  alt: string
  blurImage?: boolean
}) => {
  const [modalState, setModalState] = useState<'open' | 'loading' | 'close'>(
    'close'
  )
  const [thisIsMyAnimal, setThisIsMyAnimal] = useState<boolean>(false)
  const [checkingOwner, setCheckingOwner] = useState(true)

  const { productContext } = useProductContext()

  const verifyIfAnimalIsYours = async () => {
    const myAnimals = await useMyAnimals()
    if (!myAnimals) {
      setCheckingOwner(false)
      return
    }

    const thisIsMyAnimal = findAnimalById(myAnimals, productContext?.id ?? 0)

    setThisIsMyAnimal(thisIsMyAnimal)
    setCheckingOwner(false)
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
        className={`w-full aspect-square object-contain rounded-[20px] bg-stone-100 ${
          blurImage ? 'blur-md scale-[1.02]' : ''
        }`}
      />
      {checkingOwner && (
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <div className="h-10 w-32 animate-pulse rounded-lg bg-white/80" />
          <div className="h-10 w-10 animate-pulse rounded-lg bg-white/80" />
        </div>
      )}
      {!checkingOwner && thisIsMyAnimal && (
        <div className="absolute top-4 left-[50%] transform -translate-x-1/2 flex items-center justify-between w-full px-4">
          <form
            className="flex items-center gap-2 rounded-xl bg-white/90 shadow-sm"
            onChange={() => {
              setModalState('open')
            }}
          >
            <input
              type="checkbox"
              id="mainImageZoom"
              className="peer hidden"
              checked={productContext?.is_adopted}
              readOnly
            />
            <label
              htmlFor="mainImageZoom"
              className="font-semibold text-stone-800 flex gap-2 px-3 py-2 cursor-pointer"
            >
              <span className="min-w-6 h-6 rounded-lg bg-white border border-gray-300 peer-checked:border-green-500 peer-checked:bg-[#EF7E06]" />
              Adotado?
            </label>
          </form>
          <EditButton petId={productContext?.id} />
        </div>
      )}

      {modalState === 'open' && (
        <ModalAdoptionConfirmation setModalState={setModalState} />
      )}
      {modalState === 'loading' && (
        <Loading message="Estamos carregando a alteração solicitada, por favor aguarde" />
      )}
    </div>
  )
}

export default PDPMainImage
