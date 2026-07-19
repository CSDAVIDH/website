import Headline from '../product/Headline'

const facts = [
  { value: '10+', label: 'Años de experiencia' },
  { value: '120+', label: 'Proyectos completados' },
  { value: '24/7', label: 'Soporte técnico' },
  { value: '100%', label: 'Satisfacción del cliente' }
]

const StatCard = ({ value, label }) => (
  <div className='bg-slate-800/80 rounded-2xl p-6 text-center'>
    <span className='block text-4xl font-bold text-green-500'>{value}</span>
    <span className='block mt-2 text-slate-300'>{label}</span>
  </div>
)

const About = () => {
  return (
    <section id='about' className='bg-slate-700 text-white w-full py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <Headline title='About' />

        <div className='grid md:grid-cols-2 gap-8 py-10'>
          <div className='bg-black/60 rounded-3xl p-8 shadow-xl border border-white/10'>
            <div className='inline-flex items-center gap-3 bg-green-600/20 px-6 py-3 rounded-full text-sm uppercase tracking-[0.3em] text-green-200'>
              Sobre Seseeit Srl.
            </div>

            <h2 className='mt-8 text-3xl font-semibold tracking-tight'>Soluciones electrónicas y de redes para empresas y hogares</h2>
            <p className='mt-6 text-slate-300 leading-8'>Seseeit Srl ofrece diseño, instalación y mantenimiento de sistemas de seguridad electrónica, telecomunicaciones y redes de datos. Trabajamos con soluciones integrales para proteger tu infraestructura y mejorar la conectividad.</p>

            <ul className='mt-8 space-y-4 text-slate-300'>
              <li>• Sistemas de vigilancia CCTV y alarmas inteligentes</li>
              <li>• Instalación de fibra óptica FTTH/HFC y redes de datos</li>
              <li>• Seguridad residencial, comercial e industrial</li>
              <li>• Consultoría técnica y soporte personalizado</li>
            </ul>
          </div>

          <div className='bg-black/60 rounded-3xl p-8 shadow-xl border border-white/10 flex flex-col justify-between'>
            <div>
              <h3 className='text-2xl font-semibold'>Nuestra misión</h3>
              <p className='mt-4 text-slate-300 leading-8'>Brindar soluciones confiables, eficientes y accesibles que ayuden a nuestros clientes a operar con mayor seguridad y rendimiento tecnológico.</p>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-10'>
              {facts.map((fact) => (
                <StatCard key={fact.label} value={fact.value} label={fact.label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About