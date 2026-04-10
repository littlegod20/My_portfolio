import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile'
import { getFadeUp } from '../lib/motion'
import { ContactForm } from './ContactForm'
import { Section } from './Section'

const links = [
  { label: 'Email', href: `mailto:${profile.email}` },
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
] as const

export function Contact() {
  const reduceMotion = useReducedMotion()
  const fade = getFadeUp(reduceMotion)

  return (
    <Section id="contact" eyebrow="Contact" title="Let’s work together">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <motion.div className="space-y-6" {...fade}>
          <p className="text-lg text-[var(--color-text)]">
            Have a role, freelance build, or open source idea? Send a message—I typically reply within a few
            days.
          </p>
          <ul className="flex flex-wrap gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noreferrer noopener'}
                  className="inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {profile.resumeUrl ? (
              <li>
                <a
                  href={profile.resumeUrl}
                  className="inline-flex rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-muted)] px-4 py-2.5 text-sm font-semibold text-[var(--color-text-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Résumé
                </a>
              </li>
            ) : null}
          </ul>
        </motion.div>
        <motion.div {...fade}>
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  )
}
