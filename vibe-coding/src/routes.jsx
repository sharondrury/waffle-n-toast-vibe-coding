import { Routes, Route } from 'react-router-dom'
import HomePage from './website/pages/homePage/homePage'
import AboutPage from './website/pages/aboutPage/aboutPage'
import ProjectsPage from './website/pages/projectsPage/projectsPage'
import PricingPage from './website/pages/pricingPage/pricingPage'

function AppRoutes() {
  return (
    <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </main>
  )
}

export default AppRoutes
