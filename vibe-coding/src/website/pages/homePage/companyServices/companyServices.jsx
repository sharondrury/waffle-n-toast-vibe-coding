import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Monitor, Server, Pen } from 'lucide-react'
import servicesData from './data.json'
import './companyServices.scss'

const ICON_MAP = {
  1: Monitor,
  2: Server,
  3: Pen,
}

const LINK_TEXT = 'Get in touch.'
const TRIGGER_DISTANCE = 300

const renderText = (text) => {
  const idx = text.lastIndexOf(LINK_TEXT)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <strong><Link to="/contact">{LINK_TEXT}</Link></strong>
    </>
  )
}

const CompanyServices = () => {
  const cardRefs = useRef([])

  useEffect(() => {
    const updateCards = () => {
      cardRefs.current.forEach((card) => {
        if (!card) return
        const rect = card.getBoundingClientRect()
        const progress = Math.min(
          Math.max((window.innerHeight - rect.top) / TRIGGER_DISTANCE, 0),
          1
        )
        card.style.opacity = progress
        card.style.transform = `translateX(${(1 - progress) * 60}px)`
      })
    }

    updateCards()
    window.addEventListener('scroll', updateCards)
    return () => window.removeEventListener('scroll', updateCards)
  }, [])

  return (
    <section className="company-services">
      <div className="company-services__container">
        <div className="company-services__left">
          <h2 className="company-services__heading">
            What's on offer for our{' '}
            <span className="company-services__heading--underline">service</span>
          </h2>
        </div>
        <div className="company-services__right">
          {servicesData.map((item, i) => {
            const Icon = ICON_MAP[item.icon]
            return (
              <div
                key={item.icon}
                className="company-services__card"
                ref={(el) => (cardRefs.current[i] = el)}
              >
                <div className="company-services__card-icon">
                  {Icon && <Icon size={32} />}
                </div>
                <div className="company-services__card-content">
                  <h3 className="company-services__card-heading">{item.heading}</h3>
                  <p className="company-services__card-text">{renderText(item.text)}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CompanyServices
