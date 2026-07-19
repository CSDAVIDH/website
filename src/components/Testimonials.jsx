const testimonials = [
  {
    name: 'María Vásquez',
    role: 'Directora de Operaciones',
    company: 'Constructora Andes',
    quote: 'Seseeit elevó nuestra red empresarial y entregó un sistema de seguridad confiable en tiempo récord.'
  },
  {
    name: 'Carlos Mendoza',
    role: 'Gerente de Tecnología',
    company: 'Hospital San Rafael',
    quote: 'La implementación del data center y la certificación del cableado superaron nuestras expectativas.'
  },
  {
    name: 'Laura Pérez',
    role: 'Jefa de Proyectos',
    company: 'Hotel Plaza',
    quote: 'Su equipo combinó ingeniería, calidad y soporte 24/7 en una sola solución.'
  }
]

const TestimonialCard = ({ testimonial }) => (
  <article className='rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm'>
    <p className='text-slate-700 leading-8'>“{testimonial.quote}”</p>
    <div className='mt-8'>
      <p className='font-semibold text-slate-900'>{testimonial.name}</p>
      <p className='text-sm text-slate-500'>{testimonial.role} – {testimonial.company}</p>
    </div>
  </article>
)

const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-white py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl text-center mx-auto'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-600'>Testimonios</p>
          <h2 className='mt-3 text-4xl font-semibold text-slate-900'>Clientes que confían en nuestra ingeniería</h2>
          <p className='mt-4 text-slate-600'>Experiencias reales de proyectos corporativos con resultados medibles y alta satisfacción.</p>
        </div>
        <div className='mt-12 grid gap-8 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
