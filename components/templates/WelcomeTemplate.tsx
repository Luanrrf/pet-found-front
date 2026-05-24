import React from 'react'
import Logo from '../atoms/Logo'
import { WelcomeActions } from '../organisms/WelcomeActions'

export function WelcomeTemplate() {
  return (
    <div>
      <Logo alt="" src="/logo-home.png" height={112} width={280} />
      <h1 className="text-4xl font-bold text-orange-400 mb-10 text-center mt-10 text-shadow-lg">
        Bem-Vindo(a)!
      </h1>
      <WelcomeActions />
    </div>
  )
}
