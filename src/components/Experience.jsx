import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Company Secretary',
    company: 'SSIL Paint Industries Pvt. Ltd. (Shyam Steel Group)',
    location: 'Kolkata',
    period: 'July 2024 – Present',
    color: '#ff6b9d',
    highlights: [
      'Incorporation & Commencement of various Companies under Companies Act, 2013',
      'Alteration of MOA and AOA — Authorized Share Capital, Name clause, Object clause',
      'Annual filing (including XBRL) of Companies and LLPs',
      'Share transfers, Preferential Allotment, Private Placement, Right Issue',
      'Drafting Directors Report, Notices, Resolutions, Minutes and Agenda',
      'Assisted in Merger and Demerger of Group Companies',
      'Liaison with RTA, CDSL, NSDL and regulatory authorities',
    ],
  },
  {
    title: 'Compliance Executive',
    company: 'Fitshit Health Solutions Pvt. Ltd. (The Whole Truth)',
    location: 'Mumbai',
    period: 'September 2023 – April 2024',
    color: '#4dc9ff',
    highlights: [
      'Handled regular Secretarial work — minutes, agenda, notices, resolutions',
      'Managed ESOP Issue and ESOP Pool Reduction',
      'ROC Filings including Annual Filing',
      'Creation and modification of charges for Debentures',
      'HR Compliances under various Labour Laws',
      'Drafting and execution of agreements and legal responses',
      'Dematerialization of Shares and Trademark management',
    ],
  },
  {
    title: 'Articleship',
    company: 'R. Prakash & Associates',
    location: 'Ranchi',
    period: 'February 2022 – August 2023',
    color: '#ffd700',
    highlights: [
      'Practical training in Company Secretarial practices',
      'Exposure to corporate compliance and governance',
    ],
  },
  {
    title: 'Internship',
    company: 'Registrar of Companies',
    location: 'Kolkata',
    period: 'September 2020 – March 2021',
    color: '#7bed9f',
    highlights: [
      'Hands-on experience at ROC office',
      'Understanding of regulatory filing procedures',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section__tag">Where I've worked</span>
        <h2 className="section__title">Experience</h2>
        <div className="section__title-line" />
      </motion.div>

      <div className="experience__timeline">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className={`experience__card ${i % 2 === 0 ? 'experience__card--left' : 'experience__card--right'}`}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
          >
            <div
              className="experience__card-inner"
              style={{ '--accent-color': exp.color }}
            >
              <div className="experience__card-header">
                <div className="experience__dot" style={{ background: exp.color }} />
                <span className="experience__period">{exp.period}</span>
              </div>
              <h3 className="experience__title">{exp.title}</h3>
              <h4 className="experience__company">{exp.company}</h4>
              <span className="experience__location">📍 {exp.location}</span>
              <ul className="experience__highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        <div className="experience__line" />
      </div>
    </section>
  )
}
