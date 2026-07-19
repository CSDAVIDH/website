'use client'
import Button from './Button'

const heroHighlights = [
  { label: 'Clientes corporativos', value: '+120' },
  { label: 'Proyectos ejecutados', value: '+350' },
  { label: 'Soporte técnico', value: '24/7' }
]

const Hero = () => {
  return (
    <section id='home' className='relative overflow-hidden bg-[url("/images/4.jpg")] bg-cover bg-center bg-local md:bg-fixed min-h-screen'>
      <div className='absolute inset-0 bg-slate-950/90'></div>

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10'>
        <div className='grid gap-12 lg:grid-cols-2 lg:items-center'>
          <div className='text-white'>
            <span className='inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm uppercase tracking-[0.35em] text-cyan-200'>Ingeniería & Telecomunicaciones</span>
            <h1 className='mt-8 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl'>Soluciones tecnológicas corporativas que elevan tu infraestructura.</h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-200'>Implementamos redes, seguridad electrónica y centros de datos con altos estándares de calidad, confiabilidad y soporte continuo para empresas e instituciones.</p>

            <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
              <Button link='#contact' text='Solicitar cotización' />
              <a href='#projects' className='inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-cyan-500 hover:bg-cyan-600/20'>Ver proyectos</a>
            </div>

            <div className='mt-12 grid gap-4 sm:grid-cols-3'>
              {heroHighlights.map((item) => (
                <div key={item.label} className='rounded-3xl border border-white/10 bg-white/5 p-5'>
                  <p className='text-sm text-slate-300'>{item.label}</p>
                  <p className='mt-3 text-3xl font-semibold text-white'>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-2xl backdrop-blur-xl'>
            <div className='space-y-5'>
              <div className='rounded-3xl bg-slate-900/90 p-6'>
                <h2 className='text-xl font-semibold text-white'>Servicios clave</h2>
                <p className='mt-3 text-slate-300'>Redes, CCTV, alarmas, data center y cableado para proyectos de alta demanda.</p>
              </div>

              <div className='grid gap-4'>
                <div className='rounded-3xl bg-slate-900/90 p-5'>
                  <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>Estrategia</p>
                  <p className='mt-2 text-slate-200'>Soluciones hechas a medida con énfasis en seguridad y rendimiento.</p>
                </div>
                <div className='rounded-3xl bg-slate-900/90 p-5'>
                  <p className='text-sm uppercase tracking-[0.3em] text-cyan-300'>Tecnología</p>
                  <p className='mt-2 text-slate-200'>Integración con marcas líderes y estándares internacionales.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero