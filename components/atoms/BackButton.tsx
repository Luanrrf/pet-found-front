'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-orange-200 bg-white text-2xl leading-none text-[#EF7E06] shadow-sm hover:brightness-95"
      aria-label="Voltar"
      title="Voltar"
    >
      ‹
    </button>
  )
}
