import { motion, useReducedMotion } from 'motion/react'
import { profile } from '../data/profile'
import { defaultTransition } from '../lib/motion'

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="top"
      className="relative px-5 pb-20 pt-12 md:px-8 md:pb-28 md:pt-16"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1fr_minmax(260px,340px)] lg:items-center lg:gap-16">
        <div>
          <motion.p
            className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion ? { duration: 0 } : defaultTransition}
          >
            Full stack engineer
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-[var(--color-text-heading)] sm:text-5xl md:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.05 }
            }
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-text)] md:text-xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.1 }
            }
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={
              reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.15 }
            }
          >
            {['View work', 'Get in touch'].map((label, i) => (
              <motion.a
                key={label}
                href={i === 0 ? '#projects' : '#contact'}
                className={
                  i === 0
                    ? 'inline-flex items-center justify-center rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-accent-glow)] transition-transform hover:scale-[1.02] active:scale-[0.98]'
                    : 'inline-flex items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-6 py-3 text-sm font-semibold text-[var(--color-text-heading)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                }
                {...(reduceMotion
                  ? {}
                  : {
                      whileHover: { y: -2 },
                      whileTap: { scale: 0.98 },
                    })}
              >
                {label}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <HeroPortrait reduceMotion={reduceMotion} />
      </div>
    </section>
  )
}

function HeroPortrait({ reduceMotion }: { reduceMotion: boolean | null }) {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-[320px] lg:mx-0 lg:max-w-none"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={reduceMotion ? { duration: 0 } : { ...defaultTransition, delay: 0.12 }}
    >
      <div
        className="relative aspect-square overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-bg-muted)] shadow-2xl shadow-black/20"
        style={{
          boxShadow:
            '0 0 0 1px rgba(45, 212, 191, 0.15), 0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <img
          src={profile.heroImageSrc}
          alt={`${profile.shortName}, ${profile.title}`}
          className="h-full w-full object-cover"
          width={640}
          height={480}
          decoding="async"
        />
      </div>
      <div
        className="pointer-events-none absolute -inset-4 -z-10 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(45, 212, 191, 0.25), transparent 55%)',
        }}
        aria-hidden
      />
    </motion.div>
  )
}
