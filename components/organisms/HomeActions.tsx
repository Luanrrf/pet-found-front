import React from 'react'
import { Button } from '../atoms/Button'
import Link from 'next/link'
import { FetcherResponse } from '../utils/useFetcher'

export function HomeActions({ user }: { user: FetcherResponse }) {
  const isAdmin = user.role === 'admin'

  return (
    <div className="flex flex-col gap-10 w-full max-w-xs">
      <Link href={`/edituser/${user.userId}`} className="flex w-full">
        <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Editar Usuário
        </Button>
      </Link>
      <Link href="/createpet" className="flex w-full">
        <Button className="bg-[var(--secondary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Cadastrar animal
        </Button>
      </Link>
      <Link href="/preview" className="flex w-full">
        <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
          Conhecer os Pets
        </Button>
      </Link>
      {isAdmin && (
        <>
          <Link href="/blockuser" className="flex w-full">
            <Button className="bg-[var(--secondary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
              Bloquear Usuário
            </Button>
          </Link>
          <Link href="/unblockuser" className="flex w-full">
            <Button className="bg-[var(--primary)] w-full max-w-[260px] py-[10px] m-auto text-white rounded-xl px-4 hover:brightness-80">
              Desbloquear Usuário
            </Button>
          </Link>
        </>
      )}
    </div>
  )
}
