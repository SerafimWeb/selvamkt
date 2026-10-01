import { CERTIFICATIONS, PERSON, TIMELINE } from '../content'
import SectionHead from './SectionHead'

export default function Timeline() {
  return (
    <section className="section section-tint" id="trajetoria" aria-labelledby="trajetoria-title">
      <div className="wrap">
        <SectionHead index="03" label="Trajetória" title="Onde estive, onde estou." id="trajetoria-title" />
        <ol className="timeline">
          {TIMELINE.map((t) => (
            <li className="timeline-row reveal" key={t.title + t.org}>
              <span className="timeline-period">{t.period}</span>
              <div>
                <h3 className="timeline-title">{t.title}</h3>
                <p className="timeline-org">{t.org}</p>
              </div>
              <p className="timeline-note">{t.note}</p>
            </li>
          ))}
        </ol>

        <div className="timeline-foot reveal">
          <div>
            <p className="kicker">Cursos e certificações</p>
            <ul className="certs">
              {CERTIFICATIONS.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <a className="btn btn-line" href={PERSON.cv} download>
            Baixar currículo (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
