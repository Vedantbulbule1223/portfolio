import SectionHeading from './SectionHeading.jsx'

export default function Skills({ groups }) {
  return (
    <section id="skills" className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading sheet="02" title="Toolkit" note="Stack spans model layer to shipped product." />

      <div className="grid gap-px overflow-hidden border border-line-soft bg-line-soft sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <div key={g.label} className="bg-ink p-6">
            <p className="coord mb-4">{g.label}</p>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-sm bg-ink-panel px-3 py-1.5 text-sm text-bone/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
