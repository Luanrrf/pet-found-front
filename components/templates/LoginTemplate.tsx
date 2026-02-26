import { LoginForm } from '../organisms/LoginForm'

export function LoginTemplate() {
  return (
    <>
      <h1 className="text-4xl font-bold text-black mb-6 text-center mt-20">
        Entrar
      </h1>

      <LoginForm />

      <p className="mt-60 text-sm text-center">
        Primeira vez?{' '}
        <a href="/register" className="text-orange-600 font-semibold">
          Clique aqui
        </a>
      </p>
    </>
  )
}
