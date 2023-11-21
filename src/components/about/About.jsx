import React from 'react'
import Headline from '../product/Headline'



const About = () => {
  return (
    <section id='about' className=' bg-slate-700 text-white w-full min-h-[680px] py-16'>
      <div className='container mx-auto h-[680px]'>
        <Headline title="About" />
        <div className='grid md:grid-cols-2 sm:grid-rows-1 md:grid-rows-2 py-8 gap-8 px-4'>
          <div className='bg-black/50 w-full  '>
            
            <div className='bg-red-50 flex px-10 py-2 mx-auto h-fit w-auto sm:text-xl md:text-3xl'>
              <h1 className=' font-serif '> SOBRE </h1>
              <h1 className='font-mono px-2'> Seseeit Srl.</h1>
            </div>

            <div className='bg-slate-300 flex px-2 py-4'>
              <h2 className='px-28'>hola</h2>
            </div>
          </div>
          <div className='bg-black/50 w-full' >
            <div className=' text-2xl'> Sobre Seseeit </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About