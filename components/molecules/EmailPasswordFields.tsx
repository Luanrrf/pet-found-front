import { Input } from '../atoms/Input'

export function EmailPasswordFields() {
  return (
    <div className="flex flex-col gap-4">
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
    </div>
  )
}
