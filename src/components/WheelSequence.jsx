import { useEffect, useRef, useState } from 'react'
import WheelAssembly from './WheelAssembly'

const stages = [
  { label: '00 / Assembly', title: 'One connected system.', body: 'The complete module establishes the load path before each layer is revealed.', annotation: 'Integrated assembly' },
  { label: '01 / Contact', title: 'Response starts here.', body: 'Tire and rim translate the road into the first mechanical input.', annotation: 'Tire / rim' },
  { label: '02 / Control', title: 'Force becomes measure.', body: 'Disc, caliper and hub expose the architecture behind controlled response.', annotation: 'Brake / hub' },
  { label: '03 / Suspension', title: 'Motion finds structure.', body: 'Damper and mounting hardware complete the path into the chassis.', annotation: 'Damper / links' },
  { label: '04 / Exploded state', title: 'Engineering, made visible.', body: 'The final composition holds long enough to read the assembly as one precise line.', annotation: 'Full architecture' },
]

const clamp = (value) => Math.min(1, Math.max(0, value))

export default function WheelSequence() {
  const sectionRef = useRef(null)
  const rafRef = useRef(null)
  const [progress, setProgress] = useState(0)

  const activeStage = Math.min(stages.length - 1, Math.floor(progress * stages.length))
  const assemblyProgress = clamp(progress / 0.82)
  const finalReveal = clamp((progress - 0.72) / 0.18)

  useEffect(() => {
    const update = () => {
      rafRef.current = null
      const element = sectionRef.current
      if (!element) return
      const rect = element.getBoundingClientRect()
      const scrollable = element.offsetHeight - window.innerHeight
      setProgress(clamp(-rect.top / Math.max(1, scrollable)))
    }

    const onScroll = () => {
      if (!rafRef.current) rafRef.current = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="wheel-story" id="engineering" ref={sectionRef}>
      <div className="wheel-sticky">
        <div className="sequence-header">
          <p className="eyebrow"><span /> Component study</p>
          <p>Scroll sequence / 001</p>
        </div>

        <div className="sequence-copy" aria-live="polite">
          <p className="sequence-index">{stages[activeStage].label}</p>
          <h2>{stages[activeStage].title}</h2>
          <p>{stages[activeStage].body}</p>
        </div>

        <div className="wheel-visual" style={{ '--sequence-progress': progress }}>
          <div className="wheel-halo" aria-hidden="true" />
          <div className="wheel-prototype" style={{ opacity: 1 - finalReveal }}>
            <WheelAssembly progress={assemblyProgress} />
          </div>
          <img
            className="wheel-final-frame"
            src="/assets/higgsfield/wheel-exploded-a01.png"
            alt="Horizontal exploded view of the wheel, brake and suspension architecture"
            draggable="false"
            style={{ opacity: finalReveal, transform: `scale(${1.025 - finalReveal * 0.025})` }}
          />
        </div>

        <div className="part-label label-active" key={stages[activeStage].annotation}>
          {stages[activeStage].annotation}
        </div>

        <div className="sequence-rail" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
          {stages.map((stage, index) => (
            <i key={stage.label} className={index <= activeStage ? 'is-active' : ''} />
          ))}
        </div>

        <div className="sequence-footer">
          <span>{String(Math.round(progress * 100)).padStart(3, '0')}</span>
          <small>/ 100 · mechanical timeline</small>
        </div>
      </div>
    </section>
  )
}
