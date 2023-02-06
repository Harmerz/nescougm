// import { lazy } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import {
  About,
  Hero,
  HomePageCompetition,
  Medpart,
  Photo,
  Webinar,
} from '../components/pages/homepage'

// const HomePageCompetition = lazy(() => import('../components/pages/homepage/Competition'))
// const About = lazy(() => import('../components/pages/homepage/About'))
// const Medpart = lazy(() => import('../components/pages/homepage/Medpart'))
// const Photo = lazy(() => import('../components/pages/homepage/Photo'))
// const Webinar = lazy(() => import('../components/pages/homepage/Webinar'))

export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
      <div>
        <Hero />
        <About />
        <HomePageCompetition />
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
