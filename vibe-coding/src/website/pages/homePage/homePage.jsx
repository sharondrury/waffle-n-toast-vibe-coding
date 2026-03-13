import NavBar from '../../components/navBar/navBar'
import Hero from './hero/hero'
import CompanyServices from './companyServices/companyServices'
import Faq from './faq/faq'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="homePage">
        <Hero />
        <CompanyServices />
        <Faq />
      </main>
    </>
  )
}

export default HomePage
