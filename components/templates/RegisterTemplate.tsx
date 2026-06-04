import { RegisterForm } from '../organisms/RegisterForm'

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function RegisterTemplate({ onSubmit }: Props) {
  return (
    <div className="w-full max-w-[600px] mx-auto h-full bg-white rounded-xl p-5 mt-[3vh] mb-[3vh]">
      <h1 className="text-4xl font-bold text-orange-400 mb-[30px] text-center text-shadow-lg">
        Registre-se
      </h1>

      <RegisterForm onSubmit={onSubmit} />

      <p className="mt-4 text-base font-normal leading-6 text-stone-500 text-center">
        Já possui conta?{' '}
        <a href="/login" className="text-orange-600">
          Entrar
        </a>
      </p>
    </div>
  )
}
