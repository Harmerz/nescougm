import { lazy, Suspense } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'

const Hero = lazy(() => import('../components/pages/homepage/Hero'))
const HomePageCompetition = lazy(() => import('../components/pages/homepage/Competition'))
const About = lazy(() => import('../components/pages/homepage/About'))
const Medpart = lazy(() => import('../components/pages/homepage/Medpart'))
const Photo = lazy(() => import('../components/pages/homepage/Photo'))
const Webinar = lazy(() => import('../components/pages/homepage/Webinar'))

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <HomePageCompetition />
          <Webinar />
          <Photo />
          <Medpart />
          <BackToTop />
        </Suspense>
      </div>

      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
