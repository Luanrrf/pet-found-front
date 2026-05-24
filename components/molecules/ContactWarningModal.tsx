'use client'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ContactWarningModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-5">
      <div className="w-full max-w-[340px] bg-white rounded-[24px] p-6 flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-full bg-[#FFF3E8] flex items-center justify-center mb-4">
          <span className="text-[28px]">⚠️</span>
        </div>

        <h2 className="text-[#333] text-xl font-bold mb-3">Atenção</h2>

        <p className="text-sm text-[#666] leading-6 mb-6">
          Ao entrar em contato, evite compartilhar informações pessoais
          sensíveis e sempre confirme se o animal realmente pertence ao
          responsável.
        </p>

        <button
          onClick={onClose}
          className="w-full h-[46px] rounded-xl bg-[#EF7E06] text-white font-semibold"
        >
          Entendi
        </button>
      </div>
    </div>
  )
}
