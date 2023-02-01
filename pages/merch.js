import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout } from '../components/layout'
import { Comingsoon } from '../components/pages/comingsoon'

export default function Merch() {
  return (
    <DefaultLayout title="Merch - NESCO UGM 2023">
      <div>
        <Comingsoon />
        <BackToTop />
      </div>
    </DefaultLayout>
  )
}
