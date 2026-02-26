import { useEffect } from 'react'
import Swal from 'sweetalert2'

interface RequestSuccessProps {
  message?: string
  title?: string
  redirectTo?: string // opcional
}

export default function RequestSuccess({
  message = 'Operação realizada com sucesso!',
  title = 'Sucesso',
  redirectTo,
}: RequestSuccessProps) {
  useEffect(() => {
    Swal.fire({
      icon: 'success',
      title,
      text: message,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    }).then(() => {
      if (redirectTo) {
        window.location.href = redirectTo
      }
    })
  }, [message, title, redirectTo])

  return null // Apenas dispara o alerta
}
