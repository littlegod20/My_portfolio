import { useReducedMotion } from 'motion/react'
import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="projects" eyebrow="Work" title="Projects">
      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-muted)]/50 p-10 text-center text-[var(--color-text)]">
          Add your projects in <code className="text-[var(--color-text-heading)]">src/data/projects.ts</code>.
        </p>
      ) : reduceMotion ? (
        <div
          className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible px-5 pb-2 md:-mx-8 md:px-8"
          role="list"
          aria-label="Projects"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} compact />
          ))}
        </div>
      ) : (
        <div className="-mx-5 overflow-hidden pl-5 pr-5 md:-mx-8 md:pl-8 md:pr-8">
          <div
            className="animate-projects-marquee flex w-max gap-4 will-change-transform"
            role="list"
            aria-label="Projects"
          >
            {[...projects, ...projects].map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
                index={index}
                compact
              />
            ))}
          </div>
        </div>
      )}
    </Section>
  )
}
