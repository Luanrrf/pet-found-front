import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { AnimalImage } from '../types/animal'

const PDPGalleryList = ({
  setSelectedImage,
  images,
}: {
  setSelectedImage: Dispatch<SetStateAction<string | undefined>>
  images: AnimalImage[]
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {images.map((image, index) => (
        <button key={index} onClick={() => setSelectedImage(image.url)}>
          <Image
            src={image.url}
            alt={image.id.toString()}
            width={100}
            height={100}
            className="w-full aspect-square object-cover rounded-[20px]"
          />
        </button>
      ))}
    </div>
  )
}

export default PDPGalleryList
