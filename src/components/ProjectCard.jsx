import { useState } from 'react'

const STATUS_LABEL = {
  shipped: 'Shipped',
  active: 'Active',
  research: 'Research',
}

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="blueprint group h-full border border-line-soft bg-ink-panel/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)]">
      <div className="flex items-start justify-between gap-4">
        <p className="coord">{project.coords}</p>
        <span className="font-mono text-[11px] uppercase text-muted">
          {STATUS_LABEL[project.status] || project.status}
        </span>
      </div>

      <h3 className="mt-4 font-display text-2xl text-bone">{project.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <button
        onClick={() => setOpen((v) => !v)}
        className="mt-4 font-mono text-xs text-copper hover:text-copper-bright"
        aria-expanded={open}
      >
        {open ? 'Hide spec' : 'View spec'}
      </button>

      {open && (
        <ul className="mt-4 space-y-2 border-t border-line-soft pt-4">
          {project.details.map((d, i) => (
            <li key={i} className="text-sm leading-relaxed text-bone/80">
              — {d}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2 border-t border-line-soft pt-4">
        {project.tech.map((t) => (
          <span key={t} className="rounded-sm bg-ink px-2 py-1 font-mono text-[11px] text-muted">
            {t}
          </span>
        ))}
      </div>

      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-xs text-bone underline decoration-line underline-offset-4 hover:decoration-copper hover:text-copper"
        >
          View repository
        </a>
      )}
    </article>
  )
}
