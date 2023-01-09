import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { Hero, Photo, About } from '../components/pages/homepage'

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Hero />
        <About />
        <Photo />
        <BackToTop />
      </div>

      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
