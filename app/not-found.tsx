import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-bold text-[var(--primary)]">404</h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-900">
          Página não encontrada
        </h2>

        <p className="mt-4 text-gray-600">
          Parece que este caminho não existe ou foi removido.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:brightness-90"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  )
}
