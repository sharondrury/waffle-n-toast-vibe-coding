import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage     = lazy(() => import('./website/pages/homePage/homePage'))
const AboutPage    = lazy(() => import('./website/pages/aboutPage/aboutPage'))
const ProjectsPage = lazy(() => import('./website/pages/projectsPage/projectsPage'))
const PricingPage  = lazy(() => import('./website/pages/pricingPage/pricingPage'))

function AppRoutes() {
  return (
    <main style={{ flex: 1 }}>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </Suspense>
    </main>
  )
}

export default AppRoutes
