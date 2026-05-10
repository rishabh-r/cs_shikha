import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Corporate Law & Compliance',
    icon: '⚖️',
    color: '#ff6b9d',
    skills: [
      'Companies Act, 2013',
      'SEBI Regulations',
      'ROC Filings',
      'Secretarial Audit',
      'Corporate Governance',
      'FEMA Compliance',
    ],
  },
  {
    title: 'Corporate Actions',
    icon: '🏢',
    color: '#4dc9ff',
    skills: [
      'Mergers & Demergers',
      'Share Allotment',
      'ESOP Management',
      'Charge Creation',
      'Company Incorporation',
      'Annual Filing & XBRL',
    ],
  },
  {
    title: 'Legal & Drafting',
    icon: '📝',
    color: '#ffd700',
    skills: [
      'Board Minutes & Resolutions',
      'Legal Agreements',
      'Directors Report',
      'Due Diligence',
      'Trademark & IP',
      'Labour Law Compliance',
    ],
  },
  {
    title: 'Technical & Tools',
    icon: '💻',
    color: '#7bed9f',
    skills: [
      'MCA Portal',
      'LAWRBIT',
      'Income Tax',
      'GST',
      'EPF & ESIC',
      'Computer Accounting',
    ],
  },
  {
    title: 'Regulatory Liaison',
    icon: '🤝',
    color: '#c44dff',
    skills: [
      'ROC Coordination',
      'RTA Management',
      'CDSL & NSDL',
      'Bank Liaison',
      'Statutory Authorities',
      'Inter-departmental Coordination',
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🌟',
    color: '#ff4757',
    skills: [
      'Attention to Detail',
      'Team Collaboration',
      'Problem Solving',
      'Time Management',
      'Communication',
      'Adaptability',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        className="section__header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section__tag">What I bring to the table</span>
        <h2 className="section__title">Skills & Expertise</h2>
        <div className="section__title-line" />
      </motion.div>

      <div className="skills__grid">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            className="skills__category"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            style={{ '--skill-color': cat.color }}
          >
            <div className="skills__category-header">
              <span className="skills__category-icon">{cat.icon}</span>
              <h3>{cat.title}</h3>
            </div>
            <div className="skills__tags">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  className="skills__tag"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
