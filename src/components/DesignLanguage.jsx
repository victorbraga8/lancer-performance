export default function DesignLanguage() {
  return (
    <section className="design section-pad" id="process">
      <div className="design-visual">
        <img
          src="/assets/higgsfield/wheel-exploded-a01.png"
          alt="Close-up of the suspension and mounting architecture"
          loading="lazy"
          draggable="false"
        />
        <span className="visual-code">PROCESS / 02</span>
      </div>

      <div className="design-copy">
        <p className="eyebrow"><span /> Construction process</p>
        <h2>Authority lives<br /><em>in the assembly.</em></h2>
        <p className="design-lead">
          Every interface has a role in the same mechanical path. Value comes
          from how the system is composed, not from decoration around it.
        </p>
        <div className="design-points">
          <div><span>01</span><p><strong>Load path</strong>Each component transfers input into the next layer of the assembly.</p></div>
          <div><span>02</span><p><strong>Controlled interfaces</strong>Spacing and alignment make the mechanical relationships legible.</p></div>
          <div><span>03</span><p><strong>System continuity</strong>Performance emerges from the complete architecture working as one.</p></div>
        </div>
      </div>
    </section>
  )
}
