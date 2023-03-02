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
          guidebook={props?.guidebook ?? 'https://bit.ly/JuknisNescoPosterCompetition2023'}
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

const Poster = {
  competitionTitle: 'Poster Competition',
  competitionDescription:
    'Poster Competition adalah kompetisi pembuatan karya poster mengenai perkembangan ketenagalistrikan, pemanfaatan energi bersih, dan pengaplikasian e-mobility di Indonesia. Poster Competition terdiri dari dua kategori, yaitu kategori mahasiswa dan kategori pelajar SMA sederajat.',
  peserta: 'Perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp40.000,00',
  contactPersons: [
    ['Dhiyaa Amalia Putri', '082322536644', 'd.amalia10'],
    ['Charlenne', '087881896477', 'chacha512'],
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
  return <Competition props={Poster} />
}
