import { useState } from 'react'
import navAvatar from '../assets/theo.jpg'
import { profile } from '../data/profile'

const nav = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight text-[var(--color-text-heading)] transition-colors hover:text-[var(--color-accent)]"
        >
          <img
            src={navAvatar}
            alt=""
            className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-[var(--color-accent)]/35 ring-offset-2 ring-offset-[var(--color-bg)]"
            width={36}
            height={36}
            decoding="async"
          />
          <span>
            {profile.shortName}
            <span className="text-[var(--color-text)]">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:bg-[var(--color-accent-dim)] hover:text-[var(--color-text-heading)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] p-2 text-[var(--color-text-heading)] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-4 md:hidden"
          aria-label="Mobile primary"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-[var(--color-text)] hover:bg-[var(--color-accent-dim)] hover:text-[var(--color-text-heading)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
