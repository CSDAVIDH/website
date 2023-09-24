import './globals.css'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Product from '@/components/product/Product'
import Categorie from '@/components/category/Categorie'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Seseeit',
  description: 'Sitio Corporativo',

}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Hero />
        <Product/>
        <Categorie/>
        {children}
      </body>
    </html>
  )
}
