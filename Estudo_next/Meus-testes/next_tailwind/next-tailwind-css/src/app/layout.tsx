'use client'

import { checkIsRoutePublic } from '@/contexts/ check-is-route-public'
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname =  usePathname();

  const isPublicPage = checkIsRoutePublic(pathname!)
  console.log(isPublicPage)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
