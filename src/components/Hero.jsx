import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const roles = [
  'Company Secretary',
  'Legal Professional',
  'Compliance Expert',
  'Corporate Governance Specialist',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <motion.div
          className="hero__badge"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          ✨ Welcome to my world
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm{' '}
          <span className="hero__name">
            ACS Shikha Kumari
            <svg className="hero__name-underline" viewBox="0 0 300 12">
              <motion.path
                d="M2 10 Q75 2 150 6 T298 4"
                stroke="url(#gradient)"
                strokeWidth="3"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 1.5 }}
              />
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#ff6b9d" />
                  <stop offset="100%" stopColor="#ffd700" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        <motion.div
          className="hero__role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="hero__role-prefix">I'm a</span>
          <span className="hero__role-text">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </motion.div>

        <motion.p
          className="hero__description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Transforming corporate governance with precision, expertise, and passion.
          From compliance to corporate strategy — I bring clarity to complexity.
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <a href="#experience" className="hero__btn hero__btn--primary">
            <span>Explore My Journey</span>
            <span className="hero__btn-sparkle">🚀</span>
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            <span>Get In Touch</span>
            <span className="hero__btn-sparkle">💌</span>
          </a>
        </motion.div>

        <motion.div
          className="hero__stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="hero__stat">
            <span className="hero__stat-number">3+</span>
            <span className="hero__stat-label">Years Experience</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">2</span>
            <span className="hero__stat-label">Companies Served</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">CS</span>
            <span className="hero__stat-label">Professional</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 2, y: { repeat: Infinity, duration: 2 } }}
      >
        <span>Scroll Down</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
