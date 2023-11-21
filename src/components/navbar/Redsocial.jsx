import Link from "next/link"
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs'

export default function RedSocial() {
    return (
        <>
            <Link href="https://www.facebook.com/SESEEIT/?locale=es_LA" target='_blank' ><BsFacebook size={25} className='text-green-600  hover:translate-x-1.5 duration-300' /></Link>
            <Link href="https://www.twitter.com" target='_blank' ><BsTwitter size={25} className='text-green-600 hover:translate-x-1.5 duration-300' /></Link>
            <Link href="https://www.instagram.com" target='_blank' ><BsInstagram size={25} className='text-green-600 hover:translate-x-1.5 duration-300' /></Link>
            <Link href="https://www.linkedin.com" target='_blank' ><BsLinkedin size={25} className='text-green-600  hover:translate-x-1.5 duration-300' /></Link>
        </>
    )

}