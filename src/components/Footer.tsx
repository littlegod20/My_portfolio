import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] px-5 py-10 md:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 text-center text-sm text-[var(--color-text)] sm:flex-row sm:text-left">
        <p>
          © {year} {profile.name}. Built with React & Vite.
        </p>
        <a
          href="#top"
          className="font-medium text-[var(--color-accent)] transition-opacity hover:opacity-80"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
