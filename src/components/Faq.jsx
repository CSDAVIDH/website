const faqs = [
  {
    question: '¿Qué tipo de proyectos atiende Seseeit?',
    answer: 'Atendemos proyectos de telecomunicaciones, seguridad electrónica, cableado estructurado, data center, fibra óptica, redes empresariales y puesta a tierra para clientes corporativos e industriales.'
  },
  {
    question: '¿Ofrecen soporte técnico 24/7?',
    answer: 'Sí, brindamos soporte y mantenimiento preventivo y correctivo con atención continua para proteger sus sistemas críticos.'
  },
  {
    question: '¿Realizan certificación de cableado?',
    answer: 'Sí, ofrecemos certificación de cableado estructurado con equipos de prueba homologados y reportes técnicos completos.'
  },
  {
    question: '¿Trabajan con grandes marcas tecnológicas?',
    answer: 'Trabajamos con Cisco, Huawei, Ubiquiti, MikroTik, Hikvision, Bosch, Legrand, Schneider Electric y otros proveedores de primer nivel.'
  },
  {
    question: '¿Cuál es el proceso de contratación?',
    answer: 'Realizamos diagnóstico, diseño, cotización, implementación, pruebas, entrega y soporte técnico continuo para garantizar éxito en su proyecto.'
  }
]

const AccordionItem = ({ faq }) => (
  <details className='rounded-3xl border border-slate-200 bg-white p-6 shadow-sm'>
    <summary className='cursor-pointer text-lg font-semibold text-slate-900'>{faq.question}</summary>
    <p className='mt-4 text-slate-600 leading-7'>{faq.answer}</p>
  </details>
)

const Faq = () => {
  return (
    <section id='faq' className='bg-slate-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='max-w-3xl text-center mx-auto'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-600'>FAQ</p>
          <h2 className='mt-3 text-4xl font-semibold text-slate-900'>Preguntas frecuentes</h2>
          <p className='mt-4 text-slate-600'>Respuestas claras para resolver dudas de nuestros clientes corporativos.</p>
        </div>
        <div className='mt-12 space-y-4'>
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
