import { useEffect, useRef, useState } from 'react'
import { CASES, type CasePhoto } from '../content'
import SectionHead from './SectionHead'

const PHOTO_SLOTS = 3

export default function Work() {
  const [open, setOpen] = useState<CasePhoto | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  return (
    <section className="section" id="trabalho" aria-labelledby="trabalho-title">
      <div className="wrap">
        <SectionHead index="02" label="Trabalhos selecionados" title="Dois negócios de educação e comunidade, com números e resultados" id="trabalho-title" />
        <div className="cases">
          {CASES.map((c) => (
            <article className="case reveal" key={c.title}>
              <div className="case-meta">
                <p className="case-org">{c.org}</p>
                <p className="case-detail">{c.role}</p>
                <p className="case-detail">{c.period}</p>
                <div className="case-photos">
                  {Array.from({ length: PHOTO_SLOTS }, (_, i) => {
                    const p = c.photos[i]
                    return p ? (
                      <button
                        type="button"
                        className="case-photo"
                        key={i}
                        onClick={() => setOpen(p)}
                        aria-label={`Ampliar foto: ${p.caption}`}
                      >
                        <img src={p.thumb} alt="" loading="lazy" />
                      </button>
                    ) : (
                      <span className="case-photo case-photo-empty" key={i} aria-hidden="true" />
                    )
                  })}
                </div>
              </div>
              <div className="case-body">
                <h3 className="case-title">{c.title}</h3>
                <p className="case-text">{c.body}</p>
                {c.results.length > 0 && (
                  <dl className="case-results">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <dt className="case-result-label">{r.label}</dt>
                        <dd className="case-result-value">{r.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setOpen(null)}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(null) }}
      >
        {open && (
          <figure className="lightbox-figure">
            <img src={open.src} alt={open.caption} />
            <figcaption>{open.caption}</figcaption>
          </figure>
        )}
        <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Fechar">×</button>
      </dialog>
    </section>
  )
}
