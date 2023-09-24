import React from 'react'
import Headline from './Headline'
import Card from './Card'

const Product = () => {
  return (
    <section id='product' className=' max-w-[1640px] mx-auto p-4 py-12'>
      <Headline title="Products" />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 py-16'>
        <Card image="/images/2.jpg" title="Red de datos" />
        <Card image="/images/3.jpg" title="2" />
        <Card image="/images/4.jpg" title="2" />
        <Card image="/images/2.jpg" title="Red de datos" />
        <Card image="/images/3.jpg" title="2" />
        <Card image="/images/4.jpg" title="2" />
        <Card image="/images/2.jpg" title="Red de datos" />
        <Card image="/images/3.jpg" title="2" />
        <Card image="/images/4.jpg" title="2" />
      </div>
    </section>
  )
}

export default Product