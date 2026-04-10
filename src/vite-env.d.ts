/// <reference types="vite/client" />

declare module '*.jsx' {
  import type { ComponentType } from 'react'
  const component: ComponentType<Record<string, unknown>>
  export default component
}

interface ImportMetaEnv {
  /** Formspree: form endpoint URL (POST as multipart). Example: https://formspree.io/f/xxxxx */
  readonly VITE_CONTACT_FORM_URL?: string
  /** Web3Forms: access key from https://web3forms.com (JSON POST) */
  readonly VITE_WEB3FORMS_ACCESS_KEY?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
