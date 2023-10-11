import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, Footer, NavBar } from '@/components'
import { Toaster } from 'react-hot-toast'
import AuthContext from '../context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(`https://eshop-blue.vercel.app`),
  title: {
    default: 'E-Shop',
    template: `%s | E-shop`
  },
  description: 'Điện thoại, Laptop, Tablet, Phụ kiện chính hãng giá tốt nhất',
  verification: {
    google: "google-site-verification=123321123"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-slate-700`}>
        <AuthContext>
          <div className='flex flex-col min-h-screen'>
            <Toaster
              toastOptions={{
                style: {
                  background: 'rgb(51 65 85',
                  color: '#fff'
                }
              }}
            />
            <NavBar />
            <main className='flex-grow bg-gray-200'>
              <Container>
                {children}
              </Container>
            </main>
            <Footer />
          </div>
        </AuthContext>
      </body>
    </html>
  )
}
