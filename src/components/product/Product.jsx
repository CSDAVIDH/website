import React from 'react'
import Headline from './Headline'
import Card from './Card'

const Product = () => {
  return (
    <section id='product' className='max-w-[1640px] mx-auto p-4 py-16'>

      <Headline title="Products" />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16'>
        <Card image="/icons/computacion.png" title="Computing" />
        <Card image="/icons/megafono.png" title="Neighborhood electronic security" />
        <Card image="/icons/alarma.png" title="Electronic security" />
        <Card image="/icons/cctv.png" title="Video surveillance security" />
        <Card image="/icons/enrutador.png" title=" FTTH & HFC fiber optic network" />
        <Card image="/icons/red.png" title="Data network" />
        <Card image="/icons/energia.png" title="Energy solutions" />
        <Card image="/icons/torre.png" title="Station telephone" />
        <Card image="/icons/consultor.png" title="Architectural consulting & planning" />
      </div>

    </section>
  )
}

export default Product

