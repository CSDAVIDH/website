import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/navbar/Hero'
import StatsBanner from './StatsBanner'
import Services from './services/Services'
import Portfolio from './Portfolio'
import TechStack from './TechStack'
import ProcessRoadmap from './ProcessRoadmap'
import About from './about/About'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Contact from './contact/Contact'
import Footer from './footer/Footer'

export default function Presentacion() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsBanner />
      <Services />
      <Portfolio />
      <TechStack />
      <ProcessRoadmap />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
