import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'
import Provider from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OffLegacy',
  description: 'Open-source Development Team in South Korea 🇰🇷',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0A0A0A] text-[#FAFAFA]`}>
        <Provider>
          {children}
          <Toaster position="top-right" closeButton />
        </Provider>
      </body>
    </html>
  )
}
