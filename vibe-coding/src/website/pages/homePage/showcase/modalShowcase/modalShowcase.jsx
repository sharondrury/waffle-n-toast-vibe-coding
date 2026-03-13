import { modalShowcaseContent } from '../data.json'
import './modalShowcase.scss'

const ModalShowcase = ({ selectedIndex, onClose }) => {
  const item = modalShowcaseContent[selectedIndex]
  if (!item) return null

  return (
    <div className="modal-showcase" onClick={onClose}>
      <div className="modal-showcase__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-showcase__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="modal-showcase__heading">{item.heading}</h2>
        <div className="modal-showcase__images">
          <img src={item.image1} alt="" className="modal-showcase__image" />
          <img src={item.image2} alt="" className="modal-showcase__image" />
          <img src={item.image3} alt="" className="modal-showcase__image" />
        </div>
      </div>
    </div>
  )
}

export default ModalShowcase
