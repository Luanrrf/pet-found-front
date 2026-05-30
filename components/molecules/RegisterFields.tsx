import { Input } from '../atoms/Input'

export function RegisterFields() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        placeholder="CPF"
        id="cpf"
        name="cpf"
        required
        maxLength={14}
        onChange={(e) => {
          let value = e.target.value

          value = value.replace(/\D/g, '')

          value = value.replace(/(\d{3})(\d)/, '$1.$2')

          value = value.replace(/(\d{3})(\d)/, '$1.$2')

          value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

          e.target.value = value
        }}
      />

      <Input type="text" placeholder="Nome" id="name" name="name" required />

      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        name="email"
        required
      />

      <Input
        type="password"
        placeholder="Senha"
        id="password"
        name="password"
        required
      />

      <Input
        type="password"
        placeholder="Confirme sua senha"
        id="confirmPassword"
        name="confirmPassword"
        required
      />

      <Input
        type="cellphone"
        placeholder="Insira seu celular"
        id="cellphone"
        name="cellphone"
        required
      />
    </div>
  )
}
