import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { HeroCompetition, Overview, Prize, Timeline } from '../components/pages/competition'

export default function Competition() {
  return (
    <DefaultLayout title="Competition - NESCO UGM 2023">
      <div>
        <HeroCompetition />
        <Overview />
        <Prize />
        <Timeline />
        <BackToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
