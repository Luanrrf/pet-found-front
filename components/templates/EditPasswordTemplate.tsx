import type { FormEvent } from 'react'
import { EditPasswordForm } from '../organisms/EditPasswordForm'

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function EditPasswordTemplate({ onSubmit }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center">
        Alterar Senha
      </h1>

      <EditPasswordForm onSubmit={onSubmit} />
    </>
  )
}
