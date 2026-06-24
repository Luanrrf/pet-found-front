'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Loader from '../atoms/Loader'
import getUserAuthentication from './getUserAuthentication'

export default function RequireAuth({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [allowed, setAllowed] = useState(false)

  useEffect(() => {
    let active = true

    async function verifyUser() {
      const user = await getUserAuthentication()

      if (!active) return

      if (!user || user.status === 401) {
        await Swal.fire({
          icon: 'warning',
          title: 'Acesso restrito',
          text: 'Você não tem permissão para acessar esta tela sem estar logado.',
          confirmButtonText: 'Entrar',
          confirmButtonColor: '#EF7E06',
        })

        router.replace('/login')
        return
      }

      setAllowed(true)
    }

    verifyUser()

    return () => {
      active = false
    }
  }, [router])

  if (!allowed) {
    return <Loader />
  }

  return children
}
