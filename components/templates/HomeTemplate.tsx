'use client'

import React from 'react'
import Logo from '../atoms/Logo'
import { HomeActions } from '../organisms/HomeActions'
import { FetcherResponse } from '../utils/fetcher'

export function HomeTemplate({ user }: { user: FetcherResponse }) {
  return (
    <div className="relative min-h-[calc(100vh-40px)] flex flex-col items-center justify-center w-full">
      <Logo
        alt="logo pet found"
        src="/logo-home.png"
        height={112}
        width={280}
        className="absolute top-[60px] absolute left-1/2 -translate-x-1/2"
      />
      <h1 className="mb-[60px] px-4 text-center text-4xl font-bold text-orange-400 text-shadow-lg">
        Página inicial
      </h1>
      <HomeActions user={user} />
    </div>
  )
}
