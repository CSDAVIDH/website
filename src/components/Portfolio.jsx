const categories = ['Telecomunicaciones', 'CCTV', 'Alarmas', 'Cableado', 'Data Center', 'Fibra', 'Redes']

const projects = [
  {
    title: 'Centro de datos corporativo',
    category: 'Data Center',
    description: 'Diseño e implementación de infraestructura crítica con redundancia N+1.',
    client: 'Hospital Regional'
  },
  {
    title: 'Red empresarial WiFi y cableado',
    category: 'Redes',
    description: 'Cobertura de alta velocidad para oficinas y zonas comunes en campus universitario.',
    client: 'Universidad Privada'
  },
  {
    title: 'Sistema CCTV integral',
    category: 'CCTV',
    description: 'Monitoreo activo con cámaras IP y grabación centralizada 24/7.',
    client: 'Centro comercial'
  },
  {
    title: 'Control de acceso biométrico',
    category: 'Alarmas',
    description: 'Gestión segura de accesos en edificios corporativos y áreas restringidas.',
    client: 'Banco Multinacional'
  },
  {
    title: 'Certificación de ciclo de cableado',
    category: 'Cableado',
    description: 'Pruebas y certificación de cableado estructurado con reporte técnico.',
    client: 'Constructora'
  },
  {
    title: 'Implementación de fibra óptica',
    category: 'Fibra',
    description: 'Enlaces de fibra FTTH/HFC con soporte para servicios críticos y video vigilancia.',
    client: 'Hotel Premium'
  }
]

const SectionHeader = ({ overline, title, description }) => (
  <div className='max-w-3xl text-center mx-auto'>
    <p className='text-sm uppercase tracking-[0.35em] text-cyan-600'>{overline}</p>
    <h2 className='mt-3 text-4xl font-semibold text-slate-900'>{title}</h2>
    <p className='mt-4 text-slate-600'>{description}</p>
  </div>
)

const CategoryPill = ({ label }) => (
  <button className='rounded-full border border-slate-300 bg-white px-5 py-2 text-sm text-slate-700 transition hover:bg-blue-900 hover:text-white'>
    {label}
  </button>
)

const ProjectCard = ({ title, category, client, description }) => (
  <article className='rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md'>
    <div className='flex items-center justify-between gap-4'>
      <span className='inline-flex rounded-full bg-blue-900/10 px-4 py-2 text-sm font-semibold text-blue-900'>{category}</span>
      <span className='text-sm text-slate-500'>{client}</span>
    </div>
    <h3 className='mt-6 text-2xl font-semibold text-slate-900'>{title}</h3>
    <p className='mt-4 text-slate-600 leading-7'>{description}</p>
    <button className='mt-8 inline-flex items-center rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800'>Ver caso</button>
  </article>
)

const Portfolio = () => {
  return (
    <section id='projects' className='bg-slate-50 py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <SectionHeader
          overline='Proyectos'
          title='Casos de éxito en ingeniería corporativa'
          description='Proyectos ejecutados para hospitales, bancos, hoteles, universidades y grandes empresas con estándares internacionales.'
        />

        <div className='mt-10 flex flex-wrap justify-center gap-3'>
          {categories.map((category) => (
            <CategoryPill key={category} label={category} />
          ))}
        </div>

        <div className='mt-12 grid gap-8 md:grid-cols-2'>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
