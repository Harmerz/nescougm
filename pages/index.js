import { lazy, Suspense } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { Hero } from '../components/pages/homepage/Hero'

const HomePageCompetition = lazy(() => import('../components/pages/homepage/Competition'))
const About = lazy(() => import('../components/pages/homepage/About'))
const Medpart = lazy(() => import('../components/pages/homepage/Medpart'))
const Photo = lazy(() => import('../components/pages/homepage/Photo'))
const Webinar = lazy(() => import('../components/pages/homepage/Webinar'))

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Hero />
        <Suspense fallback={<div>Loading About</div>}>
          <About />
          <BackToTop />
        </Suspense>
        <Suspense fallback={<div>Loading Competition</div>}>
          <HomePageCompetition />
        </Suspense>
        <Suspense fallback={<div>Loading Webinar</div>}>
          <Webinar />
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
