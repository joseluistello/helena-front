import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import HeaderSection from '@/components/Header'
import FooterSection from '@/components/Footer'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Helena | Tu compañera de crecimiento personal',
  description: 'Te acompañamos en tu proceso de crecimiento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <HeaderSection/>
      {children}
      <FooterSection/>  
      </body>
    </html>
  )
}
