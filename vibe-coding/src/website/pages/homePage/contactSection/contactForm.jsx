import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { validateContactForm } from './contactValidation'
import './contactForm.scss'

const SERVICE_ID  = 'service_vdrnqgz'
const TEMPLATE_ID = 'template_hkes3vq'

const ContactForm = ({ onSuccess, onError }) => {
  const [fields, setFields]         = useState({ name: '', companyName: '', email: '', message: '' })
  const [errors, setErrors]         = useState({})
  const [sending, setSending]       = useState(false)
  const [submitStatus, setSubmitStatus] = useState('idle')

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  function handleReset() {
    setSubmitStatus('idle')
    setFields({ name: '', companyName: '', email: '', message: '' })
    setErrors({})
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validateContactForm(fields)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setSending(true)
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name:    fields.name,
        company_name: fields.companyName,
        reply_to:     fields.email,
        message:      fields.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setSending(false)
        setSubmitStatus('success')
        if (onSuccess) onSuccess()
      })
      .catch(() => {
        setSending(false)
        setSubmitStatus('error')
        if (onError) onError()
      })
  }

  if (submitStatus === 'success') {
    return (
      <div className="contact-form__success">
        <p>Message sent — we'll be in touch!</p>
        <button onClick={handleReset} className="contact-form__reset-btn">
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="name">Name</label>
        <input
          className={`contact-form__input${errors.name ? ' contact-form__input--error' : ''}`}
          type="text"
          id="name"
          name="name"
          value={fields.name}
          onChange={handleChange}
          placeholder="Your name"
        />
        {errors.name && <span className="contact-form__field-error">{errors.name}</span>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="companyName">Company Name (optional)</label>
        <input
          className="contact-form__input"
          type="text"
          id="companyName"
          name="companyName"
          value={fields.companyName}
          onChange={handleChange}
          placeholder="Your company"
        />
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="email">Email</label>
        <input
          className={`contact-form__input${errors.email ? ' contact-form__input--error' : ''}`}
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
        {errors.email && <span className="contact-form__field-error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">Message</label>
        <textarea
          className={`contact-form__textarea${errors.message ? ' contact-form__textarea--error' : ''}`}
          id="message"
          name="message"
          value={fields.message}
          onChange={handleChange}
          placeholder="Tell us about your project..."
        />
        {errors.message && <span className="contact-form__field-error">{errors.message}</span>}
      </div>

      {submitStatus === 'error' && (
        <p className="contact-form__error-msg">Something went wrong — please try again.</p>
      )}

      <button
        type="submit"
        className="contact-form__submit-btn"
        disabled={sending}
      >
        {sending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm
