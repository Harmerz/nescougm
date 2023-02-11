import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout } from '../components/layout'
import { Comingsoon } from '../components/pages/comingsoon'

export default function SignIn() {
  return (
    <DefaultLayout title="Sign In - NESCO UGM 2023">
      <div>
        <Comingsoon />
        <BackToTop />
      </div>
    </DefaultLayout>
  )
}
