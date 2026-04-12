import React from 'react'
import Logo from '../atoms/Logo'
import { WelcomeActions } from '../organisms/WelcomeActions'

export function WelcomeTemplate() {
  return (
    <div>
      <Logo alt="" src="/logo-home.png" height={112} width={280} />
      <h1 className="text-3xl font-bold text-orange-500 mb-10">
        Bem-Vindo(a)!
      </h1>
      <WelcomeActions />
    </div>
  )
}
