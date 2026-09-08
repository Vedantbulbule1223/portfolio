import { useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

// Optional: set VITE_FORMSPREE_ID in your .env to wire this form up to
// https://formspree.io (free tier, no backend needed). Without it, the
// form still works via a mailto: link.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const initialForm = { name: '', email: '', message: '' }

export default function Contact({ profile }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function mailtoHref() {
    const subject = encodeURIComponent(`Freelance inquiry from ${form.name || 'your site'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || ''} (${form.email || ''})`
    )
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!FORMSPREE_ID) {
      window.location.href = mailtoHref()
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="07" title="Let's build something" />

      <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="max-w-sm text-lg leading-relaxed text-muted">
            Taking on freelance and contract work across AI/ML systems, agentic workflows and
            full-stack products. Tell me what you're building.
          </p>

          <dl className="mt-10 space-y-4 font-mono text-sm">
            <div className="flex gap-3">
              <dt className="text-muted">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-copper hover:text-copper-bright">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted">Phone</dt>
              <dd className="text-bone">{profile.phone}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted">GitHub</dt>
              <dd>
                <a href={profile.links.github} target="_blank" rel="noreferrer" className="text-bone hover:text-copper">
                  Vedantbulbule1223
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-bone hover:text-copper">
                  vedant-bulbule-aiml
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="blueprint space-y-5 border border-line-soft p-6 md:p-8">
          <div>
            <label htmlFor="name" className="coord mb-2 block">
              NAME
            </label>
            <input
              id="name"
              name="name"
              required
              value={form.name}
              onChange={update('name')}
              className="w-full border-b border-line bg-transparent py-2 text-bone outline-none transition-colors focus:border-copper"
            />
          </div>
          <div>
            <label htmlFor="email" className="coord mb-2 block">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={update('email')}
              className="w-full border-b border-line bg-transparent py-2 text-bone outline-none transition-colors focus:border-copper"
            />
          </div>
          <div>
            <label htmlFor="message" className="coord mb-2 block">
              PROJECT DETAILS
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={update('message')}
              className="w-full resize-none border-b border-line bg-transparent py-2 text-bone outline-none transition-colors focus:border-copper"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full rounded-sm bg-copper px-5 py-3 font-mono text-xs tracking-wide text-ink-deep transition-colors hover:bg-copper-bright disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'sent' && (
            <p className="font-mono text-xs text-copper">
              {FORMSPREE_ID ? "Sent — I'll reply within a day or two." : 'Opening your email client…'}
            </p>
          )}
          {status === 'error' && (
            <p className="font-mono text-xs text-red-400">
              Something went wrong —{' '}
              <a href={mailtoHref()} className="underline">
                email me directly instead
              </a>
              .
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
