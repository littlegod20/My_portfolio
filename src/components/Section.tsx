import type { ReactNode } from 'react'

type Props = {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, eyebrow, children, className = '' }: Props) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 px-5 py-20 md:scroll-mt-28 md:px-8 md:py-28 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 md:mb-14">
          {eyebrow ? (
            <p className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-heading`}
            className="font-display text-3xl font-semibold tracking-tight text-[var(--color-text-heading)] md:text-4xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  )
}
