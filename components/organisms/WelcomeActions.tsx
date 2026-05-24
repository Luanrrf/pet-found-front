import React from 'react'
import { Button } from '../atoms/Button'
import Link from 'next/link'

export function WelcomeActions() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-xs">
      <Link href="/login">
        <Button>Entrar</Button>
      </Link>
      <Link href="/register">
        <Button className="bg-orange-400">Registrar</Button>
      </Link>
      <Link href="/petpage">
        <Button>Conhecer os Pets</Button>
      </Link>
    </div>
  )
}
