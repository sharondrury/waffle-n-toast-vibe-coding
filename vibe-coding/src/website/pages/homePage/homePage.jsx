import NavBar from '../../components/navBar/navBar'
import Hero from './hero/hero'
import CompanyLogo from './companyLogo/companyLogo'
import CompanyServices from './companyServices/companyServices'
import Faq from './faq/faq'
import Showcase from './showcase/showcase'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="homePage">
        <Hero />
        <CompanyServices />
        <Faq />
        <Showcase />
        <CompanyLogo />
      </main>
    </>
  )
}

export default HomePage
