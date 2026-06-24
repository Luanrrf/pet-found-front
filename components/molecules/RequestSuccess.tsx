import { useEffect, useRef } from 'react'
import Swal from 'sweetalert2'

interface RequestSuccessProps {
  message?: string
  title?: string
  redirectTo?: string
}

export default function RequestSuccess({
  message = 'Operação realizada com sucesso!',
  title = 'Sucesso',
  redirectTo,
}: RequestSuccessProps) {
  const hasShownAlert = useRef(false)

  useEffect(() => {
    if (hasShownAlert.current) return

    hasShownAlert.current = true

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

  return null
}
