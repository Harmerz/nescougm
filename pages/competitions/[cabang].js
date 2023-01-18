import { useRouter } from 'next/router'

import Competition from '../competition'

const Electricity = {
  competitionTitle: (
    <>
      Electricity
      <br />
      Competition
    </>
  ),
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPerson: (
    <>
      <div className="font-bold">Fajar</div>
      <div>WA: 081390803682</div>
      <div>LINE: fajars7710</div>
      <div className="font-bold">Satria </div>
      <div>WA:083195784338</div>
      <div>LINE: satriayw</div>
    </>
  ),
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

const Paper = {
  competitionTitle: (
    <>
      Paper
      <br />
      Competition
    </>
  ),
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPerson: (
    <>
      <div className="font-bold">Fajar</div>
      <div>WA: 081390803682</div>
      <div>LINE: fajars7710</div>
      <div className="font-bold">Satria </div>
      <div>WA:083195784338</div>
      <div>LINE: satriayw</div>
    </>
  ),
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
  competitionTitle: (
    <>
      Poster
      <br />
      Competition
    </>
  ),
  competitionDescription:
    'Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya, yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya di Indonesia.',
  peserta: 'Mahasiswa, perseorangan atau tim maksimal 3 orang',
  biayaPendaftaran: 'Rp 150.000,00-',
  contactPerson: (
    <>
      <div className="font-bold">Fajar</div>
      <div>WA: 081390803682</div>
      <div>LINE: fajars7710</div>
      <div className="font-bold">Satria </div>
      <div>WA:083195784338</div>
      <div>LINE: satriayw</div>
    </>
  ),
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

export default function CommentPage() {
  const router = useRouter()
  const Cabang = router.query.cabang

  if (Cabang === 'electricity') return <Competition props={Electricity} />
  if (Cabang === 'paper') return <Competition props={Paper} />
  if (Cabang === 'poster') return <Competition props={Poster} />
}
