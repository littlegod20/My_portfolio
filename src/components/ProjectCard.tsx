import { motion, useReducedMotion } from 'motion/react'
import type { Project } from '../data/projects'
import { defaultTransition } from '../lib/motion'

type Props = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: Props) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 transition-colors hover:border-[var(--color-accent)]/40 md:p-8"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={
        reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: index * 0.08 }
      }
      whileHover={
        reduceMotion
          ? undefined
          : { y: -6, boxShadow: '0 20px 40px -15px rgba(45, 212, 191, 0.15)' }
      }
    >
      {project.imageSrc ? (
        <div className="mb-4 overflow-hidden rounded-xl border border-[var(--color-border)]">
          <img
            src={project.imageSrc}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        </div>
      ) : null}
      <h3 className="font-display text-xl font-semibold text-[var(--color-text-heading)]">
        {project.title}
      </h3>
      <p className="mt-2 flex-grow text-[var(--color-text)]">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-block rounded-full border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-3 py-1 text-xs font-medium text-[var(--color-text-heading)]">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href + link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            className="text-sm font-semibold text-[var(--color-accent)] underline-offset-4 transition-colors hover:underline"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </motion.article>
  )
}
