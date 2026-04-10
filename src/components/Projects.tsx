import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Projects">
      {projects.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-muted)]/50 p-10 text-center text-[var(--color-text)]">
          Add your projects in <code className="text-[var(--color-text-heading)]">src/data/projects.ts</code>.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      )}
    </Section>
  )
}
