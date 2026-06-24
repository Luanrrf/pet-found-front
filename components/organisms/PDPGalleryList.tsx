import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { AnimalImage } from '../types/animal'
import { normalizeAnimalImageUrl } from '@/utils/animalMappers'

const PDPGalleryList = ({
  setSelectedImage,
  images,
  blurImages = false,
}: {
  setSelectedImage: Dispatch<SetStateAction<string | undefined>>
  images: AnimalImage[]
  blurImages?: boolean
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => {
        const imageUrl = normalizeAnimalImageUrl(image.url)

        return (
          <button key={index} onClick={() => setSelectedImage(imageUrl)}>
            <Image
              src={imageUrl}
              alt={image.id.toString()}
              width={100}
              height={100}
              className={`w-full aspect-square object-cover rounded-[20px] ${
                blurImages ? 'blur-md scale-105' : ''
              }`}
            />
          </button>
        )
      })}
    </div>
  )
}

export default PDPGalleryList
