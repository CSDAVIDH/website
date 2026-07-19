import './globals.css'
import { Inter, Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-primary' })

export const metadata = {
  title: 'Seseeit Srl - Ingeniería y Telecomunicaciones',
  description: 'Soluciones corporativas de redes, seguridad electrónica, cableado estructurado y data centers para empresas e instituciones.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={`${inter.className} ${poppins.className} bg-slate-100 text-slate-900`}>
        {children}
      </body>
    </html>
  )
}
