import NavBar from '../../components/navBar/navBar'
import Hero from './hero/hero'
import './homePage.scss'

const HomePage = () => {
  return (
    <>
      <NavBar />
      <main className="homePage">
        <Hero />
      </main>
    </>
  )
}

export default HomePage
