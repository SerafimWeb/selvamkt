import { useEffect } from 'react'

/** Adds .is-in to every .reveal element once it enters the viewport. */
export function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )

    const observe = () =>
      document.querySelectorAll('.reveal:not(.is-in)').forEach((el) => observer.observe(el))

    observe()
    // Seções carregadas depois também entram no observer.
    const mutations = new MutationObserver(observe)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}
