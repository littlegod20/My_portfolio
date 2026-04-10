import heroPhoto from '../assets/theo.jpg'

export const profile = {
  name: 'Theophilus Asante Frimpong',
  shortName: 'Theophilus',
  title: 'Full Stack Engineer',
  yearsExperience: 2,
  tagline:
    'I build reliable web products end to end—polished interfaces, solid APIs, and data layers that scale.',
  bio: `I'm a full stack engineer with over two years of experience shipping products with JavaScript, React, and Node ecosystems. I care about clear communication, clean architecture, and working well with designers and other engineers to deliver features users actually feel.`,
  email: 'theophilusfrimpong17@gmail.com',
  github: 'https://github.com/littlegod20',
  linkedin: 'https://www.linkedin.com/in/theophilous-frimpong-7844b2236/',
  /** Optional PDF in /public */
  resumeUrl: undefined as string | undefined,
  /** Vite-resolved path; replace import to swap the main hero portrait */
  heroImageSrc: heroPhoto,
}
