import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { HeroCompetition, Overview, Prize, Timeline } from '../components/pages/competition'

export default function Competition({ props }) {
  useEffect(() => {
    AOS.init({
      disable: false,
    })
  }, [])
  return (
    <DefaultLayout title="Competition - NESCO UGM 2023">
      <div>
        <HeroCompetition competitionTitle={props.competitionTitle} />
        <Overview
          competitionDescription={props.competitionDescription}
          peserta={props.peserta}
          biayaPendaftaran={props.biayaPendaftaran}
          contactPersons={props.contactPersons}
        />
        <Prize juaraMahasiswa={props.juaraMahasiswa} juaraSMA={props.juaraSMA} />
        <Timeline timelines={props.timelines} />
        <BackToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
