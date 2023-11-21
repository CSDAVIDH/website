'use client'
import React from 'react'
import Button from './Button'
import RedSocial from './Redsocial'


const Hero = () => {
  return (
    <div id='home' className='bg-[url("/images/4.jpg")] h-screen bg-cover bg-no-repeat bg-center bg-fixed flex items-center relative'>
      <div className='absolute inset-0 bg-black/50'></div>
      <div className='container mx-auto px-4 z-10'>
        <div className='text-center text-white flex flex-col gap-[20px] md:gap-[40px]'>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'>Engineer solution</h1>
          </div>
          <div>
            <h1 className=' text-2xl md:text-3xl lg:text-5xl font-semibold tracking-wider'> <span className='text-green-600 '> Aask for </span> information </h1>
          </div>
          <div className='mx-auto bg-green-700 h-[3px] w-[100px]'></div>
          <div>
            <p className='text-ms md:text-xl text-gray-300 tracking-widest'>consulting, provision and installation of electronic equipmen</p>
          </div>
          <div className=''> <Button link="#" text="Explore Products" /></div>
        </div>
      </div>
      <div className='hidden absolute right-20 top-32 z-10 md:flex flex-col gap-5 items-center'>
        <div className='bg-green-600 w-[1.8px] h-[250px]'></div>
        <RedSocial />
      </div>
    </div>
  )
}

export default Hero