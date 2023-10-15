import { Providers } from '@/redux/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import 'animate.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OfficeDine',
  description: 'Your Office Foodie Friend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
