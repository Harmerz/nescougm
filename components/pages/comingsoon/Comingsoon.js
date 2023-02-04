import Image from 'next/image'

import icon1 from '../../../public/vector/comingsoon/comingsoonIcon1.svg'
import icon2 from '../../../public/vector/comingsoon/comingsoonIcon2.svg'
import icon3 from '../../../public/vector/comingsoon/comingsoonIcon3.svg'
import svg1 from '../../../public/vector/comingsoon/comingsoonSvg1.svg'
import svg2 from '../../../public/vector/comingsoon/comingsoonSvg2.svg'
import { Button } from '../../element/button/Button'

export function Comingsoon() {
  return (
    <div className="relative flex bg-c-00 items-center overflow-hidden h-screen">
      <div className="mx-14 sm:mx-36 lg:mx-[155px] 2xl:mx-auto my-auto grid grid-cols-2">
        <div className="absolute top-[72px] left-[-18px] opacity-[.2] blur-[90px] bg-c-01 w-[191px] h-[191px] rounded-full" />
        <div className="absolute bottom-0 right-[-35px] opacity-[.2] blur-[90px] bg-c-01 w-[191px] h-[191px] rounded-full" />
        <div className="my-auto flex flex-col">
          <div className=" font-bold text-[72px] leading-[72px] 2xl:text-[102px] 2xl:leading-[102px] text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 ">
            Coming<p>Soon!</p>
          </div>
          <p className="font-poppins mt-[26px] text-white text-[16px]">
            Competitions, Webinar and Merchs!
          </p>
          <div className="flex flex-row gap-[25px] mt-[29px]">
            <div className="flex justify-center items-center bg-bg-01 rounded-[5.26px] w-[76px] h-[76px]">
              <Image src={icon1} />
            </div>
            <div className="flex justify-center items-center bg-bg-01 rounded-[5.26px] w-[76px] h-[76px]">
              <Image src={icon2} />
            </div>
            <div className="flex justify-center items-center bg-bg-01 rounded-[5.26px] w-[76px] h-[76px]">
              <Image src={icon3} />
            </div>
          </div>
          <a href="./" className="mt-[49px]">
            <Button type="secondary" size="sm" className="">
              Return to Homepage
            </Button>
          </a>
        </div>
        <div className="hidden md:flex flex-col gap-[72px]">
          <div className="grid grid-cols-3">
            <div className="flex items-end">
              <Image src={svg2} />
            </div>
            <div />
            <div className="relative">
              <div className=" w-[192px] h-[192px] rounded-full bg-[#E8DE04] opacity-[.14] blur-[50px]" />
              <div className="absolute w-[119px] h-[119px] rounded-full bg-[#E8DE04] top-1/4 left-1/4" />
            </div>
          </div>
          <div className=" ">
            <Image src={svg1} />
          </div>
        </div>
      </div>
    </div>
  )
}
