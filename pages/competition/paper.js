import 'aos/dist/aos.css'

import AOS from 'aos'
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
          guidebook={props?.guidebook ?? 'https://bit.ly/JuknisNescoPaperCompetition2023'}
          peserta={props?.peserta ?? 'Peserta'}
          biayaPendaftaran={props?.biayaPendaftaran ?? 'Biaya Pendaftaran'}
          contactPersons={props?.contactPersons ?? ['Contact Person']}
        />
        <Prize
          juaraMahasiswa={props?.juaraMahasiswa ?? 'Juara Mahasiswa'}
          juaraSMA={props?.juaraSMA ?? 'Juara SMA'}
          piala={props?.piala ?? ', piala'}
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
  biayaPendaftaran: 'Rp130.000,00',
  contactPersons: [
    ['Diamond Azzukhruf M.', '081298534532', 'diamondam'],
    ['Awaliya Shabrina', '085855174260', 'awaliyash_'],
  ],
  juaraMahasiswa: ['Rp5.000.000,-', 'Rp4.000.000,-', 'Rp3.000.000,-'],
  juaraSMA: [],
  timelines: [
    ['8 Feb - 25 Mar', 'Open Registration'],
    ['1 Apr', 'Rilis Soal'],
    ['1 Apr - 1 Mei', 'Periode Pengunggahan Laporan'],
    ['2 Mei - 15 Mei', 'Babak Penyisihan'],
    ['20 Mei', 'Pengumuman Finalis'],
    ['27 Mei', 'Babak Final'],
    ['28 Mei', 'Pengumuman Juara'],
  ],
}

export default function CompetitionPage() {
  return <Competition props={Paper} />
}
