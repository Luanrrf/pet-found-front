import { RegisterForm } from '../organisms/RegisterForm'

export function RegisterTemplate() {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center mt-10">
        Registre-se
      </h1>

      <RegisterForm />

      <p className="mt-25 text-sm text-center">
        Já possui conta?{' '}
        <a href="/login" className="text-orange-600 font-semibold">
          Entrar
        </a>
      </p>
    </>
  )
}
