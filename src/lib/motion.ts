import type { Transition } from 'motion/react'

export const defaultTransition: Transition = {
  duration: 0.45,
  ease: [0.22, 1, 0.36, 1],
}

export function getFadeUp(reduceMotion: boolean | null) {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0 },
      viewport: { once: true, margin: '-40px' },
    }
  }
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: defaultTransition,
    viewport: { once: true, margin: '-40px' },
  }
}
