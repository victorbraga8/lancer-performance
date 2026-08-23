const disciplines = [
  { number: '01', title: 'Power delivery', stat: 'Immediate', copy: 'Response shaped to arrive with intent, then remain composed.' },
  { number: '02', title: 'Traction logic', stat: 'Connected', copy: 'Confidence translated through every point of contact.' },
  { number: '03', title: 'Brake control', stat: 'Measured', copy: 'Progressive force with a clear, communicative pedal feel.' },
  { number: '04', title: 'Chassis balance', stat: 'Deliberate', copy: 'Movement managed as one precise, predictable system.' },
]

export default function Performance() {
  return (
    <section className="performance section-pad" id="performance">
      <div className="section-heading">
        <p className="eyebrow"><span /> Performance consequence</p>
        <h2>Response is built<br /><em>from within.</em></h2>
        <p>The vehicle's character is the visible result of a connected mechanical system.</p>
      </div>

      <div className="discipline-grid">
        {disciplines.map((item) => (
          <article className="discipline-card" key={item.number}>
            <div className="card-top"><span>{item.number}</span><i /></div>
            <p>{item.title}</p>
            <strong>{item.stat}</strong>
            <small>{item.copy}</small>
          </article>
        ))}
      </div>

      <p className="concept-note">Conceptual attributes shown for creative visualization only.</p>
    </section>
  )
}
