import SectionHeading from './SectionHeading.jsx'
import ProjectCard from './ProjectCard.jsx'
import Reveal from './Reveal.jsx'

export default function Projects({ projects }) {
  return (
    <section id="work" className="section-rule mx-auto max-w-6xl px-6 py-24 md:px-10">
      <SectionHeading
        sheet="04"
        title="Selected work"
        note="A few systems worth a closer look — from ocean-data pipelines to agentic research."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 80}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
