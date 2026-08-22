import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import WheelSequence from './components/WheelSequence'
import Performance from './components/Performance'
import DesignLanguage from './components/DesignLanguage'
import FinalCta from './components/FinalCta'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site-shell">
      <Header compact={scrolled} />
      <main>
        <Hero />
        <WheelSequence />
        <Performance />
        <DesignLanguage />
        <FinalCta />
      </main>
    </div>
  )
}
