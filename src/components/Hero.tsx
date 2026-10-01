import { FACTS, PERSON } from '../content'

export default function Hero() {
  return (
    <section className="hero" id="topo" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker hero-kicker">{PERSON.kicker}</p>
          <h1 id="hero-title" className="hero-title">
            Maria Clara <em>Silva</em>
          </h1>
          <p className="hero-role">{PERSON.role}</p>
          <p className="hero-lede">
            Um produto bem posicionado é capaz de reunir as pessoas certas e construir comunidades duradouras. Há mais de 10 anos, eu crio e posiciono produtos educacionais e eventos presenciais. Meu trabalho sempre começa e termina com o público: da geração de demanda à retenção.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#trabalho">Ver trabalhos</a>
            <a className="btn btn-line" href="#contato">Conversar</a>
          </div>
        </div>

        {/* Foto com tratamento artístico já aplicado (PNG recortado) */}
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src="/foto-maria-clara.webp"
            alt="Maria Clara Silva"
            width="900"
            height="900"
            fetchPriority="high"
            onError={(e) => { e.currentTarget.hidden = true }}
          />
        </div>
      </div>

      <div className="wrap">
        <dl className="facts">
          {FACTS.map((f) => (
            <div className="fact" key={f.label}>
              <dt className="fact-label">{f.label}</dt>
              <dd className="fact-value">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
