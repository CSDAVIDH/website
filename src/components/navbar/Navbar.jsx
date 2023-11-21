'use client'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'

import Set from '../../../public/images/set.png'
import RedSocial from './Redsocial'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='fixed  text-white top-0 w-[100%] z-20'>
        <div className='container mx-auto flex justify-between items-center px-10 py-4'>
          {/* <div className=' flex gap-1 items-center text-2xl font-bold'>
            <span className='italic'> Art</span>
            <FaHome />
            <span className='italic text-green-700'>Desing</span>
  </div>*/}
          <Link href="#">
            <Image
              src={Set}
              height={70}
              alt="set"
            /></Link>
          <div className='  bg-gray-600 hidden md:flex gap-8 py-2 px-20 tracking-wider text-gay-600 object-cover rounded-xl'>
            <Link href="#home" className='hover:text-green-700'>Home</Link>
            <Link href="#about" className='hover:text-green-700'>About</Link>
            <Link href="#product" className='hover:text-green-700'>Product</Link>
            <Link href="#categorie" className='hover:text-green-700'>Categories</Link>
            <Link href="#services" className='hover:text-green-700'>Services</Link>
            <Link href="#contact" className='hover:text-green-700'>Contact</Link>
          </div>
          <div>
            <Link href="#" >
              <button className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white'>Login</button>
            </Link>
          </div>
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} size={30} className='md:hidden block' />
          ) : (
            <FiMenu onClick={() => setToggle(!toggle)} size={30} className='md:hidden block' />
          )}
        </div>

        {/*Responsive Menu*/}
        <div className={`duration-300 md:hidden flex flex-col w-[50%] h-screen fixed bg-black/50  rounded-r-lg text-white top-[90px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
          <Link href="#home" className='hover:text-green-700 p-3'>Home</Link>
          <Link href="#about" className='hover:text-green-700 p-3'>About</Link>
          <Link href="#product" className='hover:text-green-700 p-3'>Product</Link>
          <Link href="#categorie" className='hover:text-green-700 p-3'>Categories</Link>
          <Link href="#services" className='hover:text-green-700 p-3'>Services</Link>
          <Link href="#contact" className='hover:text-green-700 p-3'>Contact</Link>

          <div className='flex flex-col gap-5 items-center mt-32'>
            <div className='bg-green-600 w-[100px] h-[3.5px]'></div>
            <div className='flex gap-5'>
              <RedSocial />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar