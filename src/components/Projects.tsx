import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

const GAP_PX = 16

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18l6-6-6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Projects() {
  const reduceMotion = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    const max = scrollWidth - clientWidth
    setCanPrev(scrollLeft > 2)
    setCanNext(scrollLeft < max - 2)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    el.addEventListener('scroll', updateScrollState, { passive: true })
    return () => {
      ro.disconnect()
      el.removeEventListener('scroll', updateScrollState)
    }
  }, [updateScrollState])

  const scrollStep = useCallback(
    (dir: -1 | 1) => {
      const el = scrollRef.current
      if (!el) return
      const card = el.querySelector<HTMLElement>('[data-project-card]')
      const step = card ? card.offsetWidth + GAP_PX : Math.max(280, el.clientWidth * 0.85)
      const behavior = reduceMotion ? ('auto' as const) : ('smooth' as const)
      el.scrollBy({ left: dir * step, behavior })
    },
    [reduceMotion],
  )

  return (
    <Section id="projects" eyebrow="Work" title="Projects">
      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-muted)]/50 p-10 text-center text-[var(--color-text)]">
          Add your projects in <code className="text-[var(--color-text-heading)]">src/data/projects.ts</code>.
        </p>
      ) : (
        <div className="-mx-5 md:-mx-8">
          <div className="flex items-center gap-2 px-5 sm:gap-3 md:px-8">
            <button
              type="button"
              aria-label="Previous projects"
              disabled={!canPrev}
              onClick={() => scrollStep(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-heading)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-text-heading)] sm:h-11 sm:w-11"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div
              ref={scrollRef}
              className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible pb-2 [container-type:inline-size] overscroll-x-contain scroll-smooth touch-pan-x [-webkit-overflow-scrolling:touch] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="list"
              aria-label="Projects"
            >
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} compact />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next projects"
              disabled={!canNext}
              onClick={() => scrollStep(1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] text-[var(--color-text-heading)] shadow-sm transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-[var(--color-border)] disabled:hover:text-[var(--color-text-heading)] sm:h-11 sm:w-11"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>
      )}
    </Section>
  )
}
