import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { About, Hero, Photo, Webinar, Paper, Medpart } from '../components/pages/homepage'

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Hero />
        <About />
        <Paper />
        <Webinar />
        <Photo />
        <Medpart />
        <BackToTop />
      </div>

      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
