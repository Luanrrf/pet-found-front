'use client'
import Loader from '../atoms/Loader'
import PDPMainImage from '../organisms/PDPMainImage'
import { useProductContext } from '../contexts/ProductContext'
import PDPInformations from '../organisms/PDPInformations'
import { useState } from 'react'
import PDPGalleryList from '../organisms/PDPGalleryList'
import PDPContact from '../organisms/PDPContact'

export function PDPTemplate() {
  const { productContext } = useProductContext()
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    productContext?.images?.[0]?.url
  )

  if (!productContext || !productContext.images || !productContext.id) {
    return <Loader />
  }

  if (!selectedImage) {
    setSelectedImage(productContext.images[0].url || '')
  }

  const translations: Record<string, string> = {
    male: 'Macho',
    female: 'Fêmea',
    small: 'Pequeno',
    medium: 'Médio',
    large: 'Grande',
    dog: 'Cachorro',
    cat: 'Gato',
  }

  const informationsToShow = [
    { label: 'Nome', key: 'name' },
    { label: 'Tipo', key: 'type' },
    { label: 'Raça', key: 'breed' },
    { label: 'Gênero', key: 'gender' },
    { label: 'Tamanho', key: 'size' },
    {
      label: 'Observações (Vacinas ou outras informações sobre o animal)',
      key: 'observations',
    },
  ]

  const informations = informationsToShow
    .map((info) => {
      const rawValue = productContext[info.key as keyof typeof productContext]
      const stringValue = String(rawValue).toLowerCase()

      return {
        label: info.label,
        value: translations[stringValue] || String(rawValue),
      }
    })
    .filter(
      (info) =>
        info.value && info.value !== 'undefined' && info.value !== 'null'
    )

  const allImages = productContext.images || []

  const imagesWithoutMain = allImages.filter(
    (image) => image.url !== selectedImage
  )

  return (
    <div className="flex flex-col gap-3 bg-[#FEE7B8] rounded-[18px] p-4">
      <div className="flex flex-col gap-1">
        <PDPMainImage src={selectedImage || ''} alt={`${productContext.id}`} />
        {imagesWithoutMain.length > 0 && (
          <PDPGalleryList
            images={imagesWithoutMain}
            setSelectedImage={setSelectedImage}
          />
        )}
      </div>
      <PDPInformations informations={informations} />
      <PDPContact />
    </div>
  )
}
