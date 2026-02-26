import { useEffect } from 'react'
import Swal from 'sweetalert2'

interface RequestGenericErrorProps {
  message?: string
}

export default function RequestGenericError({
  message = 'Ocorreu um erro inesperado ao processar sua solicitação. Tente novamente mais tarde.',
}: RequestGenericErrorProps) {
  useEffect(() => {
    Swal.fire({
      icon: 'error',
      title: 'Erro na requisição',
      text: message,
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    })
  }, [message])

  return null // Apenas dispara o alerta
}
