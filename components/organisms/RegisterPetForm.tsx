'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  onSubmit: (data: FormData) => void
}

export default function RegisterPetForm({ onSubmit }: Props) {
  const [preview, setPreview] = useState('')

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
        <label className="text-sm text-[#666]">Raça</label>

        <input
          name="type"
          placeholder="Ex: Dobberman"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Porte</label>

        <input
          name="size"
          placeholder="Ex: Pequeno"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Sexo</label>

        <select
          name="gender"
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
        >
          <option value="Unknown">Não tenho certeza</option>

          <option value="Male">Macho</option>

          <option value="Female">Fêmea</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666]">Imagem</label>

        <label
          htmlFor="image"
          className="w-full h-[180px] border border-dashed border-[#BDBDBD] rounded-md flex items-center justify-center cursor-pointer overflow-hidden bg-white"
        >
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              width={100}
              className="w-full h-full object-cover"
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
          placeholder="Ex: Vacinas que já tenha tomado ou alguma especificidade do animal."
          className="w-full min-h-[100px] rounded-xl border border-[#DDD] p-4 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2"
      >
        Registrar
      </button>
    </form>
  )
}
