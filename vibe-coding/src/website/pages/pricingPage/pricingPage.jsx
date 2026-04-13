import NavBar from '../../components/navBar/navBar'

const PricingPage = () => {
  return (
    <>
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

export default PricingPage
