export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  links: ProjectLink[]
  /** Thumbnail URL (e.g. Unsplash) */
  imageSrc?: string
}

export const projects: Project[] = [
  {
    title: 'Timesheet',
    description:
      'Web app to log hours, review entries, and keep time tracking clear—built for quick capture and a calm, readable overview.',
    tags: ['React', 'TypeScript', 'Vite'],
    links: [
      {
        label: 'Live',
        href: 'https://timesheet-webapp-client.vercel.app/',
      },
    ],
    imageSrc:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Kobi Commerce',
    description:
      'E-commerce storefront with product browsing, cart flow, and a polished shopping experience built for the web.',
    tags: ['React', 'Next.js', 'E-commerce'],
    links: [{ label: 'Live', href: 'https://kobi-commerce-web.vercel.app/' }],
    imageSrc:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Online Task Management',
    description:
      'Task management UI to organize work, track items, and keep projects moving—fast, focused, and easy to scan.',
    tags: ['React', 'TypeScript', 'Vite'],
    links: [
      {
        label: 'Live',
        href: 'https://online-task-mangement-system-fronte.vercel.app',
      },
    ],
    imageSrc:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'OG Typer',
    description:
      'Typing practice app for speed and accuracy—clean interface built for drilling words and improving WPM.',
    tags: ['React', 'TypeScript'],
    links: [{ label: 'Live', href: 'https://og-typer.vercel.app/' }],
    imageSrc:
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80',
  },
]
