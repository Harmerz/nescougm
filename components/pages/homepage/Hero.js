import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

export function Hero() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="bg-bg-02 h-[100vh] sm:h-[100vh]">
      <div className="w-3/3 grid sm:flex flex-row items-center overflow-hidden">
        <div className=" grid place-self-start self-start w-3/3 sm:w-44 lg:w-36 xl:w-48">
          <div className="relative w-[90px] h-[160px] sm:w-[150px] sm:h-[250px] lg:w-[200px] lg:h-[270px] xl:w-[250px] xl:h-[344.5px] ">
            <Image src="/Ornament 2.svg" alt="vektor" fill />
          </div>
        </div>

        <div
          data-aos="zoom-in"
          data-aos-duration="2000"
          className="grid lg:flex h-[60vh] sm:h-[100vh] w-12/12 sm:w-7/12 lg:w-9/12 xl:w-10/12 place-items-center aos-init"
        >
          <div className="self-start lg:self-center grid w-12/12 lg:w-1/2 xl:w-1/2 ml-0 xl:ml-8">
            <div className="text-[50.89px] sm:text-[70px] lg:text-[100px] xl:text-[140px] font-extrabold font-poppins leading-[50.94px] sm:leading-[100px] lg:leading-[125px] xl:leading-[154.99px] text-transparent text-center lg:text-justify bg-clip-text bg-gradient-to-br from-c-01 to-c-02">
              NESCO
            </div>
            <div className="text-[20.19px] sm:text-[30px] lg:text-[40px] xl:text-[46px] font-extrabold font-poppins leading-[30.94px] sm:leading-[50px] lg:leading-[64.63px] text-transparent  text-center lg:text-justify bg-clip-text bg-gradient-to-br from-c-01 to-c-02">
              2023
            </div>
            <div className="text-[6.94px] sm:text-[14px] lg:text-[14px] xl:text-[16px] font-medium font-poppins leading-[20.16px] sm:leading-[40px] lg:leading-[52.38px] text-white text-center lg:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </div>
          </div>

          <div className="grid self-center sm:self-end lg:self-center row-start-1 w-12/12 lg:w-1/2 xl:w-7/12 mb-0 sm:mb-16 lg:mb-0">
            <div className="box-border justify-self-center h-[150px] w-[166px] sm:h-[240px] sm:w-[240.52px] lg:w-[240px] lg:h-[240px] shadow-md bg-[#D9D9D9] rounded-xl" />
          </div>
        </div>

        <div className="self-end grid place-items-end lg:mb-[120px] w-3/3 sm:w-44 lg:w-36 xl:w-24">
          <div className="w-[20.93px] h-[140.5px] sm:w-[40.33px] sm:h-[250px] lg:w-[40.33px] lg:h-[350.33px] xl:w-[53.33px] xl:h-[403.5px] relative">
            <Image src="/Ornament 1.svg" alt="vektor" fill />
          </div>
        </div>
      </div>
    </div>
  )
}
