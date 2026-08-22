import { useEffect, useMemo, useRef, useState } from 'react'
import WheelAssembly from './WheelAssembly'
import { wheelFrameSources } from '../data/wheelFrames'

const stages = [
  { label: 'Assembly', title: 'A system in balance.', body: 'One complete unit. Every component carries force into the next.' },
  { label: '01 / Tire', title: 'Contact, controlled.', body: 'The first point of communication between driver, machine and road.' },
  { label: '02 / Rim', title: 'Strength, reduced.', body: 'A rigid architecture shaped to cut mass and sharpen response.' },
  { label: '03 / Brake', title: 'Force, measured.', body: 'Disc and caliper work in concert to deliver confidence under pressure.' },
  { label: '04 / Hub', title: 'Precision at the core.', body: 'The final connection. Compact, direct and engineered for repeatable motion.' },
]

const clamp = (value) => Math.min(1, Math.max(0, value))

export default function WheelSequence() {
  const sectionRef = useRef(null)
  const rafRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [loadedFrameSources, setLoadedFrameSources] = useState(new Set())

  const activeStage = Math.min(stages.length - 1, Math.floor(progress * stages.length))
  const frameIndex = useMemo(
    () => Math.max(0, Math.min(wheelFrameSources.length - 1, Math.round(progress * (wheelFrameSources.length - 1)))),
    [progress],
  )

  useEffect(() => {
    if (!wheelFrameSources.length) return undefined
    let cancelled = false
    const images = []

    wheelFrameSources.forEach((source) => {
      const image = new Image()
      image.onload = () => {
        if (!cancelled) {
          setLoadedFrameSources((current) => new Set(current).add(source))
        }
      }
      image.src = source
      images.push(image)
    })

    return () => {
      cancelled = true
      images.forEach((image) => { image.onload = null })
    }
  }, [])

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

  const usingFrames = wheelFrameSources.length > 0
  const currentSource = usingFrames ? wheelFrameSources[frameIndex] : null
  const frameReady = currentSource && loadedFrameSources.has(currentSource)

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

        <div className="wheel-visual">
          <div className="wheel-halo" aria-hidden="true" />
          {frameReady ? (
            <img
              className="wheel-frame"
              src={currentSource}
              alt="Higgsfield-generated exploded wheel sequence"
              draggable="false"
            />
          ) : (
            <WheelAssembly progress={progress} />
          )}
          <div className="part-label label-tire" style={{ opacity: progress > 0.2 ? 1 : 0 }}>Tire</div>
          <div className="part-label label-rim" style={{ opacity: progress > 0.38 ? 1 : 0 }}>Rim</div>
          <div className="part-label label-disc" style={{ opacity: progress > 0.55 ? 1 : 0 }}>Brake disc</div>
          <div className="part-label label-hub" style={{ opacity: progress > 0.78 ? 1 : 0 }}>Hub</div>
        </div>

        <div className="sequence-rail" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
          {stages.map((stage, index) => (
            <i key={stage.label} className={index <= activeStage ? 'is-active' : ''} />
          ))}
        </div>

        <div className="sequence-footer">
          <span>{String(frameIndex + 1).padStart(3, '0')}</span>
          <small>{usingFrames ? `/ ${String(wheelFrameSources.length).padStart(3, '0')} · Higgsfield` : '/ live prototype'}</small>
        </div>
      </div>
    </section>
  )
}
