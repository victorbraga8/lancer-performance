export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <p className="hero-ghost" aria-hidden="true">LANCER</p>

      <div className="hero-copy">
        <p className="eyebrow"><span /> Performance, evolved</p>
        <h1>Engineered<br />to <em>respond.</em></h1>
        <p className="hero-intro">
          A study in controlled force. Every surface, system and movement tuned
          around the driver.
        </p>
        <a className="text-link" href="#engineering">
          Deconstruct the performance <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-meta" aria-label="Concept information">
        <div><small>Discipline</small><strong>Precision</strong></div>
        <div><small>Character</small><strong>Uncompromised</strong></div>
        <div><small>Edition</small><strong>Concept 01</strong></div>
      </div>

      <div className="car-stage">
        <div className="studio-light" aria-hidden="true" />
        <img
          className="hero-car-image"
          src="/assets/higgsfield/lancer-hero.png"
          alt="Dark graphite Mitsubishi Lancer in a cinematic studio"
          fetchPriority="high"
          draggable="false"
        />
        <p className="concept-label">Higgsfield generation · Concept visualization</p>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to inspect</span><i />
      </div>
    </section>
  )
}
