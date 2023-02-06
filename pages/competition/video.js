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
  return <Competition props={Video} />
}
