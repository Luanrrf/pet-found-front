'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import type { AnimalProps } from '../types/animal'
import { firstAnimalImage } from '@/utils/animalMappers'

interface Props {
  onSubmit: (data: FormData) => void
  animal?: AnimalProps | null
}

export default function EditPetForm({ onSubmit, animal }: Props) {
  const [preview, setPreview] = useState('')

  useEffect(() => {
    setPreview(firstAnimalImage(animal))
  }, [animal])

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setPreview(imageUrl)
  }

  return (
    <form
      action={onSubmit}
      className="bg-white rounded-[24px] p-5 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Nome</label>

        <input
          name="name"
          placeholder="Nome do Animal (caso não saiba por favor, coloque 'Não sei')"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue={animal?.name ?? ''}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Raça</label>

        <input
          name="breed"
          placeholder="Ex: Dobberman"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue={animal?.breed ?? ''}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Tipo</label>

        <select
          name="type"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue={animal?.type ?? ''}
        >
          <option disabled value=""></option>
          <option value="Dog">Cachorro</option>
          <option value="Cat">Gato</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Porte</label>

        <select
          name="size"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue={animal?.size ?? ''}
        >
          <option disabled value=""></option>
          <option value="Small">Pequeno</option>
          <option value="Medium">Médio</option>
          <option value="Large">Grande</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Sexo</label>

        <select
          name="gender"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue={animal?.gender ?? ''}
        >
          <option disabled value=""></option>
          <option value="Male">Macho</option>
          <option value="Female">Fêmea</option>
          <option value="Unknown">Não sei dizer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Fotos do animal</label>

        <label
          htmlFor="image"
          className="w-full h-[180px] border border-dashed border-[#BDBDBD] rounded-md flex items-center justify-center cursor-pointer overflow-hidden bg-white"
        >
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
              width={100}
              height={100}
            />
          ) : (
            <span className="text-[#999] text-3xl">+</span>
          )}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          onChange={handleImage}
          className="hidden"
        />
      </div>

      <input type="hidden" name="image" value={preview} />

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Observação:</label>

        <textarea
          name="observations"
          placeholder={
            'Ex: Vacinas que já tenha tomado ou alguma especificidade do animal.'
          }
          className="w-full min-h-[100px] rounded-xl border border-[#DDD] p-4 resize-none"
          defaultValue={animal?.observations ?? ''}
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-[#666]">
        <input
          type="checkbox"
          name="is_adopted"
          value="true"
          defaultChecked={animal?.is_adopted ?? false}
          className="h-5 w-5 accent-[#EF7E06]"
        />
        Adotado?
      </label>

      <button
        type="submit"
        className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2"
      >
        Salvar alterações
      </button>
    </form>
  )
}
