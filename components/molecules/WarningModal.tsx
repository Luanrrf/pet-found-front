interface Props {
  open: boolean
  onClose: () => void
}

export default function WarningModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-5">
      <div className="bg-white rounded-2xl p-6 max-w-[350px] w-full">
        <h2 className="text-xl font-bold text-[#333] mb-4">Aviso Importante</h2>

        <p className="text-sm text-[#666] leading-6">
          Cadastre apenas informações verdadeiras sobre o animal. Informações
          falsas podem causar bloqueio da conta.
        </p>

        <button
          onClick={onClose}
          className="w-full h-[45px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-6"
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
