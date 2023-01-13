import Image from 'next/image'
import Link from 'next/link'

import Icon00 from '../../../public/vector/competition/competition-overview-00.svg'
import Icon01 from '../../../public/vector/competition/competition-overview-01.svg'
import Icon02 from '../../../public/vector/competition/competition-overview-02.svg'
import Vector00 from '../../../public/vector/competition/competition-overview-03.svg'
import { Button } from '../../element/button'
import OverviewList from './OverviewList'
import VerticalBar from './VerticalBar'

export function Overview() {
  return (
    <div className="w-full h-fit lg:h-[100vh] bg-c-00 py-[5vh] box-content flex justify-around items-center flex-col lg:flex-row relative">
      <div className="w-[30vw] h-[30vw] md:w-[22vw] md:h-[22vw] rounded-full absolute left-0 top-0 lg:-left-[1%] lg:top-[12%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px]" />
      <div className="w-[10vw] h-[10vw] rounded-full absolute left-[21%] top-[10vw] bg-c-01 opacity-[.14] hidden lg:block blur-[80px] md:blur-[90px]" />
      <div className="w-[22vw] h-[22vw] rounded-full absolute -right-[5%] top-[9%] lg:top-[45%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px]" />
      <div className="w-[36vw] h-[36vw] rounded-full absolute left-[2%] top-[42%] bg-c-01 opacity-[.14] lg:hidden blur-[80px] md:blur-[90px]" />
      <div className="w-[45vw] h-[45vw] rounded-full absolute -right-[7%] bottom-[8%] bg-c-01 opacity-[.14] lg:hidden blur-[80px] md:blur-[90px]" />
      <div className="h-4/5 hidden lg:block">
        <VerticalBar title="Overview" color="c-01" />
      </div>
      <div className="w-[80%] lg:w-[17%] text-justify lg:text-left lg:h-fit flex flex-col mb-[5%]">
        <div className="flex flex-col w-auto items-center w-fit">
          <div className="text-2xl md:text-3xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02">
            Overview
          </div>
          <div className="w-[80%] h-[4px] mt-[8px] bg-c-01" />
        </div>
        <div className="w-full mt-[15px] text-white text-base md:text-lg lg:text-xl">
          Paper Competition merupakan kompetisi bidang ketenagalistrikan berupa lomba problem
          solving tentang Load Flow Diagram, forecasting, sistem proteksi listrik, dan sejenisnya,
          yang bertujuan mendorong perkembangan dan perencanaan sistem ketenagalistrikan, khususnya
          di Indonesia.
        </div>
        <Link href="/signin" className="mt-[15px]">
          <Button type="secondary" size="sm">
            Guide Book
          </Button>
        </Link>
      </div>
      <div className="w-[40%] lg:w-[28%]">
        <Image src={Vector00} className="w-full" />
      </div>
      <div className="w-[60%] lg:w-[25%] lg:h-[60%] flex flex-col items-center justify-evenly">
        <OverviewList icon={Icon00} title="Kategori Peserta:">
          Mahasiswa, perseorangan atau tim maksimal 3 orang
        </OverviewList>
        <OverviewList icon={Icon01} title="Biaya Pendaftaran:">
          Rp 150.000,00-
        </OverviewList>
        <OverviewList icon={Icon02} title="Contact Person:">
          <div className="font-bold">Fajar</div>
          <div>WA: 081390803682</div>
          <div>LINE: fajars7710</div>
          <div className="font-bold">Satria </div>
          <div>WA:083195784338</div>
          <div>LINE: satriayw</div>
        </OverviewList>
      </div>
    </div>
  )
}
