import { type FormEvent, useState } from 'react'
import { profile } from '../data/profile'

const formspreeUrl = import.meta.env.VITE_CONTACT_FORM_URL
const web3AccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const formConfigured = Boolean(formspreeUrl || web3AccessKey)

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formConfigured) {
      setStatus('error')
      return
    }

    const form = e.currentTarget
    const fd = new FormData(form)
    const name = String(fd.get('name') ?? '')
    const email = String(fd.get('email') ?? '')
    const message = String(fd.get('message') ?? '')

    setStatus('loading')
    try {
      if (formspreeUrl) {
        const post = new FormData()
        post.append('name', name)
        post.append('email', email)
        post.append('message', message)
        post.append('_replyto', email)
        post.append('_subject', `Portfolio · ${profile.name}`)

        const res = await fetch(formspreeUrl, {
          method: 'POST',
          body: post,
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) throw new Error('Request failed')
      } else if (web3AccessKey) {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3AccessKey,
            name,
            email,
            message,
            subject: `Portfolio · ${profile.name}`,
            from_name: name,
          }),
        })
        const data = (await res.json()) as { success?: boolean; message?: string }
        if (!res.ok || !data.success) throw new Error(data.message ?? 'Request failed')
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const disabled = status === 'loading' || !formConfigured

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6 md:p-8">
      {!formConfigured ? (
        <p className="mb-4 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-200">
          Configure the contact form: copy{' '}
          <code className="rounded bg-black/30 px-1.5 py-0.5">.env.example</code> to{' '}
          <code className="rounded bg-black/30 px-1.5 py-0.5">.env</code> and set{' '}
          <code className="rounded bg-black/30 px-1.5 py-0.5">VITE_WEB3FORMS_ACCESS_KEY</code> or{' '}
          <code className="rounded bg-black/30 px-1.5 py-0.5">VITE_CONTACT_FORM_URL</code>, then restart
          the dev server.
        </p>
      ) : null}

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-heading)]">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text-heading)] placeholder:text-[var(--color-text)]/60 focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-heading)]">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text-heading)] placeholder:text-[var(--color-text)]/60 focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
            placeholder={profile.email}
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-heading)]">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-1.5 w-full resize-y rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text-heading)] placeholder:text-[var(--color-text)]/60 focus:border-[var(--color-accent)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]/30"
            placeholder="Tell me about your project or role…"
          />
        </div>
        <button
          type="submit"
          disabled={disabled}
          className="w-full rounded-xl bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] shadow-lg shadow-[var(--color-accent-glow)] transition-opacity hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </button>
      </form>

      {status === 'success' ? (
        <p className="mt-4 text-sm font-medium text-[var(--color-accent)]" role="status">
          Thanks — your message is on its way.
        </p>
      ) : null}
      {status === 'error' && formConfigured ? (
        <p className="mt-4 text-sm text-red-400" role="alert">
          Something went wrong. Try again or use the email link below.
        </p>
      ) : null}
    </div>
  )
}
