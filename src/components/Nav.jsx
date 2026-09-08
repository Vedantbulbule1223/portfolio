import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-line-soft/70 bg-ink/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-mono text-sm tracking-wide text-bone">
          VB<span className="text-copper">.</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs tracking-wide text-muted transition-colors hover:text-copper"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden font-mono text-xs tracking-wide text-copper underline decoration-copper/40 underline-offset-4 hover:text-copper-bright md:inline"
        >
          Start a project
        </a>

        <button
          className="font-mono text-xs text-bone md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line-soft/70 px-6 py-4 md:hidden">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2 font-mono text-sm text-muted hover:text-copper"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="py-2 font-mono text-sm text-copper"
          >
            Start a project
          </a>
        </nav>
      )}
    </header>
  )
}
