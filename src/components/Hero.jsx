import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

export default function Hero() {
  const sectionRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 54])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.035])

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <p className="hero-ghost" aria-hidden="true">LANCER</p>

      <motion.div
        className="hero-copy"
        initial={reducedMotion ? false : { opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <p className="eyebrow"><span /> Mechanical architecture / 001</p>
        <h1>
          <span className="hero-title-line">Engineered to</span>
          <span className="hero-title-line"><em>respond.</em></span>
        </h1>
        <p className="hero-intro">
          Performance begins inside the assembly. Follow the load path from
          contact patch to suspension response.
        </p>
        <a className="text-link" href="#process">
          Deconstruct the system <span aria-hidden="true">↓</span>
        </a>
      </motion.div>

      <div className="car-stage">
        <div className="studio-light" aria-hidden="true" />
        <div className="studio-rim-light" aria-hidden="true" />
        <motion.img
          className="hero-car-image"
          src="/assets/higgsfield/lancer-hero.png"
          alt="Dark graphite Mitsubishi Lancer in a cinematic studio"
          fetchPriority="high"
          draggable="false"
          initial={reducedMotion ? false : { opacity: 0, x: '4%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.35, ease: [0.2, 0.8, 0.2, 1] }}
          style={{ y: reducedMotion ? 0 : imageY, scale: reducedMotion ? 1 : imageScale }}
        />
        <div className="hero-floor-accent" aria-hidden="true" />
        <p className="concept-label">Concept visualization · Mechanical study</p>
      </div>
    </section>
  )
}
