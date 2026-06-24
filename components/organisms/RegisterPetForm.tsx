'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  onSubmit: (data: FormData) => void
  file: File | null
  setFile: (file: File | null) => void
  submitting?: boolean
}

export default function RegisterPetForm({
  onSubmit,
  setFile,
  submitting = false,
}: Props) {
  const [preview, setPreview] = useState('')

  function handleImage(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]

    if (!file) return

    const imageUrl = URL.createObjectURL(file)

    setPreview(imageUrl)
    setFile(file)
  }

  return (
    <form
      action={onSubmit}
      className="bg-white rounded-[24px] p-5 flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">
          Nome do Animal
        </label>

        <input
          name="name"
          placeholder="caso não tenha: 'Não sei'"
          required
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Raça</label>

        <input
          name="breed"
          placeholder="Ex: Dobberman"
          required
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Tipo</label>

        <select
          name="type"
          required
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue=""
        >
          <option disabled value=""></option>
          <option value="Dog">Cachorro</option>
          <option value="Cat">Gato</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Porte</label>

        <select
          name="size"
          required
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue=""
        >
          <option disabled value=""></option>
          <option value="Small">Pequeno</option>
          <option value="Medium">Médio</option>
          <option value="Large">Grande</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Sexo</label>

        <select
          name="gender"
          required
          className="w-full h-[48px] rounded-xl border border-[#DDD] px-4"
          defaultValue=""
        >
          <option disabled value=""></option>
          <option value="Male">Macho</option>
          <option value="Female">Fêmea</option>
          <option value="Unknown">Não sei dizer</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Imagem</label>

        <label
          htmlFor="image"
          className="w-full h-[180px] border border-dashed border-[#BDBDBD] rounded-md flex items-center justify-center cursor-pointer overflow-hidden bg-white"
        >
          {preview ? (
            <Image
              src={preview}
              alt="Preview"
              width={200}
              height={200}
              className="aspect-square object-cover"
            />
          ) : (
            <span className="text-[#999] text-3xl">+</span>
          )}
        </label>

        <input
          id="image"
          type="file"
          accept="image/*"
          required
          onChange={handleImage}
          className="sr-only"
        />
      </div>

      <input type="hidden" name="image" value={preview} />

      <div className="flex flex-col gap-2">
        <label className="text-sm text-[#666] font-semibold">Observação:</label>

        <textarea
          name="observations"
          placeholder="Ex: Vacinas que já tenha tomado ou alguma especificidade do animal."
          className="w-full min-h-[100px] rounded-xl border border-[#DDD] p-4 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full h-[48px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? 'Registrando...' : 'Registrar'}
      </button>
    </form>
  )
}
