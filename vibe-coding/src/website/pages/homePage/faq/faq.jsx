import { useState } from 'react'
import faqData from './data.json'
import './faq.scss'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (i) => {
    setOpenIndex(i === openIndex ? null : i)
  }

  return (
    <section className="faq">
      <div className="faq__decorations" aria-hidden="true">
        <span className="faq__decoration faq__decoration--tl">?</span>
        <span className="faq__decoration faq__decoration--bl">?</span>
        <span className="faq__decoration faq__decoration--tr">?</span>
        <span className="faq__decoration faq__decoration--br">?</span>
      </div>
      <div className="faq__inner">
        <h2 className="faq__heading">
          Frequently asked question at Waffles and Toast Web Creatives
        </h2>
        <div className="faq__list">
          {faqData.map((item, i) => (
            <div
              key={i}
              className={`faq__pill${openIndex === i ? ' faq__pill--open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => handleToggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.question}</span>
                <span className="faq__icon">{openIndex === i ? '×' : '+'}</span>
              </button>
              <div className="faq__answer-wrapper">
                <div className="faq__answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
