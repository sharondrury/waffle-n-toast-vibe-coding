import ContactForm from '../../pages/homePage/contactSection/contactForm'
import './getInTouchModal.scss'

const GetInTouchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="get-in-touch-modal"
        onClick={e => e.stopPropagation()}
      >
        <button className="get-in-touch-modal__close" onClick={onClose}>×</button>
        <div className="get-in-touch-modal__header">
          <h2 className="get-in-touch-modal__heading">Get in touch</h2>
          <p className="get-in-touch-modal__subheading">
            Even if you haven't read exactly what you came here for,
            send us a message and we can work it out together.
          </p>
        </div>
        <div className="get-in-touch-modal__body">
          <ContactForm
            onSuccess={() => setTimeout(onClose, 1500)}
          />
        </div>
      </div>
    </div>
  )
}

export default GetInTouchModal
