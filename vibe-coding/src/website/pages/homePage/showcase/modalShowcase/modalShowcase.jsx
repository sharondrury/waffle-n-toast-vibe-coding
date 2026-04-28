import { modalShowcaseContent } from '../data.json'
import { clientWebsite } from '../data.json'
import img1 from '../../../../../assets/images/gs-website.png'
import img2 from '../../../../../assets/images/gt-website.png'
import img3 from '../../../../../assets/images/sd-website.png'
import img4 from '../../../../../assets/images/wa-website.png'
import gailsTailsVideo1 from '../../../../../assets/recording/gails-tails.mp4'
import gailsTailsVideo2 from '../../../../../assets/recording/gails-tails2.mp4'
import guySalmonVideo1 from '../../../../../assets/recording/guysalmonwebsite.mp4'
import './modalShowcase.scss'

const IMAGE_MAP = { 'gs-website': img1, 'gt-website': img2, 'sd-website': img3, 'wa-website': img4 }
const VIDEO_MAP = { 'gailsTailsVideo1': gailsTailsVideo1, 'gailsTailsVideo2': gailsTailsVideo2, 'guySalmonVideo1': guySalmonVideo1 };

const ModalShowcase = ({ selectedIndex, onClose }) => {
  const item = modalShowcaseContent[selectedIndex]
  if (!item) return null

  const websiteInfo = clientWebsite[selectedIndex]

  return (
    <div className="modal-showcase" onClick={onClose}>
      <div className="modal-showcase__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-showcase__close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <h2 className="modal-showcase__heading">{item.heading}</h2>
        <div className="modal-showcase__images">
          {item.video1
            ? <video src={VIDEO_MAP[item.video1]} className="modal-showcase__video" autoPlay muted loop playsInline />
            : <img src={IMAGE_MAP[item.image1]} alt="" className="modal-showcase__image" />
          }
          {item.video2
            ? <video src={VIDEO_MAP[item.video2]} className="modal-showcase__video" autoPlay muted loop playsInline />
            : <img src={IMAGE_MAP[item.image2]} alt="" className="modal-showcase__image" />
          }
          {item.video3
            ? <video src={VIDEO_MAP[item.video3]} className="modal-showcase__video" autoPlay muted loop playsInline />
            : <img src={IMAGE_MAP[item.image3]} alt="" className="modal-showcase__image" />
          }
        </div>
        <div className="modal-showcase__cta-container">
          <a href={websiteInfo.url} target="_blank" rel="noopener noreferrer" className="modal-showcase__cta">
            Open website
          </a>
        </div>
          
      </div>
    </div>
  )
}

export default ModalShowcase
