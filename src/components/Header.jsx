import { headerNavigationItems } from '../data/headerNavigation'

const DiamondMark = () => (
  <svg viewBox="0 0 42 38" aria-hidden="true" className="brand-mark">
    <path d="M21 1 11 18h20L21 1Z" />
    <path d="m10 19-10 18h20L10 19Z" />
    <path d="m32 19-10 18h20L32 19Z" />
  </svg>
)

export default function Header({ compact, activeSection }) {
  return (
    <header className={`site-header ${compact ? 'is-compact' : ''}`}>
      <a className="brand" href="#hero" aria-label="Lancer concept home">
        <DiamondMark />
        <span><b>MITSUBISHI</b><small>LANCER CONCEPT</small></span>
      </a>
      <nav aria-label="Primary navigation">
        {headerNavigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-current={activeSection === item.id ? 'location' : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#process">Inspect the system <span aria-hidden="true">↓</span></a>
    </header>
  )
}
