import SectionHeading from './SectionHeading.jsx'

export default function Certifications({ items }) {
  return (
    <section className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="05" title="Certifications" />
      <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
        {items.map((c) => (
          <li key={c} className="flex items-baseline gap-3 text-sm text-bone/85">
            <span className="font-mono text-copper">·</span>
            {c}
          </li>
        ))}
      </ul>
    </section>
  )
}
