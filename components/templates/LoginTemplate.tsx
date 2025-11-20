import { LoginForm } from '../organisms/LoginForm'

export function LoginTemplate() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-orange-500 mb-6">Entrar</h1>
      <LoginForm />
      <div className="mt-4 text-sm">
        Primeira vez?{' '}
        <a href="/register" className="text-orange-600 font-semibold">
          Clique aqui
        </a>
      </div>
    </div>
  )
}
