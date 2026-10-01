import { useReveal } from './useReveal'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Practice from './components/Practice'
import Work from './components/Work'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Practice />
        <Work />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
