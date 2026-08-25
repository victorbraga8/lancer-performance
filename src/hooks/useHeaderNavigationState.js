import { useEffect, useState } from 'react'
import { headerNavigationItems } from '../data/headerNavigation'

const headerOffset = 75

const resolveActiveSection = () => {
  const activeItem = headerNavigationItems.find(({ id }) => {
    const section = document.getElementById(id)
    if (!section) return false

    const bounds = section.getBoundingClientRect()
    return bounds.top <= headerOffset && bounds.bottom > headerOffset
  })

  return activeItem?.id ?? null
}

export default function useHeaderNavigationState() {
  const [state, setState] = useState({ compact: false, activeSection: null })

  useEffect(() => {
    let animationFrame = null

    const update = () => {
      animationFrame = null
      const nextState = {
        compact: window.scrollY > 32,
        activeSection: resolveActiveSection(),
      }

      setState((currentState) => (
        currentState.compact === nextState.compact
        && currentState.activeSection === nextState.activeSection
          ? currentState
          : nextState
      ))
    }

    const onViewportChange = () => {
      if (animationFrame === null) animationFrame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onViewportChange, { passive: true })
    window.addEventListener('resize', onViewportChange)

    return () => {
      window.removeEventListener('scroll', onViewportChange)
      window.removeEventListener('resize', onViewportChange)
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
    }
  }, [])

  return state
}
