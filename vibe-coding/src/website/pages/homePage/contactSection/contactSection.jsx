import { forwardRef } from 'react'
import ContactForm from './contactForm'
import './contactSection.scss'

const ContactSection = forwardRef((props, ref) => {
  return (
    <section className="contact-section" ref={ref} id="contact">
      <div className="contact-section__container">
        <div className="contact-section__form-col">
          <ContactForm />
        </div>
        <div className="contact-section__info-col">
          <h2 className="contact-section__heading">Get in touch</h2>
          <p className="contact-section__subheading">
            Even if you haven't read exactly what you came here for,
            send us a message and we can work it out together.
          </p>
          <div className="stage">
            <div className="shape" />
          </div>
        </div>
      </div>
    </section>
  )
})

ContactSection.displayName = 'ContactSection'

export default ContactSection
