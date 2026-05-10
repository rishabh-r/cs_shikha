import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${formData.name}`
    const body = `Name: ${formData.name}%0AEmail: ${formData.email}%0A%0A${formData.message}`
    window.open(`mailto:shikha0702kumari@gmail.com?subject=${subject}&body=${body}`, '_self')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section__tag">Let's connect</span>
        <h2 className="section__title">Get In Touch</h2>
        <div className="section__title-line" />
      </motion.div>

      <div className="contact__content">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="contact__info-title">
            Let's work together! 🎉
          </h3>
          <p className="contact__info-text">
            Whether you need corporate compliance support, secretarial services,
            or just want to discuss corporate governance — I'd love to hear from you.
          </p>

          <div className="contact__details">
            <motion.a
              href="https://www.linkedin.com/in/cs-shikha-kumari-1a04931a4"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__detail-card"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <span className="contact__detail-icon">💼</span>
              <div>
                <strong>LinkedIn</strong>
                <p>cs-shikha-kumari</p>
              </div>
            </motion.a>

            <motion.div
              className="contact__detail-card"
              whileHover={{ scale: 1.05, y: -3 }}
            >
              <span className="contact__detail-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Kolkata, West Bengal</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact__form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <div className="contact__form-line" />
          </div>
          <div className="contact__form-group">
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <div className="contact__form-line" />
          </div>
          <div className="contact__form-group">
            <textarea
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <div className="contact__form-line" />
          </div>
          <motion.button
            type="submit"
            className="contact__submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {submitted ? '✨ Message Sent!' : '🚀 Send Message'}
          </motion.button>
        </motion.form>
      </div>

      <footer className="footer">
        <div className="footer__content">
          <p>Designed with 💖 by Shikha Kumari</p>
          <p>© {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
      </footer>
    </section>
  )
}
