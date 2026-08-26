import { motion, useReducedMotion } from "motion/react";

export default function FinalCta() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="final-cta" id="closing">
      <motion.img
        className="cta-background"
        src="/assets/higgsfield/lancer-rear-cta.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        draggable="false"
        initial={reducedMotion ? false : { opacity: 0, scale: 1.045 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
      />
      <div className="closing-axis" aria-hidden="true">
        <i />
      </div>

      <div className="closing-content">
        <p className="eyebrow">
          <span /> The complete system
        </p>
        <h2>
          Every response
          <br />
          <em>starts within.</em>
        </h2>
        <p>Return to the beginning and inspect the architecture again.</p>
        <a className="primary-button" href="#hero">
          <span>Return to the machine</span>
          <i aria-hidden="true">↗</i>
        </a>
      </div>

      <footer>
        <div>
          <strong>LANCER</strong>
          <small>Performance concept / 2026</small>
        </div>
        <p>
          Independent concept experience. Mitsubishi and Lancer are trademarks
          of their respective owners.
        </p>
        {/* <a href="#hero">Back to top ↑</a> */}
      </footer>
    </section>
  );
}
