export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />
      <p className="hero-ghost" aria-hidden="true">LANCER</p>

      <div className="hero-copy">
        <p className="eyebrow"><span /> Mechanical architecture / 001</p>
        <h1>
          <span className="hero-title-line">Engineered to</span>
          <span className="hero-title-line"><em>respond.</em></span>
        </h1>
        <p className="hero-intro">
          Performance begins inside the assembly. Follow the load path from
          contact patch to suspension response.
        </p>
        <a className="text-link" href="#engineering">
          Deconstruct the system <span aria-hidden="true">↓</span>
        </a>
      </div>

      <div className="hero-meta" aria-label="Concept information">
        <div><small>Focus</small><strong>Wheel / suspension</strong></div>
        <div><small>Sequence</small><strong>Scroll controlled</strong></div>
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
        <p className="concept-label">Concept visualization · Mechanical study</p>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll to inspect</span><i />
      </div>
    </section>
  )
}
