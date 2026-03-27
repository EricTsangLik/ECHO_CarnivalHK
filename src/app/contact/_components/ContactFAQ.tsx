'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { contactFaqs } from '@/data/faqs'

const ContactFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="section booth-faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">常見問題</h2>
          <p className="section-subtitle">查詢及預訂相關的常見問題</p>
        </div>

        <div className="faq-list">
          {contactFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-open' : ''}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span>{faq.q}</span>
                <span className="faq-toggle-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div
          className="contact-final-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>還有其他問題？歡迎直接聯絡我們！</p>
          <a
            href="https://wa.me/85293910332?text=I'm%20inquiring%20about%20carnival%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-final-btn"
          >
            💬 WhatsApp 即時查詢
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactFAQ
