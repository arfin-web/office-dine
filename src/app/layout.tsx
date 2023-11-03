import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from '@/redux/providers'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'animate.css';

const poppins = Poppins({ subsets: ['latin'], weight: "400" })

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
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Providers>
            {children}
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
