import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { Merch } from '../components/pages/merch'

export default function MERCH() {
  return (
    <DefaultLayout title="Merch - NESCO UGM 2023">
      <div>
        <Merch/>
        <BackToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
