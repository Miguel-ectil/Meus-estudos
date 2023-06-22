'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import PrivateRoute from '@/contexts/privateRoute'
import { APP_ROUTES } from '../constants/app-routes';

const inter = Inter({ subsets: ['latin'] })

const checkIsRoutePublic = (asPath: any) => {
  const appPublicRoutes = Object.values(APP_ROUTES.public);

  return appPublicRoutes.includes(asPath);
};

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
      <body className={inter.className}>
        {isPublicPage && children}

        {!isPublicPage && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}
