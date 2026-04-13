import { useEffect, useRef } from 'react'
import ReactIcon from '../../../../assets/images/react-brands-solid-full.svg?react'
import ServerIcon from '../../../../assets/images/server-solid-full.svg?react'
import FigmaIcon from '../../../../assets/images/figma-brands-solid-full.svg?react'
import ArrowsIcon from "../../../../assets/images/arrows-down-to-people-solid-full.svg?react";
import servicesData from './data.json'
import './companyServices.scss'

const ICON_MAP = {
  'react-brands-solid-full.svg': ReactIcon,
  'server-solid-full.svg': ServerIcon,
  'figma-brands-solid-full.svg': FigmaIcon,
  'arrows-down-to-people-solid-full.svg': ArrowsIcon,
}

const LINK_TEXT = 'Get in touch.'
const TRIGGER_DISTANCE = 300

const renderText = (text, onGetInTouch) => {
  const idx = text.lastIndexOf(LINK_TEXT)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <strong>
        <button className="company-services__inline-btn" onClick={onGetInTouch}>
          {LINK_TEXT}
        </button>
      </strong>
    </>
  )
}

const CompanyServices = ({ onGetInTouch }) => {
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
            Complete web design {" "}
            <span className="company-services__heading--underline">
              solutions
            </span>
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
                  {Icon && <Icon width={32} height={32} />}
                </div>
                <div className="company-services__card-content">
                  <h3 className="company-services__card-heading">
                    {item.heading}
                  </h3>
                  <p className="company-services__card-text">
                    {renderText(item.text, onGetInTouch)}
                  </p>
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
