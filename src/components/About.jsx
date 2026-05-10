import { motion } from 'framer-motion'
import Avatar3D from './Avatar3D'

const highlights = [
  { icon: '📋', title: 'Corporate Compliance', desc: 'Expert in Companies Act, 2013' },
  { icon: '⚖️', title: 'Legal Expertise', desc: 'LLB from Radha Govind University' },
  { icon: '📊', title: 'Financial Acumen', desc: 'B.Com (Hons) from St. Xavier\'s' },
  { icon: '🏢', title: 'Industry Experience', desc: 'FMCG & Manufacturing sectors' },
]

export default function About() {
  return (
    <section id="about" className="about">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section__tag">Get to know me</span>
        <h2 className="section__title">About Me</h2>
        <div className="section__title-line" />
      </motion.div>

      <div className="about__content">
        <motion.div
          className="about__avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Avatar3D />
        </motion.div>

        <motion.div
          className="about__info"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="about__text">
            I'm <strong>ACS Shikha Kumari</strong>, a qualified Company Secretary with a passion
            for corporate governance and compliance. With a unique blend of legal knowledge (LLB)
            and commerce expertise (B.Com Hons), I bring a holistic approach to corporate affairs.
          </p>
          <p className="about__text">
            Currently serving as Company Secretary at <strong>SSIL Paint Industries Pvt. Ltd.</strong> (Shyam Steel Group),
            I handle everything from company incorporations to mergers & demergers. Previously, I honed my skills at
            Fitshit Health Solutions (The Whole Truth) in Mumbai, managing end-to-end compliance.
          </p>
          <p className="about__text">
            When I'm not navigating the corporate world, you'll find me singing, playing sports,
            or creating art and crafts! 🎨
          </p>

          <div className="about__highlights">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                className="about__highlight-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <span className="about__highlight-icon">{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
