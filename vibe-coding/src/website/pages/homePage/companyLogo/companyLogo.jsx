import { useRef, useEffect } from 'react'
import logoGailsTails from '../../../../assets/images/logoCarousel/gails-tails-logo.png'
import logoGsConsultancy from '../../../../assets/images/logoCarousel/guy-salmon-logo.png'
import logoSd from '../../../../assets/images/logoCarousel/sd-logo.png'
import './companyLogo.scss'

const LOGOS = [
  { id: 'gails-tails',    src: logoGailsTails,    alt: 'Gails Tails' },
  { id: 'gs-consultancy', src: logoGsConsultancy, alt: 'Gs Consultancy' },
  { id: 'sd',             src: logoSd,            alt: 'Sd' },
]

// Repeat enough times so the half-track is always wider than any viewport
const REPEATED_LOGOS = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS]

const SPEED = 1

const CompanyLogo = () => {
  const trackRef           = useRef(null)
  const positionRef        = useRef(0)
  const targetDirectionRef = useRef(1)
  const smoothDirectionRef = useRef(1)
  const lastScrollY        = useRef(0)
  const animFrameRef       = useRef(null)

  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY
      targetDirectionRef.current = currentY > lastScrollY.current ? 1 : -1
      lastScrollY.current = currentY
    }

    function animate() {
      if (!trackRef.current) return

      smoothDirectionRef.current +=
        (targetDirectionRef.current - smoothDirectionRef.current) * 0.08

      positionRef.current += SPEED * smoothDirectionRef.current

      const halfWidth = trackRef.current.scrollWidth / 2

      if (positionRef.current >= halfWidth) positionRef.current = 0
      if (positionRef.current < 0) positionRef.current = halfWidth - 1

      trackRef.current.style.transform = `translateX(-${positionRef.current}px)`
      animFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    animFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <div className="company-logo">
      <div className="company-logo__track" ref={trackRef}>
        {[...REPEATED_LOGOS, ...REPEATED_LOGOS].map((logo, index) => (
          <div className="company-logo__item" key={`${logo.id}-${index}`}>
            <img
              src={logo.src}
              alt={logo.alt}
              className="company-logo__img"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogo
