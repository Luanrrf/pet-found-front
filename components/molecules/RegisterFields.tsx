import { Input } from '../atoms/Input'

export function RegisterFields() {
  return (
    <div className="flex flex-col gap-4">
      <Input type="text" placeholder="CPF" id="cpf" name="cpf" required />

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
    </div>
  )
}
