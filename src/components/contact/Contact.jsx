'use client'
import React from 'react'
import Headline from '../product/Headline'
import { MdLocationCity, MdAttachEmail } from 'react-icons/md'
import { GiVibratingSmartphone } from 'react-icons/gi'
import { PiGoogleChromeLogoDuotone } from 'react-icons/pi'
import Formulario from './Formulario'
import Maps from './Maps'



const Contact = () => {
  return (
    <section id='contact' className='bg-slate-700  text-white min-h-[520px] py-16'>
      <div className='container mx-auto h-fit'>
        <div>
          <Headline title="Contact" />
        </div>
        {/*contenedor 1 grid*/}
        {/*contendor uno 4 tarjetas grid*/}
        <div className='text-white py-4  gap-4 grid md:grid-cols-4 sm:grid-cols-1 md:grid-rows-1 sm:grid-rows-4 '>

          <div className='rounded-lg max-h-[160px] md:max-h-[200px] w-full flex flex-col items-center text-center py-4 md:shadow-2xl'>
            <MdLocationCity size={60} className='text-green-600 ' />
            <h1 className='text-2xl '>Address</h1>
            <p>Av./ Landaeta C./ Rosas <br /> No./4516 Ciudad de Lapaz</p>
          </div>

          <div className='rounded-lg w-full max-h-[160px] md:max-h-[200px] flex flex-col items-center text-center py-4 md:shadow-2xl'>
            <GiVibratingSmartphone size={60} className='text-green-600 ' />
            <h1 className='text-2xl ms:text- '>Contact</h1>
            <p>(+591) 71558038 <br />
              71525711 - 71564192</p>
          </div>

          <div className=' rounded-lg w-full max-h-[160px] md:max-h-[200px] flex flex-col items-center text-center py-4 md:shadow-2xl'>
            <MdAttachEmail size={60} className='text-green-600 ' />
            <h1 className='text-2xl '>Email Address</h1>
            <p>info.seseeit@gmail.com <br /> melina.seseeit@gmail.com</p>
          </div>

          <div className=' rounded-lg w-full max-h-[160px] md:max-h-[200px] flex flex-col items-center text-center py-4 md:shadow-2xl'>
            <PiGoogleChromeLogoDuotone size={60} className='text-green-600 ' />
            <h1 className='text-2xl '>WebSite</h1>
            <p>www.seseeit.com</p>
          </div>
        </div>

        {/* contendor dos 2 grid*/}
        <div className='grid md:grid-cols-2  md:grid-rows-1 sm:grid-rows-2 gap-4 py-4 px-4'>
          
          <div className='my-4 gap-4 lg:py-16 px-8 mx-auto w-full rounded-md'>
            <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Contact Us</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <Formulario />
          </div>
          <div className=' my-4 gap-4 lg:py-16 px-8 mx-auto h-max '>
            <h2 className='mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white'>Maps</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            <Maps />
          </div>

        </div>

        

        
      </div>
    </section >
  )
}

export default Contact