'use client'
import { FaWhatsapp } from 'react-icons/fa'
import { GiVibratingSmartphone } from 'react-icons/gi'
import { MdAccessTime, MdAttachEmail, MdLocationCity } from 'react-icons/md'
import Formulario from './Formulario'
import Headline from '../product/Headline'
import Maps from './Maps'

const contactItems = [
  {
    icon: MdLocationCity,
    title: 'Dirección',
    description: 'Av. Landaeta C./ Rosas No. 4516, La Paz'
  },
  {
    icon: GiVibratingSmartphone,
    title: 'Teléfono',
    description: '(+591) 71558038'
  },
  {
    icon: MdAttachEmail,
    title: 'Correo',
    description: 'info.seseeit@gmail.com'
  },
  {
    icon: MdAccessTime,
    title: 'Horario',
    description: 'Lun - Vie: 08:00 - 18:00'
  }
]

const ContactCard = ({ item }) => {
  const Icon = item.icon

  return (
    <div className='rounded-3xl bg-slate-800/70 p-5'>
      <div className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300'>
        <Icon size={24} />
      </div>
      <h3 className='mt-4 text-lg font-semibold text-white'>{item.title}</h3>
      <p className='mt-2 text-slate-300'>{item.description}</p>
    </div>
  )
}

const Contact = () => {
  return (
    <section id='contact' className='bg-slate-950 text-white py-20'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl mx-auto text-center'>
          <Headline title='Contacto' />
          <p className='mt-6 text-slate-300'>Hable con un asesor técnico y reciba una propuesta personalizada para su proyecto de ingeniería.</p>
        </div>

        <div className='mt-12 grid gap-8 lg:grid-cols-2'>
          <div className='rounded-3xl border border-slate-800/70 bg-slate-900/90 p-8 shadow-2xl'>
            <div className='grid gap-4 sm:grid-cols-2'>
              {contactItems.map((item) => (
                <ContactCard key={item.title} item={item} />
              ))}
            </div>

            <div className='mt-8 rounded-3xl bg-slate-800/70 p-6'>
              <p className='uppercase tracking-[0.25em] text-cyan-300'>WhatsApp</p>
              <a href='https://wa.me/59171558038' target='_blank' rel='noreferrer' className='mt-3 inline-flex items-center gap-3 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400'>
                <FaWhatsapp /> Chat inmediato
              </a>
            </div>
          </div>

          <div className='rounded-3xl border border-slate-800/70 bg-slate-900/90 p-8 shadow-2xl'>
            <h3 className='text-2xl font-semibold text-white'>Solicitud de cotización</h3>
            <p className='mt-4 text-slate-400'>Complete el formulario y nuestro equipo técnico le contactará con la mejor propuesta.</p>
            <div className='mt-8'>
              <Formulario />
            </div>
          </div>
        </div>

        <div className='mt-12 rounded-3xl border border-slate-800/70 bg-slate-900/90 p-8 shadow-2xl'>
          <h3 className='text-2xl font-semibold text-white'>Ubicación</h3>
          <p className='mt-3 text-slate-400'>Encuéntrenos en La Paz, Bolivia. Atención a proyectos nacionales e internacionales.</p>
          <div className='mt-6 h-64 sm:h-80 lg:h-[420px] rounded-3xl overflow-hidden border border-slate-800'>
            <Maps />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact