import { Input } from '../atoms/Input'

export function EditPasswordFields() {
  return (
    <>
      <Input
        type="password"
        id="currentPassword"
        name="currentPassword"
        placeholder="Senha atual"
        required
      />

      <Input
        type="password"
        id="password"
        name="password"
        placeholder="Nova senha"
        required
      />

      <Input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder="Confirmar nova senha"
        required
      />
    </>
  )
}
