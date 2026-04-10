import { motion, useReducedMotion } from 'motion/react'
import { softSkills, techSkills } from '../data/skills'
import { defaultTransition } from '../lib/motion'
import { Section } from './Section'
import { SkillIcon } from './SkillIcon'

export function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills & strengths">
      <div className="space-y-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techSkills.map((group, gi) => (
            <motion.div
              key={group.group}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={
                reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: gi * 0.06 }
              }
            >
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                {group.group}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <span className="flex items-center gap-3 text-[var(--color-text-heading)]">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-muted)] p-1.5"
                        aria-hidden
                      >
                        <SkillIcon iconSlug={item.iconSlug} label={item.name} />
                      </span>
                      <span className="font-medium">{item.name}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-muted)]/60 px-6 py-8 md:px-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : defaultTransition}
        >
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-text-heading)]">
            How I work
          </h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {softSkills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-4 py-2 text-sm font-medium text-[var(--color-text)]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
