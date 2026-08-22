export default function DesignLanguage() {
  return (
    <section className="design section-pad" id="design">
      <div className="design-visual">
        <img
          src="/assets/higgsfield/lancer-front-detail.png"
          alt="Close-up of the Mitsubishi Lancer front design"
          loading="lazy"
          draggable="false"
        />
        <span className="visual-code">DL / 03</span>
      </div>

      <div className="design-copy">
        <p className="eyebrow"><span /> Design language</p>
        <h2>Presence,<br /><em>without excess.</em></h2>
        <p className="design-lead">
          The Lancer silhouette is treated as a technical instrument: low,
          planted and tensioned around its core.
        </p>
        <div className="design-points">
          <div><span>01</span><p><strong>Focused front</strong>Sharp geometry creates an unmistakable line of sight.</p></div>
          <div><span>02</span><p><strong>Surface tension</strong>Controlled highlights reveal strength without decoration.</p></div>
          <div><span>03</span><p><strong>Planted stance</strong>Every proportion reinforces stability and intent.</p></div>
        </div>
      </div>
    </section>
  )
}
