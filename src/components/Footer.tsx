import { PERSON, SERAFIM_URL } from '../content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-main">
          <p className="footer-sign">
            Aqui eu falo sobre como criar espaços onde marcas, pessoas e negócios se encontram de verdade.
          </p>
          <p className="footer-id">{PERSON.name} · {PERSON.studio} · {new Date().getFullYear()}</p>
        </div>

        {/* Colofão: a única aparição da Serafim na página. */}
        <p className="colophon">
          <span>Produtos digitais por</span>{' '}
          <a href={SERAFIM_URL}>Serafim <span className="colophon-sub">Web Software Bureau</span></a>
        </p>
      </div>
    </footer>
  )
}
