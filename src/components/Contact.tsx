import { PERSON } from '../content'
import SectionHead from './SectionHead'

export default function Contact() {
  return (
    <section className="section contact" id="contato" aria-labelledby="contato-title">
      <div className="wrap">
        <SectionHead index="05" label="Contato" title="Tem um produto educacional, uma escola nichada ou um evento presencial pela frente?" id="contato-title" />
        <div className="contact-body reveal">
          <a className="contact-whatsapp" href={PERSON.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp {PERSON.whatsappLabel}
          </a>
          <a className="contact-link" href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  )
}
