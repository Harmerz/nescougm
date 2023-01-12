import Image from 'next/image'
import Link from 'next/link'

import Vector0 from '../../../public/vector/competition/competition-hero-00.svg'
import Vector1 from '../../../public/vector/competition/competition-hero-01.svg'
import Vector2 from '../../../public/vector/competition/competition-hero-02.svg'
import { Button } from '../../element/button'

export function HeroCompetition() {
  return (
    <div className="w-full h-[90vw] lg:h-[100vh] bg-bg-01 flex justify-center items-center relative -z-[2]">
      <Image src={Vector0} className="w-[40%] absolute right-0 top-0 -z-[1]" />
      <Image src={Vector1} className="w-[15%] absolute left-0 bottom-[1vh] -z-[1]" />
      <div className="w-[86%] h-[70%] mt-[5vh] bg-c-00 flex items-center">
        <div className="h-[80%] w-[6px] lg:h-[60%] lg:w-[20px] -ml-[3px] lg:-ml-[10px] bg-gradient-to-b from-c-01 to-c-02 rounded-[24px]" />
        <div className="h-[100%] ml-[5%] flex flex-col justify-center">
          <div className="h-[27%] sm:h-[23%] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02">
            Paper
            <br />
            Competition
          </div>
          <div className="w-[80%] h-[15%] text-xs sm:text-base md:text-lg lg:text-xl font-poppins text-white">
            Untuk pendaftaran dapat dilakukan{' '}
            <Link href="/signin" className="text-c-01">
              disini
            </Link>
          </div>
          <Link href="/signin">
            <Button type="primary" size="sm">
              Daftar
            </Button>
          </Link>
        </div>
        <div className="ml-auto h-full w-[90px] lg:w-[14vw] bg-gradient-to-b from-c-01 to-c-02 relative">
          <Image src={Vector2} className="absolute bottom-0 left-0 w-full" />
        </div>
      </div>
    </div>
  )
}
