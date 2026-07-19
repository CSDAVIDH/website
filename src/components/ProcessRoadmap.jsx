import { BiCalculator, BiCheckShield, BiPaint, BiSearchAlt2, BiSupport, BiTestTube, BiWrench } from 'react-icons/bi'

const steps = [
  { title: 'Diagnóstico', description: 'Recopilamos información técnica y analizamos sus necesidades de infraestructura.', icon: BiSearchAlt2 },
  { title: 'Diseño', description: 'Creamos arquitecturas seguras y escalables con estándares internacionales.', icon: BiPaint },
  { title: 'Cotización', description: 'Presentamos una propuesta clara con costos, tiempos y entregables.', icon: BiCalculator },
  { title: 'Implementación', description: 'Instalamos soluciones con supervisión técnica y gestión de calidad.', icon: BiWrench },
  { title: 'Pruebas', description: 'Validamos cada sistema antes de su puesta en marcha.', icon: BiTestTube },
  { title: 'Entrega', description: 'Documentamos el proyecto y entregamos con soporte técnico incluido.', icon: BiCheckShield },
  { title: 'Soporte', description: 'Acompañamos su operación con mantenimiento preventivo y correctivo.', icon: BiSupport }
]

const StepCard = ({ step }) => {
  const Icon = step.icon

  return (
    <article className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-900 text-white'>
        <Icon size={24} />
      </div>
      <h3 className='mt-6 text-xl font-semibold text-slate-900'>{step.title}</h3>
      <p className='mt-3 text-slate-600 leading-7'>{step.description}</p>
    </article>
  )
}

const ProcessRoadmap = () => {
  return (
    <section id='process' className='bg-slate-50 py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl text-center mx-auto'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-600'>Proceso de trabajo</p>
          <h2 className='mt-3 text-4xl font-semibold text-slate-900'>Metodología clara para resultados confiables</h2>
          <p className='mt-4 text-slate-600'>Un flujo de trabajo estructurado que reduce riesgos y mejora tiempos de entrega.</p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-3'>
          {steps.map((step) => (
            <StepCard key={step.title} step={step} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessRoadmap
