import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import HeaderSection from '@/components/Header'
import FooterSection from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Helena | Tu compañera de crecimiento personal',
  description: 'Estaremos contigo en todo momento, incluso en los momentos más difíciles de la vida.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
        <head>
        <meta property="twitter:image" content="https://opengraphs.s3.us-east-2.amazonaws.com/Helena.jpeg" />
      </head>
      <body className={inter.className}>
      <HeaderSection/>
      {children}
      </body>
    </html>
  )
}
