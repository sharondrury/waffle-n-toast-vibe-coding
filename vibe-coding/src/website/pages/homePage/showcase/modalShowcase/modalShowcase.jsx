import { modalShowcaseContent } from '../data.json'
import img1 from '../../../../../assets/images/image1.png'
import img2 from '../../../../../assets/images/image2.png'
import img3 from '../../../../../assets/images/image3.png'
import img4 from '../../../../../assets/images/image4.png'
import './modalShowcase.scss'

const IMAGE_MAP = { image1: img1, image2: img2, image3: img3, image4: img4 }

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
          <img src={IMAGE_MAP[item.image1]} alt="" className="modal-showcase__image" />
          <img src={IMAGE_MAP[item.image2]} alt="" className="modal-showcase__image" />
          <img src={IMAGE_MAP[item.image3]} alt="" className="modal-showcase__image" />
        </div>
      </div>
    </div>
  )
}

export default ModalShowcase
