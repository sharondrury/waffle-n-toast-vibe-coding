import NavBar from '../../components/navBar/navBar'
import Hero from './hero/hero'
import CompanyServices from './companyServices/companyServices'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="homePage">
        <Hero />
        <CompanyServices />
      </main>
    </>
  )
}

export default HomePage
