import type { FormEvent } from 'react'
import { EditUserForm } from '../organisms/EditUserForm'

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  onDelete: () => void
  user?: Record<string, unknown>
}

export function EditUserTemplate({ onSubmit, onDelete, user }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Editar Usuário
      </h1>

      <EditUserForm onSubmit={onSubmit} onDelete={onDelete} user={user} />
    </>
  )
}
