import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

const processSteps = [
  {
    number: '01',
    title: 'Load path continuity',
    summary: 'One structural route carries input from strut mount to axle without discontinuity.',
    markers: [
      { number: '01', label: 'Strut tower path', x: '20%', y: '20%' },
      { number: '02', label: 'Hood load line', x: '58%', y: '38%' },
      { number: '03', label: 'Front axle transfer', x: '58%', y: '76%' },
    ],
  },
  {
    number: '02',
    title: 'Interface tolerance',
    summary: 'Panel gaps and lamp boundaries hold sub-millimeter alignment across every junction.',
    markers: [
      { number: '01', label: 'Panel tolerance', x: '38%', y: '32%' },
      { number: '02', label: 'Lamp boundary', x: '72%', y: '56%' },
      { number: '03', label: 'Grille junction', x: '68%', y: '82%' },
    ],
  },
  {
    number: '03',
    title: 'Surface & light resolution',
    summary: 'Body surface, light signature and intake geometry resolve as one continuous line.',
    markers: [
      { number: '01', label: 'Surface continuity', x: '34%', y: '40%' },
      { number: '02', label: 'Light signature', x: '76%', y: '58%' },
      { number: '03', label: 'Intake geometry', x: '61%', y: '84%' },
    ],
  },
]

export default function DesignLanguage() {
  const [activeStep, setActiveStep] = useState(0)
  const reducedMotion = useReducedMotion()
  const selectedStep = processSteps[activeStep]

  return (
    <section className="design section-pad" id="process">
      <div className="design-visual">
        <motion.img
          src="/assets/higgsfield/lancer-front-detail.png"
          alt="Close-up of the graphite Lancer hood, headlight and front grille"
          loading="lazy"
          draggable="false"
          initial={reducedMotion ? false : { scale: 1.06, opacity: 0.72 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1] }}
        />
        <motion.div
          className="material-scan"
          aria-hidden="true"
          initial={reducedMotion ? false : { x: '-140%' }}
          whileInView={reducedMotion ? undefined : { x: '150%' }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.65, ease: [0.45, 0, 0.2, 1] }}
        />

        <div className="process-annotations" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            {selectedStep.markers.map((marker) => (
              <motion.div
                key={`${selectedStep.number}-${marker.number}`}
                className="process-annotation"
                style={{ '--marker-x': marker.x, '--marker-y': marker.y }}
                initial={reducedMotion ? false : { opacity: 0, scale: 0.94, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.26, delay: Number(marker.number) * 0.04 }}
              >
                <i aria-hidden="true" />
                <span>{marker.number}</span>
                <p>{marker.label}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <span className="visual-code">PROCESS / {selectedStep.number}</span>
      </div>

      <div className="design-copy">
        <p className="eyebrow"><span /> Construction process</p>
        <h2>Authority lives<br /><em>in the assembly.</em></h2>
        <p className="design-lead">
          Every interface has a role in the same mechanical path. Value comes
          from how the system is composed, not from decoration around it.
        </p>
        <div className="design-points" aria-label="Construction process views">
          {processSteps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              className={index === activeStep ? 'is-active' : ''}
              aria-pressed={index === activeStep}
              onClick={() => setActiveStep(index)}
            >
              <span>{step.number}</span>
              <p>
                <strong>{step.title}</strong>
                <small>{step.summary}</small>
              </p>
              <i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
