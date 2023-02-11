import { lazy, Suspense } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'

const HomePageCompetition = lazy(() => import('../components/pages/homepage/Competition'))
const About = lazy(() => import('../components/pages/homepage/About'))
const Medpart = lazy(() => import('../components/pages/homepage/Medpart'))
const Photo = lazy(() => import('../components/pages/homepage/Photo'))

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Suspense fallback={<div>Loading About</div>}>
          <About />
          <BackToTop />
        </Suspense>
        <Suspense fallback={<div>Loading Competition</div>}>
          <HomePageCompetition />
        </Suspense>

        <Suspense fallback={<div>Loading Photo</div>}>
          <Photo />
        </Suspense>
        <Suspense fallback={<div>Loading Medpart</div>}>
          <Medpart />
        </Suspense>
      </div>

      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
