import Headline from '../product/Headline'
import { FaBolt, FaCamera, FaFingerprint, FaNetworkWired, FaProjectDiagram, FaServer, FaShieldAlt, FaFireAlt } from 'react-icons/fa'

const services = [
  {
    icon: FaNetworkWired,
    title: 'Redes de telecomunicaciones',
    description: 'Diseño e instalación de redes LAN, WAN y WiFi empresarial con fibra óptica y cableado estructurado.',
    benefit: 'Conectividad estable y escalable para operaciones críticas.'
  },
  {
    icon: FaShieldAlt,
    title: 'Seguridad electrónica',
    description: 'Sistemas integrados de CCTV, alarmas y control de accesos para protección total.',
    benefit: 'Monitoreo activo y respuesta rápida ante incidentes.'
  },
  {
    icon: FaCamera,
    title: 'CCTV y videovigilancia',
    description: 'Cámaras IP, grabación y analítica avanzada para supervisión corporativa.',
    benefit: 'Visibilidad permanente con almacenamiento seguro.'
  },
  {
    icon: FaFireAlt,
    title: 'Alarmas contra robo e incendio',
    description: 'Sistemas confiables para detección temprana y protección de instalaciones.',
    benefit: 'Seguridad continua para personas y activos.'
  },
  {
    icon: FaFingerprint,
    title: 'Control de acceso',
    description: 'Soluciones biométricas y tarjetas para gestionar permisos y flujos de personas.',
    benefit: 'Accesos seguros en áreas restringidas.'
  },
  {
    icon: FaServer,
    title: 'Data Center',
    description: 'Diseño e instalación de infraestructura para centros de datos con alta disponibilidad.',
    benefit: 'Entornos resilientes para servicios críticos.'
  },
  {
    icon: FaBolt,
    title: 'Puesta a tierra',
    description: 'Análisis y diseño de sistemas de aterrizaje para protección y continuidad operacional.',
    benefit: 'Reducción de riesgos eléctricos y fallas.'
  },
  {
    icon: FaProjectDiagram,
    title: 'Consultoría tecnológica',
    description: 'Asesoría estratégica para proyectos de infraestructura y modernización corporativa.',
    benefit: 'Decisiones basadas en experiencia técnica y resultados.'
  }
]

const ServiceCard = ({ service }) => {
  const Icon = service.icon

  return (
    <article className='rounded-3xl border border-slate-800/60 bg-slate-900/90 p-8 shadow-xl transition hover:-translate-y-1 hover:border-cyan-500/40'>
      <div className='inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-cyan-400'>
        <Icon size={36} />
      </div>
      <h3 className='mt-6 text-2xl font-semibold text-white'>{service.title}</h3>
      <p className='mt-4 text-slate-300 leading-7'>{service.description}</p>
      <p className='mt-6 text-sm font-semibold text-cyan-300'>{service.benefit}</p>
      <button className='mt-8 inline-flex items-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400'>Solicitar cotización</button>
    </article>
  )
}

const Services = () => {
  return (
    <section id='services' className='bg-slate-950 text-white py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <Headline title='Servicios' />
        <p className='mt-6 text-center text-slate-300 max-w-3xl mx-auto'>Soluciones completas para redes, seguridad, data centers y proyectos tecnológicos de alto desempeño.</p>

        <div className='grid gap-8 mt-12 md:grid-cols-2 xl:grid-cols-4'>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services