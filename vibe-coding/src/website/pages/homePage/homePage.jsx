import { useRef } from 'react'
import NavBar from '../../components/navBar/navBar'
import Hero from './hero/hero'
import CompanyLogo from './companyLogo/companyLogo'
import CompanyServices from './companyServices/companyServices'
import Faq from './faq/faq'
import Showcase from './showcase/showcase'
import ContactSection from './contactSection/contactSection'
import './homePage.scss'

const HomePage = () => {
  const contactRef = useRef(null)

  return (
    <>
      <NavBar />
      <main className="homePage">
        <Hero onCtaClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <CompanyServices onGetInTouch={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <Faq />
        <Showcase />
        <CompanyLogo />
        <ContactSection ref={contactRef} />
      </main>
    </>
  )
}

export default HomePage
