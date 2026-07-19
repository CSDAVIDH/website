'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMenu, FiPhone } from 'react-icons/fi'

import RedSocial from './Redsocial'
import Set from '../../../public/images/set.png'

const navSections = [
  { href: '#services', label: 'Servicios' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#technologies', label: 'Tecnologías' },
  { href: '#process', label: 'Proceso' },
  { href: '#about', label: 'Nosotros' },
  { href: '#contact', label: 'Contacto' }
]

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-30 border-b border-slate-800/20 bg-slate-950/95 backdrop-blur-md text-white'>
        <div className='container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4'>
          <Link href='#home' aria-label='Inicio'>
            <div className='flex items-center gap-3'>
              <div className='relative h-14 w-14'>
                <Image
                  src={Set}
                  alt='Logo Seseeit'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
          </Link>

          <nav className='hidden items-center gap-8 md:flex'>
            {navSections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className='text-sm uppercase tracking-[0.25em] text-slate-200 transition hover:text-cyan-300'
              >
                {section.label}
              </Link>
            ))}
          </nav>

          <div className='flex items-center gap-4'>
            <Link
              href='#contact'
              className='hidden rounded-full border border-cyan-500 bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 md:inline-flex'
            >
              Contáctanos
            </Link>

            <button
              type='button'
              onClick={() => setToggle(!toggle)}
              className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 text-slate-100 transition hover:border-cyan-500 hover:text-cyan-300 md:hidden'
              aria-label={toggle ? 'Cerrar menú' : 'Abrir menú'}
            >
              {toggle ? <AiOutlineClose size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-30 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${toggle ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setToggle(false)} />

      <aside className={`fixed inset-y-0 left-0 z-40 w-72 max-w-[90vw] sm:w-80 transform rounded-r-3xl border-r border-slate-800 bg-slate-950/98 p-6 shadow-2xl shadow-black/50 transition-transform duration-300 ease-in-out ${toggle ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='mb-8 flex items-center justify-between rounded-3xl bg-slate-900/95 px-4 py-3 shadow-inner border border-slate-800'>
          <span className='text-xl font-semibold text-white'>Menú</span>
          <button
            type='button'
            onClick={() => setToggle(false)}
            className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-slate-100 transition hover:bg-cyan-500 hover:text-slate-950'
            aria-label='Cerrar menú'
          >
            <AiOutlineClose size={22} />
          </button>
        </div>

        <div className='flex flex-col gap-4'>
          {navSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className='rounded-2xl bg-slate-900/90 px-4 py-3 text-sm uppercase tracking-[0.25em] text-white transition hover:bg-cyan-500/20 hover:text-cyan-300'
              onClick={() => setToggle(false)}
            >
              {section.label}
            </Link>
          ))}
        </div>

        <div className='mt-10 rounded-3xl border border-cyan-500/30 bg-cyan-500/10 p-4'>
          <Link
            href='#contact'
            onClick={() => setToggle(false)}
            className='inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400'
          >
            Contáctanos
          </Link>
          <div className='mt-4 flex gap-4'>
            <RedSocial />
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar