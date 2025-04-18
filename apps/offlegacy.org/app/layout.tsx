import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

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
        {children}
        <Toaster position="top-right" closeButton />
      </body>
    </html>
  )
}
