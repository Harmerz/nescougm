import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout } from '../components/layout'
import { Comingsoon } from '../components/pages/comingsoon'

export default function Seminar() {
  return (
    <DefaultLayout title="Webinar - NESCO UGM 2023">
      <div>
        <Comingsoon />
        <BackToTop />
      </div>
    </DefaultLayout>
  )
}
