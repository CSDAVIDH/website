import Link from 'next/link'
import RedSocial from '../navbar/Redsocial'

const quickLinks = [
  { href: '#services', label: 'Servicios' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#about', label: 'Sobre nosotros' },
  { href: '#contact', label: 'Contacto' }
]

const Footer = () => {
  return (
    <footer className='bg-slate-950 text-slate-300'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        <div className='grid gap-8 lg:grid-cols-3'>
          <div>
            <h2 className='text-xl font-semibold text-white'>Seseeit Srl</h2>
            <p className='mt-4 text-slate-400'>Soluciones de ingeniería y telecomunicaciones con foco en seguridad, proyectos corporativos y tecnología de alto rendimiento.</p>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white'>Enlaces rápidos</h3>
            <ul className='mt-4 space-y-3 text-slate-400'>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className='hover:text-white'>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white'>Síguenos</h3>
            <div className='mt-4 flex items-center gap-4 text-cyan-300'>
              <RedSocial />
            </div>
          </div>
        </div>

        <div className='mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500'>
          © {new Date().getFullYear()} Seseeit Srl. Todos los derechos reservados.
          <div className='mt-2 text-slate-400'>
           <span className='font-medium text-white'>@dhcs.</span><span className='font-medium text-cyan-300'>dev</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
