import 'aos/dist/aos.css'

import AOS from 'aos'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { BackToTop } from '../../components/element/BackToTop'
import { DefaultLayout, Footer } from '../../components/layout'
import { HeroCompetition, Overview, Prize, Timeline } from '../../components/pages/competition'

export function Competition({ props }) {
  useEffect(() => {
    AOS.init({
      disable: false,
    })
  }, [])
  return (
    <DefaultLayout title="Competition - NESCO UGM 2023">
      <div>
        <HeroCompetition competitionTitle={props?.competitionTitle ?? 'Competition Title'} />
        <Overview
          competitionDescription={props?.competitionDescription ?? "Competition's Description"}
          peserta={props?.peserta ?? 'Peserta'}
          biayaPendaftaran={props?.biayaPendaftaran ?? 'Biaya Pendaftaran'}
          contactPersons={props?.contactPersons ?? ['Contact Person']}
        />
        <Prize
          juaraMahasiswa={props?.juaraMahasiswa ?? 'Juara Mahasiswa'}
          juaraSMA={props?.juaraSMA ?? 'Juara SMA'}
        />
        <Timeline timelines={props?.timelines ?? ['Timelines']} />
        <BackToTop />
      </div>
      <footer>
        <Footer />
      </footer>
    </DefaultLayout>
  )
}

const Paper = {
  competitionTitle: 'Paper Competition',
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPersons: [
    ['Fajar', '081390803682', 'fajars7710'],
    ['Satria', '083195784338', 'satriayw'],
  ],
  juaraMahasiswa: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-'],
  juaraSMA: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-', 'Rp250.000,-'],
  timelines: [
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
  ],
}

const Poster = {
  competitionTitle: 'Poster Competition',
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPersons: [
    ['Fajar', '081390803682', 'fajars7710'],
    ['Satria', '083195784338', 'satriayw'],
  ],
  juaraMahasiswa: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-'],
  juaraSMA: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-', 'Rp250.000,-'],
  timelines: [
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
  ],
}

const Video = {
  competitionTitle: 'Video Competition',
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPersons: [
    ['Fajar', '081390803682', 'fajars7710'],
    ['Satria', '083195784338', 'satriayw'],
  ],
  juaraMahasiswa: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-'],
  juaraSMA: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-', 'Rp250.000,-'],
  timelines: [
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
    ['xx Mei - xx Juni', 'Mahasiswa, perseorangan atau tim maksimal 3 orang'],
  ],
}

export default function CompetitionPage() {
  const router = useRouter()
  const Cabang = router.query.cabang
  if (Cabang === 'paper') return <Competition props={Paper} />
  if (Cabang === 'poster') return <Competition props={Poster} />
  if (Cabang === 'video') return <Competition props={Video} />
  return (
    <div>
      <h1>{Cabang}</h1>
    </div>
  )
}
