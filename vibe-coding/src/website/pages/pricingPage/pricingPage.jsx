import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/navBar/navBar'

import './pricingPage.scss'

const PricingPage = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | Waffle &amp; Toast</title>
        <meta name="description" content="Transparent pricing for custom web design and development. Find the right package for your business." />
        <meta property="og:title" content="Pricing | Waffle &amp; Toast" />
        <meta property="og:url" content="https://sharondrury.github.io/waffle-n-toast-vibe-coding/pricing" />
      </Helmet>
      <NavBar />
      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <p style={{
          color: 'var(--company-colour)',
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

export default PricingPage
