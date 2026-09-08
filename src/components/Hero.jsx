export default function Hero({ profile }) {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-copper/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
          <span className="flex items-center gap-2 rounded-full border border-line-soft px-3 py-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-copper" />
            {profile.availability}
          </span>
          <span className="coord">{profile.location}</span>
        </div>

        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] text-bone md:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-4 flex items-center gap-2 font-mono text-sm tracking-wide text-copper md:text-base">
          {profile.role}
          <span className="inline-block h-4 w-[2px] animate-[blink_1.1s_steps(1)_infinite] bg-copper" />
        </p>

        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="rounded-sm bg-copper px-5 py-3 font-mono text-xs tracking-wide text-ink-deep transition-all hover:-translate-y-0.5 hover:bg-copper-bright hover:shadow-[0_8px_30px_-8px_rgba(224,143,79,0.6)]"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-sm border border-line px-5 py-3 font-mono text-xs tracking-wide text-bone transition-colors hover:border-copper hover:text-copper"
          >
            Hire me
          </a>
        </div>
      </div>
    </section>
  )
}
