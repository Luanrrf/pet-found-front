import type { FormEventHandler } from 'react'
import { UnblockUserForm } from '../organisms/UnblockUserForm'

export function UnblockUserTemplate({
  onSubmit,
}: {
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center mt-40">
        Desbloquear Usuário
      </h1>

      <UnblockUserForm onSubmit={onSubmit} />
    </>
  )
}
