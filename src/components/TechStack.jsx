import { SiAmd, SiBosch, SiCisco, SiDell, SiHuawei, SiIntel, SiMikrotik, SiUbiquiti } from 'react-icons/si'

const brands = [
  { name: 'AMD', icon: SiAmd },
  { name: 'Bosch', icon: SiBosch },
  { name: 'Cisco', icon: SiCisco },
  { name: 'Dell', icon: SiDell },
  { name: 'Huawei', icon: SiHuawei },
  { name: 'Intel', icon: SiIntel },
  { name: 'MikroTik', icon: SiMikrotik },
  { name: 'Ubiquiti', icon: SiUbiquiti }
]

const BrandCard = ({ brand }) => {
  const Icon = brand.icon

  return (
    <article className='rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center transition hover:-translate-y-1 hover:shadow-lg'>
      <div className='mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-900 shadow-sm'>
        <Icon size={28} />
      </div>
      <p className='mt-5 text-sm font-semibold text-slate-900'>{brand.name}</p>
    </article>
  )
}

const TechStack = () => {
  return (
    <section id='technologies' className='bg-white py-16'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl text-center mx-auto'>
          <p className='text-sm uppercase tracking-[0.35em] text-cyan-600'>Tecnología</p>
          <h2 className='mt-3 text-4xl font-semibold text-slate-900'>Marcas líderes con las que trabajamos</h2>
          <p className='mt-4 text-slate-600'>Alianzas estratégicas con proveedores reconocidos para garantizar calidad, soporte y disponibilidad global.</p>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5'>
          {brands.map((brand) => (
            <BrandCard key={brand.name} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
