import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '../data/projects'
import { defaultTransition } from '../lib/motion'

type Props = {
  project: Project
  index: number
  /** Smaller card for carousel / horizontal layouts */
  compact?: boolean
}

export function ProjectCard({ project, index, compact = false }: Props) {
  const reduceMotion = useReducedMotion()
  const primaryHref = project.links[0]?.href

  const baseArticle =
    'group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] transition-colors hover:border-[var(--color-accent)]/40'

  /** Three cards + two gap-4 gaps fit the carousel container; mobile uses one comfortable column. */
  const layoutClass = compact
    ? 'w-[min(100vw-2.5rem,320px)] shrink-0 snap-start p-4 sm:p-5 md:w-[calc((100cqw-2rem)/3)] md:min-w-0 md:max-w-none'
    : 'p-6 md:p-8'

  const hoverLift = reduceMotion
    ? undefined
    : compact
      ? {
          y: -4,
          boxShadow: '0 16px 36px -14px rgba(45, 212, 191, 0.14)',
        }
      : {
          y: -6,
          boxShadow: '0 20px 40px -15px rgba(45, 212, 191, 0.15)',
        }

  const scrollMotion = compact
    ? { whileHover: hoverLift }
    : {
        initial: reduceMotion ? false : { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition:
          reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: index * 0.08 },
        whileHover: hoverLift,
      }

  const interactive =
    primaryHref != null &&
    'cursor-pointer no-underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]'

  const rootClass = [baseArticle, layoutClass, interactive].filter(Boolean).join(' ')

  const dataAttrs = compact ? { 'data-project-card': 'true' as const } : {}

  const body = (
    <>
      {project.imageSrc ? (
        <div
          className={`overflow-hidden rounded-xl border border-[var(--color-border)] ${compact ? 'mb-3' : 'mb-4'}`}
        >
          <img
            src={project.imageSrc}
            alt=""
            loading="lazy"
            decoding="async"
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100 ${compact ? 'aspect-[4/3]' : 'aspect-video'}`}
          />
        </div>
      ) : null}
      <h3
        className={`font-display font-semibold text-[var(--color-text-heading)] ${compact ? 'text-lg' : 'text-xl'}`}
      >
        {project.title}
      </h3>
      <p
        className={`mt-2 flex-grow text-[var(--color-text)] ${compact ? 'text-sm leading-relaxed line-clamp-4' : ''}`}
      >
        {project.description}
      </p>
      <ul className={`flex flex-wrap gap-2 ${compact ? 'mt-3' : 'mt-4'}`}>
        {project.tags.map((tag) => (
          <li key={tag}>
            <span
              className={`inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg-muted)] font-medium text-[var(--color-text-heading)] ${compact ? 'px-2.5 py-0.5 text-[11px]' : 'px-3 py-1 text-xs'}`}
            >
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </>
  )

  if (primaryHref) {
    return (
      <motion.a
        href={primaryHref}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`${project.title} — open live site in a new tab`}
        className={rootClass}
        {...scrollMotion}
        {...dataAttrs}
      >
        {body}
      </motion.a>
    )
  }

  return (
    <motion.article className={rootClass} {...scrollMotion} {...dataAttrs}>
      {body}
    </motion.article>
  )
}
