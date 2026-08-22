export default function FinalCta() {
  return (
    <section className="final-cta" id="contact">
      <img
        className="cta-background"
        src="/assets/higgsfield/lancer-rear-cta.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable="false"
      />
      <div className="cta-line" aria-hidden="true" />
      <p className="eyebrow"><span /> The next movement</p>
      <h2>Built to be felt.<br /><em>Ready to be driven.</em></h2>
      <p>Step closer to the Lancer performance concept.</p>
      <a className="primary-button" href="#hero">
        <span>Return to the machine</span><i aria-hidden="true">↗</i>
      </a>

      <footer>
        <div><strong>LANCER</strong><small>Performance concept / 2026</small></div>
        <p>Independent concept experience. Mitsubishi and Lancer are trademarks of their respective owners.</p>
        <a href="#hero">Back to top ↑</a>
      </footer>
    </section>
  )
}
