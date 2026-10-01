import { useEffect, useState } from 'react'
import { PERSON } from '../content'

const LINKS = [
  { href: '#trabalho', label: 'Trabalho' },
  { href: '#trajetoria', label: 'Trajetória' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a href="#topo" className="nav-brand" aria-label={`${PERSON.name}, início`}>
          <span className="nav-name">{PERSON.name}</span>
          <span className="nav-studio">{PERSON.handle}</span>
        </a>
        <nav aria-label="Principal">
          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
