import './globals.css'
import './success/page'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight:['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Newsletter',
  description: 'A newsletter sign-up page with success display',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
