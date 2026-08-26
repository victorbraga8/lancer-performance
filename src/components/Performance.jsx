import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const disciplines = [
  { number: '01', title: 'Power delivery', stat: 'Immediate', copy: 'Response shaped to arrive with intent, then remain composed.', asset: '/assets/motor.png', evidence: 'Power delivery evidence' },
  { number: '02', title: 'Traction logic', stat: 'Connected', copy: 'Confidence translated through every point of contact.', asset: '/assets/cambio.jpg', evidence: 'Traction logic evidence' },
  { number: '03', title: 'Brake control', stat: 'Measured', copy: 'Progressive force with a clear, communicative pedal feel.', asset: '/assets/roda.jpg', evidence: 'Brake control evidence' },
  { number: '04', title: 'Chassis balance', stat: 'Deliberate', copy: 'Movement managed as one precise, predictable system.', asset: '/assets/suspensao.jpg', evidence: 'Chassis balance evidence' },
]

export default function Performance() {
  const reducedMotion = useReducedMotion()
  const [activeDiscipline, setActiveDiscipline] = useState(0)
  const [hoveredDiscipline, setHoveredDiscipline] = useState(null)
  const selectedDiscipline = disciplines[activeDiscipline]
  const flowProgress = `${((activeDiscipline + 1) / disciplines.length) * 100}%`

  return (
    <section className="performance section-pad" id="performance">
      <div className="section-heading">
        <p className="eyebrow"><span /> Performance consequence</p>
        <h2>Response is built<br /><em>from within.</em></h2>
        <p>The vehicle&apos;s character is the visible result of a connected mechanical system.</p>
      </div>

      <motion.div
        className="performance-system"
        initial={reducedMotion ? false : { opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.72, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="performance-media">
          <motion.img
            className="performance-car"
            src="/assets/higgsfield/lancer-hero.png"
            alt="Graphite Lancer translating engineering into road performance"
            loading="lazy"
            draggable="false"
            initial={reducedMotion ? false : { scale: 1.045 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.25, ease: [0.2, 0.8, 0.2, 1] }}
          />
          <div className="performance-detail-media" aria-hidden="true">
            <motion.img
              key={selectedDiscipline.asset}
              src={selectedDiscipline.asset}
              alt=""
              loading="lazy"
              draggable="false"
              initial={reducedMotion ? false : { opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.38, ease: [0.2, 0.8, 0.2, 1] }}
            />
            <span>{selectedDiscipline.evidence}</span>
          </div>
          <div className="performance-media-shade" aria-hidden="true" />
          <div className="performance-media-meta">
            <span>LOAD / RESPONSE</span>
            <strong>{selectedDiscipline.stat} / {selectedDiscipline.title}</strong>
          </div>
        </div>

        <ol className="performance-disciplines" style={{ '--flow-progress': flowProgress }}>
          {disciplines.map((item, index) => (
            <motion.li
              key={item.number}
              className={[
                index === activeDiscipline ? 'is-active' : '',
                index === hoveredDiscipline ? 'is-hovered' : '',
              ].filter(Boolean).join(' ')}
              initial={reducedMotion ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: 0.48, delay: index * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <button
                type="button"
                aria-pressed={index === activeDiscipline}
                onClick={() => setActiveDiscipline(index)}
                onFocus={() => setActiveDiscipline(index)}
                onMouseEnter={() => setHoveredDiscipline(index)}
                onMouseLeave={() => setHoveredDiscipline(null)}
              >
                <span>{item.number}</span>
                <div>
                  <p>{item.title}</p>
                  <strong>{item.stat}</strong>
                  <small>{item.copy}</small>
                </div>
                <i aria-hidden="true" />
              </button>
            </motion.li>
          ))}
        </ol>
      </motion.div>

      <p className="concept-note">Conceptual attributes shown for creative visualization only.</p>
    </section>
  )
}
