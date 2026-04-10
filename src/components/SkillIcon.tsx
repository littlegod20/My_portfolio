import { skillIconUrl } from '../data/skills'

type Props = {
  iconSlug: string
  label: string
  size?: 'sm' | 'md'
}

const sizeClass = {
  sm: 'h-5 w-5',
  md: 'h-7 w-7',
} as const

const pxSize = {
  sm: 20,
  md: 28,
} as const

export function SkillIcon({ iconSlug, label, size = 'md' }: Props) {
  return (
    <img
      src={skillIconUrl(iconSlug)}
      alt=""
      width={pxSize[size]}
      height={pxSize[size]}
      className={`${sizeClass[size]} shrink-0 object-contain`}
      loading="lazy"
      decoding="async"
      title={label}
    />
  )
}
