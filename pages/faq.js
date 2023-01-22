import { DefaultLayout, Footer } from '../components/layout'
import { BackToTop } from '../components/element/BackToTop'
import { Faq } from '../components/pages/faq'

export default function FAQ() {
  return (
    <DefaultLayout title="FAQ - NESCO UGM 2023">
      <div>
        <Faq />
        <BackToTop />
      </div>
      <Footer />
    </DefaultLayout>
  )
}
