import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mosaic Platforms Games - Independent Game Studio',
  description: 'Independent game studio creating narrative-driven experiences powered by AI. Developing Corner Story and future games.',
  keywords: 'indie game studio, mosaic platforms, corner story, narrative games, AI games, text-based games',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
