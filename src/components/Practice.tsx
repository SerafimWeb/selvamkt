import { PRACTICES } from '../content'
import SectionHead from './SectionHead'

export default function Practice() {
  return (
    <section className="section" aria-labelledby="pratica-title">
      <div className="wrap">
        <SectionHead label="Como eu posso te ajudar com meu trabalho?" title="Áreas de atuação:" id="pratica-title" />
        <ol className="practice-list">
          {PRACTICES.map((p, i) => (
            <li className="practice-item reveal" key={p.title}>
              <span className="practice-num">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="practice-title">{p.title}</h3>
              <p className="practice-text">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
