import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile'
import { getFadeUp } from '../lib/motion'
import { Section } from './Section'

export function About() {
  const reduceMotion = useReducedMotion()
  const fade = getFadeUp(reduceMotion)

  return (
    <Section id="about" eyebrow="About" title="Building with clarity and care">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <motion.div {...fade}>
          <p className="text-lg leading-relaxed text-[var(--color-text)] md:text-xl">
            {profile.bio}
          </p>
        </motion.div>
        <motion.dl
          className="grid grid-cols-2 gap-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8"
          {...fade}
        >
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Experience
            </dt>
            <dd className="mt-1 font-display text-2xl font-bold text-[var(--color-text-heading)]">
              {profile.yearsExperience}+ years
            </dd>
          </div>
          <div>
            <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Focus
            </dt>
            <dd className="mt-1 font-display text-2xl font-bold text-[var(--color-text-heading)]">
              {profile.title}
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="font-display text-xs font-semibold uppercase tracking-wider text-[var(--color-text)]">
              Stack snapshot
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-[var(--color-text)]">
              JavaScript · React · Express · Next.js · AWS · MongoDB · PostgreSQL
            </dd>
          </div>
        </motion.dl>
      </div>
    </Section>
  )
}
