import AgreementTerms from '../molecules/AgreementTerms'

interface Props {
  open: boolean
  handleLogin: (data: { email: string; password: string }) => void
  email: string
  password: string
  setAgreementOpen: (value: boolean) => void
}

export default function AgreementModal({
  open,
  handleLogin,
  email,
  password,
  setAgreementOpen,
}: Props) {
  if (!open) return null

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    handleLogin({
      email,
      password,
    })

    setAgreementOpen(false)
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-5">
      <div className="flex flex-col bg-white rounded-2xl py-6 max-md:max-w-[350px] md:max-w-[800px] w-full">
        <h2 className="text-xl font-bold text-[#333] mb-4 px-6">
          Estou de acordo
        </h2>

        <p className="text-[#666] text-sm leading-6 px-6 mb-4">
          Ao continuar você concorda com os termos e condições da plataforma Pet
          Found.
        </p>

        <AgreementTerms />

        <button
          onClick={onSubmit}
          className="w-full h-[45px] rounded-xl bg-[#EF7E06] text-white font-semibold m-4 max-w-[calc(100%-48px)]"
        >
          Aceitar
        </button>
      </div>
    </div>
  )
}
