import SectionHeading from './SectionHeading.jsx'

export default function CoreCompetencies({ items }) {
  return (
    <section className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="06" title="How I work" note="Soft skills that hold the technical work together." />
      <div className="flex flex-wrap gap-3">
        {items.map((c) => (
          <span
            key={c}
            className="rounded-full border border-line-soft px-4 py-2 font-mono text-xs text-muted"
          >
            {c}
          </span>
        ))}
      </div>
    </section>
  )
}
