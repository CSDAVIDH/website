import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '@/components/navbar/Hero'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seseeit',
  description: 'Sitio Coorporativo',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        {children}
      </body>
    </html>
  )
}
