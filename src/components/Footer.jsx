export default function Footer({ profile }) {
  return (
    <footer className="section-rule mx-auto max-w-6xl px-6 py-10 md:px-10">
      <div className="flex flex-col gap-2 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>Built with React + FastAPI.</p>
      </div>
    </footer>
  )
}
