import Link from 'next/link'

export default function ForbiddenPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="mb-4 text-7xl">🚫</div>

        <h1 className="text-7xl font-bold text-[var(--primary)]">403</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-900">
          Acesso negado
        </h2>

        <p className="mt-4 text-gray-600">
          Você não está logado ou não possui permissão para acessar esta página
          ou executar esta ação.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-[var(--primary)] px-6 py-3 font-medium text-white transition hover:brightness-90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  )
}
