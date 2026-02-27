import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Pet Found',
  description:
    'Pet Found é uma plataforma para ajudar a encontrar pets perdidos e conectar pessoas que encontraram pets com seus donos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          margin: 0,
          padding: '20px 20px 0',
          background:
            'linear-gradient(180deg, var(--Tertiary, #FEE7B8) 30%, #FFF 70%)',
          minHeight: 'calc(100vh - 20px)',
        }}
      >
        {children}
      </body>
    </html>
  )
}
