/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form endpoint URL (POST). Example: https://formspree.io/f/xxxxx */
  readonly VITE_CONTACT_FORM_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
