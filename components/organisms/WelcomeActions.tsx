import React from 'react'
import { Button } from '../atoms/Button'
import Link from 'next/link'

export function WelcomeActions() {
  return (
    <div className="flex flex-col gap-10 w-full max-w-xs">
      <Link href="/login" className="flex w-full">
        <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Entrar
        </Button>
      </Link>
      <Link href="/register" className="flex w-full">
        <Button className="bg-[var(--secondary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Registrar
        </Button>
      </Link>
      <Link href="/preview" className="flex w-full">
        <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Conhecer os Pets
        </Button>
      </Link>
    </div>
  )
}
