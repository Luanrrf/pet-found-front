interface Props {
  open: boolean
  onClose: () => void
}

export default function AgreementModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-5">
      <div className="bg-white rounded-2xl p-6 max-w-[350px] w-full">
        <h2 className="text-xl font-bold text-[#333] mb-4">Estou de acordo</h2>

        <p className="text-[#666] text-sm leading-6">
          Ao continuar você concorda com os termos e condições da plataforma Pet
          Found.
        </p>

        <button
          onClick={onClose}
          className="w-full h-[45px] rounded-xl bg-[#EF7E06] text-white font-semibold mt-6"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
