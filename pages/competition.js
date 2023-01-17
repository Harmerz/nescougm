import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

import { BackToTop } from '../components/element/BackToTop'
import { DefaultLayout, Footer } from '../components/layout'
import { HeroCompetition, Overview, Prize, Timeline } from '../components/pages/competition'

export default function Competition({
  competitionTitle = (
    <>
      Paper
      <br />
      Competition
    </>
  ),
  competitionDescription = 'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta = 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran = 'Rp 150.000,00-',
  contactPersons = [
    ['Fajar', '081390803682', 'fajars7710'],
    ['Satria', '083195784338', 'satriayw'],
  ],
  juaraMahasiswa = ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-'],
  juaraSMA = ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-', 'Rp250.000,-'],
  timelines = [
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
  ],
}) {
  useEffect(() => {
    AOS.init({
      disable: false,
    })
  }, [])
  return (
    <DefaultLayout title="Competition - NESCO UGM 2023">
      <div>
        <HeroCompetition competitionTitle={competitionTitle} />
        <Overview
          competitionDescription={competitionDescription}
          peserta={peserta}
          biayaPendaftaran={biayaPendaftaran}
          contactPersons={contactPersons}
        />
        <Prize juaraMahasiswa={juaraMahasiswa} juaraSMA={juaraSMA} />
        <Timeline timelines={timelines} />
        <BackToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}
