import SectionHeading from './SectionHeading.jsx'

export default function About({ summary, education, dsa }) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="01" title="About" />

      <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="max-w-2xl text-lg leading-relaxed text-bone/90">{summary}</p>

          <div className="mt-12 blueprint border border-line-soft p-6">
            <p className="coord mb-3">EDUCATION</p>
            <ul className="space-y-5">
              {education.map((e) => (
                <li key={e.school} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-bone">{e.school}</p>
                    <p className="text-sm text-muted">{e.degree}</p>
                  </div>
                  <span className="font-mono text-xs text-muted">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="blueprint flex flex-col justify-between border border-line-soft bg-ink-panel/40 p-8">
          <div>
            <p className="coord">DSA THROUGHPUT</p>
            <p className="mt-4 font-display text-6xl text-copper">{dsa.count}+</p>
            <p className="mt-2 text-sm text-muted">{dsa.label}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {dsa.topics.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-line-soft px-2 py-1 font-mono text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
