const stats = [
  { value: '+120', label: 'Empresas atendidas' },
  { value: '+350', label: 'Proyectos ejecutados' },
  { value: '10+', label: 'Años de experiencia' },
  { value: '24/7', label: 'Soporte técnico' }
]

const StatCard = ({ value, label }) => (
  <div className='rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center shadow-sm'>
    <p className='text-4xl font-semibold text-blue-900'>{value}</p>
    <p className='mt-4 text-sm text-slate-600 uppercase tracking-[0.25em]'>{label}</p>
  </div>
)

const StatsBanner = () => {
  return (
    <section className='bg-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBanner
