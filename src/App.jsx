import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Certifications from './components/Certifications.jsx'
import CoreCompetencies from './components/CoreCompetencies.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import {
  profile,
  projects,
  education,
  skillGroups,
  experience,
  certifications,
  coreCompetencies,
  dsa,
} from './data.js'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero profile={profile} />
        <Reveal><About summary={profile.summary} education={education} dsa={dsa} /></Reveal>
        <Reveal><Skills groups={skillGroups} /></Reveal>
        <Reveal><Experience items={experience} /></Reveal>
        <Reveal><Projects projects={projects} /></Reveal>
        <Reveal><Certifications items={certifications} /></Reveal>
        <Reveal><CoreCompetencies items={coreCompetencies} /></Reveal>
        <Reveal><Contact profile={profile} /></Reveal>
      </main>
      <Footer profile={profile} />
    </div>
  )
}
