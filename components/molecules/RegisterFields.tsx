import { Input } from '../atoms/Input'

type RegisterFieldsProps = {
  initialValues?: {
    name?: unknown
    cpf?: unknown
    email?: unknown
    cellphone?: unknown
  }
  requirePassword?: boolean
}

export function RegisterFields({
  initialValues,
  requirePassword = true,
}: RegisterFieldsProps) {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="Nome"
        id="name"
        name="name"
        required
        defaultValue={String(initialValues?.name ?? '')}
      />

      <Input
        type="text"
        placeholder="CPF"
        id="cpf"
        name="cpf"
        required
        maxLength={14}
        defaultValue={String(initialValues?.cpf ?? '')}
        onChange={(e) => {
          let value = e.target.value

          value = value.replace(/\D/g, '')

          value = value.replace(/(\d{3})(\d)/, '$1.$2')

          value = value.replace(/(\d{3})(\d)/, '$1.$2')

          value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

          e.target.value = value
        }}
      />

      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
        defaultValue={String(initialValues?.email ?? '')}
      />

      <Input
        type="cellphone"
        placeholder="Insira seu celular"
        id="cellphone"
        name="cellphone"
        required
        defaultValue={String(initialValues?.cellphone ?? '')}
      />

      <Input
        type="password"
        placeholder="Senha"
        id="password"
        name="password"
        required={requirePassword}
      />

      <Input
        type="password"
        placeholder="Confirme sua senha"
        id="confirmPassword"
        name="confirmPassword"
        required={requirePassword}
      />
    </div>
  )
}
