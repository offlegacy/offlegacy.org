import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import './globals.css'

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
      <body className={`${GeistSans.className} bg-[#050505] text-[#fff]`}>{children}</body>
    </html>
  )
}
