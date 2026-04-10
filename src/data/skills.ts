/**
 * Default: https://cdn.simpleicons.org/{slug}
 * Some brands (e.g. AWS) are not served on that CDN; use the Simple Icons npm files on jsDelivr instead.
 */
const ICON_URL_OVERRIDES: Record<string, string> = {
  amazonaws:
    'https://cdn.jsdelivr.net/npm/simple-icons/icons/amazonaws.svg',
}
export type SkillItem = {
  name: string
  iconSlug: string
}

export type SkillGroup = {
  group: string
  items: SkillItem[]
}

export const techSkills: SkillGroup[] = [
  {
    group: 'Frontend',
    items: [
      { name: 'JavaScript', iconSlug: 'javascript' },
      { name: 'React', iconSlug: 'react' },
      { name: 'Next.js', iconSlug: 'nextdotjs' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { name: 'Express', iconSlug: 'express' },
      { name: 'Node.js', iconSlug: 'nodedotjs' },
    ],
  },
  {
    group: 'Data',
    items: [
      { name: 'MongoDB', iconSlug: 'mongodb' },
      { name: 'PostgreSQL', iconSlug: 'postgresql' },
    ],
  },
  {
    group: 'Cloud',
    items: [{ name: 'AWS', iconSlug: 'amazonaws' }],
  },
]

export const softSkills = [
  'Communication',
  'Team collaboration',
  'Ownership',
  'Problem-solving',
] as const

export function skillIconUrl(iconSlug: string): string {
  return ICON_URL_OVERRIDES[iconSlug] ?? `https://cdn.simpleicons.org/${iconSlug}`
}
