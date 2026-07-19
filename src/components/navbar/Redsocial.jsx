import Link from 'next/link'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const socialLinks = [
  { href: 'https://www.facebook.com/SESEEIT/?locale=es_LA', icon: BsFacebook },
  { href: 'https://www.twitter.com', icon: BsTwitter },
  { href: 'https://www.instagram.com', icon: BsInstagram },
  { href: 'https://www.linkedin.com', icon: BsLinkedin }
]

const RedSocial = () => {
  return (
    <>
      {socialLinks.map((item) => {
        const Icon = item.icon
        return (
          <Link key={item.href} href={item.href} target='_blank' rel='noreferrer'>
            <Icon size={25} className='text-green-600 hover:translate-x-1.5 duration-300' />
          </Link>
        )
      })}
    </>
  )
}

export default RedSocial