import 'aos/dist/aos.css'

import AOS from 'aos'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { BackToTop } from '../../components/element/BackToTop'
import { DefaultLayout, Footer } from '../../components/layout'
import { HeroCompetition, Overview, Prize, Timeline } from '../../components/pages/competition'
import { NotFound } from '../404'

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

const Poster = {
  competitionTitle: 'Poster Competition',
  competitionDescription:
    'Poster Competition adalah kompetisi pembuatan karya poster mengenai perkembangan ketenagalistrikan, pemanfaatan energi bersih, dan pengaplikasian e-mobility di Indonesia. Poster Competition terdiri dari dua kategori, yaitu kategori mahasiswa dan kategori pelajar SMA sederajat.',
  peserta: 'Perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp40.000,00',
  contactPersons: [
    ['Isabel Elgina', '0895365343444', 'abelelginaa'],
    ['Denio Ezekiel sembiring', '081262732624', 'denioeb'],
  ],
  juaraMahasiswa: ['Rp1.500.000,-', 'Rp1.000.000,-', 'Rp500.000,-', 'Rp250.000,-'],
  juaraSMA: ['Rp1.500.000,-', 'Rp1.000.000,-', 'Rp500.000,-', 'Rp250.000,-'],
  timelines: [
    ['8 Feb - 1 Apr', 'Open Registration'],
    ['9 Apr - 22 Apr', 'Periode Pengunggahan Karya'],
    ['23 Apr - 6 Mei', 'Babak Penyisihan'],
    ['7 Mei', 'Pengumuman Finalis'],
    ['8 Mei - 14 Mei', 'Babak Final'],
    ['28 Mei', 'Pengumuman Juara'],
  ],
}

const Video = {
  competitionTitle: 'Video Competition',
  competitionDescription:
    'Video Competition adalah kompetisi pembuatan karya berupa video mengenai perkembangan ketenagalistrikan, sustainable and renewable energy, dan e-mobility di Indonesia. Video Competition terdiri dari dua kategori, yaitu kategori mahasiswa dan kategori pelajar SMA sederajat.',
  peserta: 'Perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp60.000,00',
  contactPersons: [
    ['Farel', '08999078927', 'rafi_pradipta_080304'],
    ['Afra', '0895358245871', 'nal.fra'],
  ],
  juaraMahasiswa: ['Rp1.500.000,-', 'Rp1.000.000,-', 'Rp500.000,-', 'Rp250.000,-'],
  juaraSMA: ['Rp1.500.000,-', 'Rp1.000.000,-', 'Rp500.000,-', 'Rp250.000,-'],
  timelines: [
    ['8 Feb - 1 Apr', 'Open Registration'],
    ['9 Apr - 22 Apr', 'Periode Pengunggahan Karya'],
    ['23 Apr - 6 Mei', 'Babak Penyisihan'],
    ['7 Mei', 'Pengumuman Finalis'],
    ['8 Mei - 14 Mei', 'Babak Final'],
    ['28 Mei', 'Pengumuman Juara'],
  ],
}

export default function CompetitionPage() {
  const router = useRouter()
  const Cabang = router.pathname
  if (Cabang === '/competition/paper') return <Competition props={Paper} />
  if (Cabang === '/competition/poster') return <Competition props={Poster} />
  if (Cabang === '/competition/video') return <Competition props={Video} />
  return <NotFound />
}
