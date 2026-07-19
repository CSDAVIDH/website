'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const slides = [
  {
    title: 'Seguridad CCTV',
    description: 'Cámaras IP y grabación continua para vigilancia confiable.',
    image: '/icons/cctv.png'
  },
  {
    title: 'Control de acceso',
    description: 'Sistemas inteligentes para gestionar el ingreso de personal y visitantes.',
    image: '/icons/alarma.png'
  },
  {
    title: 'Redes de fibra',
    description: 'Instalación de FTTH y HFC con conexión de alta velocidad.',
    image: '/icons/enrutador.png'
  },
  {
    title: 'Redes corporativas',
    description: 'Cableado estructurado y diseño de redes seguras para tu empresa.',
    image: '/icons/red.png'
  }
]

const CategorieSlider = () => {
  return (
    <div className='py-10'>
      <Swiper
        modules={[Navigation]}
        navigation
        loop
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className='bg-black/60 rounded-3xl p-8 min-h-[260px] flex flex-col justify-between border border-white/10 shadow-xl'>
              <div className='flex items-center gap-4'>
                <img src={slide.image} alt={slide.title} className='w-16 h-16 object-contain' />
                <h3 className='text-2xl font-semibold'>{slide.title}</h3>
              </div>
              <p className='mt-6 text-slate-300 leading-7'>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CategorieSlider