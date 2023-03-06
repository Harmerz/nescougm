import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import Vector0 from '../../../public/vector/competition/competition-hero-00.svg'
import Vector1 from '../../../public/vector/competition/competition-hero-01.svg'
import Vector2 from '../../../public/vector/competition/competition-hero-02.svg'
import { Button } from '../../element/button'

export function HeroCompetition({ competitionTitle = 'Competition Title' }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="w-full h-[90vw] lg:min-h-[520px] lg:h-[100vh] bg-bg-01 flex justify-center items-center relative overflow-hidden"
      id="CompetitionHero"
    >
      <Image
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionHero"
        src={Vector0}
        className="w-[40%] absolute right-0 top-0 z-[9]"
      />
      <Image
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionHero"
        src={Vector1}
        className="w-[15%] absolute left-0 bottom-[1vh] z-[9]"
      />
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionHero"
        className="absolute inset-0 z-[11] flex justify-center items-center pointer-events-none "
      >
        <div className="w-[20vw] h-[20vw] rounded-full absolute right-[25%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px] z-[11]" />
        <div className="w-[13vw] h-[13vw] rounded-full absolute left-[45%] bottom-[20%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px] z-[11]" />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-anchor="#CompetitionHero"
        className="w-full h-full flex justify-center items-center z-[10]"
      >
        <div className="w-[86%] h-[70%] mt-[5vh] bg-c-00 flex items-center z-[10]">
          <div className="h-[80%] w-[6px] lg:h-[60%] lg:w-[20px] -ml-[3px] lg:-ml-[10px] bg-gradient-to-b from-c-01 to-c-02 rounded-[24px]" />
          <div className="h-[100%] ml-[5%] flex flex-col">
            <div className="h-[50%] mb-[2%] flex items-end text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-jost font-bold">
              <div className="text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 w-4/5">
                {competitionTitle}
              </div>
            </div>
            <div className="w-[80%] h-[15%] text-xs sm:text-base md:text-lg lg:text-xl font-poppins text-white">
              Untuk pendaftaran dapat dilakukan{' '}
              <Link href="/auth/signin" className="text-c-01 z-[100]">
                disini
              </Link>
            </div>
            <Link href="/auth/signin" className="z-[100]">
              <Button type="primary" size="sm">
                Daftar
              </Button>
            </Link>
          </div>
          <div className="ml-auto h-full w-[90px] lg:w-[14vw] bg-gradient-to-b from-c-01 to-c-02 relative overflow-hidden">
            <Image src={Vector2} className="absolute bottom-0 left-0 w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}
