import { RegisterForm } from '../organisms/RegisterForm'

interface Props {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export function RegisterTemplate({ onSubmit }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center mt-10">
        Registre-se
      </h1>

      <RegisterForm onSubmit={onSubmit} />

      <p className="mt-25 text-sm text-center">
        Já possui conta?{' '}
        <a href="/login" className="text-orange-600 font-semibold">
          Entrar
        </a>
      </p>
    </>
  )
}
