import Navbar from '@/components/navbar/Navbar'
import Product from '@/components/product/Product'
import Categorie from '@/components/categorie/Categorie'
import About from './about/About'
import Services from './services/Services'
import Contact from './contact/Contact'
import Footer from './footer/Footer'



export default function Presentacion() {
  return (
    <>
      <Navbar />
      <About />
      <Product />
      <Categorie />
      <Services />
      <Contact />
      <Footer />
    </>
  )

}