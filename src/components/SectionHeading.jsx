export default function SectionHeading({ sheet, title, note }) {
  return (
    <div className="mb-12 flex flex-col gap-2 border-b border-line-soft pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="coord mb-2">SHEET {sheet}</p>
        <h2 className="font-display text-3xl text-bone md:text-4xl">{title}</h2>
      </div>
      {note && <p className="max-w-xs text-sm text-muted">{note}</p>}
    </div>
  )
}
