import React from 'react'
import Headline from '../product/Headline'
import CategorieSlider from './CategorieSlider'

const Categorie = () => {
  return (
    <section id='categories' className='bg-slate-500 text-white min-h-[520px] md:min-h-[680px] py-16'>
      <div className='container mx-auto'>
        <Headline title="Categories" />
        <CategorieSlider />
      </div>
    </section>
  )
}

export default Categorie