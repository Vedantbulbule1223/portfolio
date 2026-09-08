import SectionHeading from './SectionHeading.jsx'

export default function Experience({ items }) {
  return (
    <section className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="03" title="Experience" />

      <div className="space-y-10">
        {items.map((job) => (
          <div key={job.role} className="grid gap-4 md:grid-cols-[240px_1fr]">
            <div>
              <p className="text-bone">{job.role}</p>
              <p className="text-sm text-copper">{job.org}</p>
              <p className="mt-1 font-mono text-xs text-muted">{job.period}</p>
            </div>
            <ul className="space-y-3 border-l border-line-soft pl-6">
              {job.points.map((p, i) => (
                <li key={i} className="text-sm leading-relaxed text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
