const DiamondMark = () => (
  <svg viewBox="0 0 42 38" aria-hidden="true" className="brand-mark">
    <path d="M21 1 11 18h20L21 1Z" />
    <path d="m10 19-10 18h20L10 19Z" />
    <path d="m32 19-10 18h20L32 19Z" />
  </svg>
)

export default function Header({ compact }) {
  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <a className="brand" href="#hero" aria-label="Lancer concept home">
        <DiamondMark />
        <span><b>MITSUBISHI</b><small>LANCER CONCEPT</small></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#engineering">Engineering</a>
        <a href="#process">Process</a>
        <a href="#performance">Performance</a>
      </nav>
      <a className="header-cta" href="#engineering">Inspect the system <span aria-hidden="true">↓</span></a>
    </header>
  )
}
