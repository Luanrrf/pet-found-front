import Image from 'next/image'
import React from 'react'
import EditButton from '../atoms/EditIcon'

const PDPMainImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full aspect-square object-cover rounded-[20px]"
      />
      <div className="absolute top-4 left-[50%] transform -translate-x-1/2 flex items-center justify-between w-full px-4">
        <form
          className="flex items-center gap-2"
          onChange={() => {
            console.log('changed')
          }}
        >
          <input type="checkbox" id="mainImageZoom" className="peer hidden" />
          <span className="w-6 h-6 rounded-lg bg-white peer-checked:border-green-500 peer-checked:bg-[#EF7E06]" />
          <label htmlFor="mainImageZoom">Adotado?</label>
        </form>
        <EditButton />
      </div>
    </div>
  )
}

export default PDPMainImage
