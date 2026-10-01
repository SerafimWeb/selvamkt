type Props = {
  index?: string
  label: string
  title: string
  id: string
}

export default function SectionHead({ index, label, title, id }: Props) {
  return (
    <header className="section-head reveal">
      <p className="kicker">
        {index && <span className="kicker-index">{index}</span>}
        {label}
      </p>
      <h2 id={id} className="section-title">{title}</h2>
    </header>
  )
}
