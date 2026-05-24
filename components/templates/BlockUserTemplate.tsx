import type { FormEventHandler } from 'react'
import { BlockUserForm } from '../organisms/BlockUserForm'

interface Props {
  onSubmit?: FormEventHandler<HTMLFormElement>
}

export function BlockUserTemplate({ onSubmit }: Props) {
  return (
    <>
      <h1 className="text-3xl font-bold text-black mb-6 text-center mt-40">
        Bloquear Usuário
      </h1>

      <BlockUserForm onSubmit={onSubmit} />
    </>
  )
}
