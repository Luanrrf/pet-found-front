'use client'

import React from 'react'
import Logo from '../atoms/Logo'
import { WelcomeActions } from '../organisms/WelcomeActions'

export function WelcomeTemplate() {
  return (
    <div className="relative min-h-[calc(100vh-40px)] flex flex-col items-center justify-center w-full">
      <Logo
        alt="logo pet found"
        src="/logo-home.png"
        height={112}
        width={280}
        className="absolute top-[60px] absolute left-1/2 -translate-x-1/2"
      />
      <h1 className="text-4xl font-bold text-orange-400 mb-[60px] text-center text-shadow-lg">
        Bem-Vindo(a)!
      </h1>
      <WelcomeActions />
    </div>
  )
}
