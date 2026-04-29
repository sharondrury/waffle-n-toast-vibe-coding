import { Helmet } from 'react-helmet-async'
import NavBar from '../../components/navBar/navBar';

import "./aboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Waffle &amp; Toast</title>
        <meta name="description" content="Learn about Waffle &amp; Toast — who we are and what drives us to build great websites." />
        <meta property="og:title" content="About | Waffle &amp; Toast" />
        <meta property="og:url" content="https://sharondrury.github.io/waffle-n-toast-vibe-coding/about" />
      </Helmet>
      <NavBar />
      <main className='about-page-container' >
        <p>
          Coming Soon
        </p>
      </main>
    </>
  )
}

export default AboutPage
