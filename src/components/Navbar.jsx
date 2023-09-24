'use client'
import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className='fixed bg-white top-0 w-[100%] z-20 shadow-md'>
        <div className='container mx-auto flex justify-between items-center px-4 py-4'>
          {/* <div className=' flex gap-1 items-center text-2xl font-bold'>
            <span className='italic'> Art</span>
            <FaHome />
            <span className='italic text-green-700'>Desing</span>
  </div>*/}
          <Image
            src="/images/set.png"
            width={500 / 5}
            height={500 / 5}
            alt="Picture of the author"
          />

          <div className='hidden md:flex gap-10 tracking-wider text-gay-600'>
            <Link href="/" className='hover:text-green-700'>Home</Link>
            <Link href="/" className='hover:text-green-700'>Product</Link>
            <Link href="/" className='hover:text-green-700'>Categories</Link>
            <Link href="/" className='hover:text-green-700'>Services</Link>
          </div>
          <div>
            <button className='hidden md:block border border-green-600 px-4 py-1 rounded-md text-green-600 hover:bg-green-600 hover:text-white'>Contact</button>
          </div>
          {toggle ? (
            <AiOutlineClose onClick={() => setToggle(!toggle)} size={30} className='md:hidden block' />
          ) : (
            <FiMenu onClick={() => setToggle(!toggle)} size={30} className='md:hidden block' />
          )}
        </div>
        {/*Responsive Menu*/}
        <div className={`duration-300 md:hidden flex flex-col w-[50%] h-screen fixed bg-black/50  rounded-r-lg text-white top-[110px] ${toggle ? `left-[0]` : `left-[-100%]`}`}>
          <Link href="/" className='hover:text-green-700 p-3'>Home</Link>
          <Link href="/" className='hover:text-green-700 p-3'>Product</Link>
          <Link href="/" className='hover:text-green-700 p-3'>Categories</Link>
          <Link href="/" className='hover:text-green-700 p-3'>Services</Link>

          <div className='flex flex-col gap-5 items-center mt-32'>
            <div className='bg-green-600 w-[100px] h-[3.5px]'></div>
            <div className='flex gap-5'>
              <Link href="https://www.facebook.com/SESEEIT/?locale=es_LA" target='_blank' ><BsFacebook size={20} className='text-green-600  hover:translate-y-1.5 duration-300' /></Link>
              <Link href="https://www.twitter.com" target='_blank' ><BsTwitter size={20} className='text-green-600 hover:translate-y-1.5 duration-300' /></Link>
              <Link href="https://www.instagram.com" target='_blank' ><BsInstagram size={20} className='text-green-600 hover:translate-y-1.5 duration-300' /></Link>
              <Link href="https://www.linkedin.com" target='_blank' ><BsLinkedin size={20} className='text-green-600  hover:translate-y-1.5 duration-300' /></Link>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar