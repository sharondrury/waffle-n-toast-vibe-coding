import { useRef } from 'react'
import { Helmet } from 'react-helmet-async'
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
      <Helmet>
        <title>Waffle &amp; Toast | Vibe Coding</title>
        <meta name="description" content="Custom websites built with passion. Waffle &amp; Toast creates beautiful, fast websites for small businesses and creatives." />
        <meta property="og:title" content="Waffle &amp; Toast | Vibe Coding" />
        <meta property="og:description" content="Custom websites built with passion. Waffle &amp; Toast creates beautiful, fast websites for small businesses and creatives." />
        <meta property="og:url" content="https://sharondrury.github.io/waffle-n-toast-vibe-coding/" />
      </Helmet>
      <NavBar />
      <main className="homePage">
        <Hero onCtaClick={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <CompanyServices onGetInTouch={() => contactRef.current?.scrollIntoView({ behavior: 'smooth' })} />
        <CompanyLogo />
        <Faq />
        <Showcase />
        <ContactSection ref={contactRef} />
      </main>
    </>
  )
}

export default HomePage
