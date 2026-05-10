import { motion } from 'framer-motion'

const education = [
  {
    degree: 'L.L.B',
    institute: 'Radha Govind University, Ramgarh',
    year: '2025',
    score: '73.63%',
    icon: '⚖️',
    color: '#ff6b9d',
  },
  {
    degree: 'CS Professional',
    institute: 'ICSI',
    year: '2021',
    score: 'Qualified',
    icon: '🏆',
    color: '#ffd700',
  },
  {
    degree: 'B.Com (Hons.)',
    institute: "St. Xavier's College, Ranchi",
    year: '2020',
    score: '72.76%',
    icon: '📊',
    color: '#4dc9ff',
  },
  {
    degree: 'CS Executive',
    institute: 'ICSI',
    year: '2019',
    score: '2nd in City 🥈',
    icon: '🌟',
    color: '#7bed9f',
  },
  {
    degree: 'CS Foundation',
    institute: 'ICSI',
    year: '2017',
    score: 'Qualified',
    icon: '📜',
    color: '#c44dff',
  },
  {
    degree: 'Class XII (CBSE)',
    institute: 'Kairali School, Ranchi',
    year: '2017',
    score: '80%',
    icon: '📚',
    color: '#ff4757',
  },
]

export default function Education() {
  return (
    <section id="education" className="education">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section__tag">Academic journey</span>
        <h2 className="section__title">Education</h2>
        <div className="section__title-line" />
      </motion.div>

      <div className="education__grid">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="education__card"
            initial={{ opacity: 0, y: 50, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -10, scale: 1.03 }}
            style={{ '--card-color': edu.color }}
          >
            <div className="education__card-glow" />
            <span className="education__icon">{edu.icon}</span>
            <span className="education__year">{edu.year}</span>
            <h3 className="education__degree">{edu.degree}</h3>
            <p className="education__institute">{edu.institute}</p>
            <div className="education__score">
              <span>{edu.score}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
