import { useReducedMotion } from 'motion/react'
import LiquidEther from './LiquidEther/LiquidEther.jsx'

/**
 * Full-viewport WebGL background (React Bits Liquid Ether).
 * Disabled when prefers-reduced-motion is on to save GPU and respect user preference.
 */
export function AppBackground() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return null
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 h-[100svh] min-h-[100svh] w-full"
      aria-hidden
    >
      <LiquidEther
        className="absolute inset-0 h-full w-full"
        style={{ width: '100%', height: '100%' }}
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={20}
        cursorSize={100}
        isViscous
        viscous={30}
        iterationsViscous={32}
        iterationsPoisson={32}
        resolution={0.5}
        isBounce={false}
        autoDemo
        autoSpeed={0.5}
        autoIntensity={2.2}
        takeoverDuration={0.25}
        autoResumeDelay={3000}
        autoRampDuration={0.6}
      />
    </div>
  )
}
