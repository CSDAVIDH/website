import React from 'react'
import Headline from '../product/Headline'
import CategorieSlinder from './CategorieSlider'


const Categorie = () => {
  return (
    <section id='categorie' className='bg-slate-500  text-white min-h-[680px] py-16'>
      <div className='container mx-auto h-[680px]'>
        <Headline title="Categorie"/>
        <CategorieSlinder/>
      </div>
    </section>
  )
}

export default Categorie