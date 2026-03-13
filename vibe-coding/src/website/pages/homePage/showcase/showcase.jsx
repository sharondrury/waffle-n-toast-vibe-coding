import { useState, useRef } from 'react'
import { thumbnailImage } from './data.json'
import ModalShowcase from './modalShowcase/modalShowcase'
import './showcase.scss'

const displayCards = [...thumbnailImage, ...thumbnailImage]

const Showcase = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const trackRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const dragMoved = useRef(false)

  const handleClose = () => {
    setIsModalOpen(false)
    setSelectedIndex(null)
  }

  const handleCardClick = (i) => {
    if (dragMoved.current) return
    const realIndex = i % thumbnailImage.length
    setSelectedIndex(realIndex)
    setIsModalOpen(true)
  }

  const handleMouseDown = (e) => {
    isDragging.current = true
    dragMoved.current = false
    startX.current = e.clientX
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'paused'
    }

    const onMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX.current
      if (Math.abs(delta) > 5) dragMoved.current = true
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${delta}px)`
      }
    }

    const onUp = () => {
      isDragging.current = false
      if (trackRef.current) {
        trackRef.current.style.transform = ''
        trackRef.current.style.animationPlayState = ''
      }
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }

  const handleTouchStart = (e) => {
    isDragging.current = true
    dragMoved.current = false
    startX.current = e.touches[0].clientX
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = 'paused'
    }

    const onMove = (moveEvent) => {
      const delta = moveEvent.touches[0].clientX - startX.current
      if (Math.abs(delta) > 5) dragMoved.current = true
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${delta}px)`
      }
    }

    const onEnd = () => {
      isDragging.current = false
      if (trackRef.current) {
        trackRef.current.style.transform = ''
        trackRef.current.style.animationPlayState = ''
      }
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }

    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onEnd)
  }

  const isAnimPaused = isPaused || isModalOpen

  return (
    <section className="showcase">
      <div
        className="showcase__carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`showcase__track${isAnimPaused ? ' showcase__track--paused' : ''}`}
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {displayCards.map((card, i) => (
            <div
              key={i}
              className="showcase__card"
              style={{ backgroundImage: `url(${card.backgroundImage})` }}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedIndex !== null && (
        <ModalShowcase selectedIndex={selectedIndex} onClose={handleClose} />
      )}
    </section>
  )
}

export default Showcase
