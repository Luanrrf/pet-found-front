import { useEffect } from 'react'
import Swal from 'sweetalert2'

interface UnauthorizedErrorProps {
  message?: string
}

export default function UnauthorizedError({
  message = 'Usuário ou senha inválidos. Verifique suas credenciais.',
}: UnauthorizedErrorProps) {
  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'Acesso negado',
      text: message,
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    })
  }, [message])
  return null
}
