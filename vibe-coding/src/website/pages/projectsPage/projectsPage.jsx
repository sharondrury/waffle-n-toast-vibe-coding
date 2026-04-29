import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/navBar/navBar'

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Waffle &amp; Toast</title>
        <meta name="description" content="Explore the websites and projects we've built for our clients." />
        <meta property="og:title" content="Projects | Waffle &amp; Toast" />
        <meta property="og:url" content="https://sharondrury.github.io/waffle-n-toast-vibe-coding/projects" />
      </Helmet>
      <NavBar />
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          color: 'var(--white)',
          fontFamily: 'var(--font-heading)',
          fontSize: '2rem',
          fontWeight: 700,
        }}>
          Coming Soon
        </p>
      </main>
    </>
  )
}

export default ProjectsPage
