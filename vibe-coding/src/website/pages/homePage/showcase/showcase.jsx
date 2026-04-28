import { useState, useRef, useEffect } from 'react'
import { thumbnailImage } from './data.json'
import ModalShowcase from './modalShowcase/modalShowcase'
import img1 from '../../../../assets/images/gs-website.png'
import img2 from '../../../../assets/images/gt-website.png'
import img3 from '../../../../assets/images/sd-website.png'
import img4 from '../../../../assets/images/wa-website.png'
import './showcase.scss'

const IMAGE_MAP = { 'gs-website': img1, 'gt-website': img2, 'sd-website': img3, 'wa-website': img4 }

const displayCards = [...thumbnailImage, ...thumbnailImage]

const CARD_STEP = 354 + 16                            // card width + margin-right
const TOTAL_WIDTH = thumbnailImage.length * CARD_STEP // seamless loop distance (1850px)
const SCROLL_SPEED = 0.88                             // px per frame ≈ 35s cycle at 60fps

const Showcase = () => {
  const [isPaused, setIsPaused] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(null)

  const trackRef = useRef(null)
  const rafRef = useRef(null)
  const positionRef = useRef(0)
  const isDragging = useRef(false)
  const dragBasePosition = useRef(0)
  const startX = useRef(0)
  const dragMoved = useRef(false)
  const isPausedRef = useRef(false)
  const isModalOpenRef = useRef(false)

  useEffect(() => { isPausedRef.current = isPaused }, [isPaused])
  useEffect(() => { isModalOpenRef.current = isModalOpen }, [isModalOpen])

  useEffect(() => {
    const tick = () => {
      if (!isDragging.current && !isPausedRef.current && !isModalOpenRef.current) {
        positionRef.current -= SCROLL_SPEED
        if (positionRef.current <= -TOTAL_WIDTH) {
          positionRef.current += TOTAL_WIDTH
        }
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${positionRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

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
    dragBasePosition.current = positionRef.current

    const onMove = (moveEvent) => {
      const delta = moveEvent.clientX - startX.current
      if (Math.abs(delta) > 5) dragMoved.current = true
      let next = dragBasePosition.current + delta
      if (next > 0) next -= TOTAL_WIDTH
      if (next < -TOTAL_WIDTH) next += TOTAL_WIDTH
      positionRef.current = next
    }

    const onUp = () => {
      isDragging.current = false
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
    dragBasePosition.current = positionRef.current

    const onMove = (moveEvent) => {
      const delta = moveEvent.touches[0].clientX - startX.current
      if (Math.abs(delta) > 5) dragMoved.current = true
      let next = dragBasePosition.current + delta
      if (next > 0) next -= TOTAL_WIDTH
      if (next < -TOTAL_WIDTH) next += TOTAL_WIDTH
      positionRef.current = next
    }

    const onEnd = () => {
      isDragging.current = false
      window.removeEventListener('touchmove', onMove)
      window.removeEventListener('touchend', onEnd)
    }

    window.addEventListener('touchmove', onMove)
    window.addEventListener('touchend', onEnd)
  }

  return (
    <section className="showcase">
      <div
        className="showcase__carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className="showcase__track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {displayCards.map((card, i) => (
            <div
              key={i}
              className="showcase__card"
              data-color-index={i % thumbnailImage.length}
              style={{ backgroundImage: `url(${IMAGE_MAP[card.backgroundImage]})` }}
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
