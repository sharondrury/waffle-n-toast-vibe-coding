import { useState, useEffect } from 'react'
import './hero.scss'

const STRINGS = [
  'Helping your customers see your business.',
  'Mobile first, SEO, animated - you name it we can do it.',
]

const TYPING_SPEED = 60
const DELETING_SPEED = 35
const IDLE_PAUSE = 1800

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    const current = STRINGS[stringIndex]

    if (isIdle) {
      const pause = setTimeout(() => {
        setIsIdle(false)
        setIsDeleting(true)
      }, IDLE_PAUSE)
      return () => clearTimeout(pause)
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false)
        setStringIndex((prev) => (prev + 1) % STRINGS.length)
        return
      }
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1))
      }, DELETING_SPEED)
      return () => clearTimeout(timeout)
    }

    if (displayText.length === current.length) {
      setIsIdle(true)
      return
    }

    const timeout = setTimeout(() => {
      setDisplayText(current.slice(0, displayText.length + 1))
    }, TYPING_SPEED)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, isIdle, stringIndex])

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__heading-wrapper">
          <h1 className="hero__heading">
            {displayText}
            <span className={`hero__cursor${isIdle ? ' hero__cursor--blink' : ''}`}>|</span>
          </h1>
        </div>

        <p className="hero__subtext">
          We build modern, responsive websites for UK businesses of all sizes.
          We can help refine your design, and connect you to your awaiting customers.
        </p>

        <a href="#contact" className="hero__cta">
          Get your quote
        </a>
      </div>
    </section>
  )
}

export default Hero
