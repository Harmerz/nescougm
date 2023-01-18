import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

export function Photo() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])
  return (
    <div className="shadow-xl h-[140vh] bg-gradient-to-b p-[6px] from-c-02 to-bg-02">
      <div className="justify-center bg-bg-02 h-[140vh] flex">
        <div className="flex justify-items-start self-start mr-5 ml-2.5 mt-8">
          <div className="w-[75px] h-[15px] sm:w-[115px] sm:[20px] lg:w-[145.5px] lg:h-[28px] relative">
            <Image src="/Group608.svg" alt="vektor" fill />
          </div>
        </div>

        <div className="grid h-[140vh] w-9/12 justify-self-end">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="flex justify-center self-center mt-16 sm:mt-24 mb-4 sm:mb-20 aos-init"
          >
            <div className=" text-[24px] sm:text-[42px] text-justify font-bold font-poppins leading-[43.15px] text-white ">
              Lorem Ipsum
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="grid grid-cols-none grid-rows-none gap-4 h-[120vh] sm:h-[100vh] aos-init"
          >
            <div className="rounded-xl shadow-lg sm:col-span-4 sm:col-start-1 sm:row-span-4 sm:row-start-2 lg:col-span-4 lg:col-start-1 lg:row-span-5 lg:row-start-3 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                1
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-5 sm:col-start-5 sm:row-span-4 sm:row-start-1 lg:col-span-5 lg:col-start-5 lg:row-span-6 lg:row-start-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                2
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-4 sm:col-start-10 sm:row-span-3 sm:row-start-2 lg:col-span-4 lg:col-start-10 lg:row-span-4 lg:row-start-3 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                3
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-3 sm:col-start-2 sm:row-span-2 sm:row-start-6 lg:col-span-3 lg:col-start-2 lg:row-span-3 lg:row-start-auto bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                4
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-8 sm:col-start-5 sm:row-span-3 sm:row-start-5 lg:col-span-8 lg:col-start-5 lg:row-span-4 lg:row-start-7 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                5
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-5 sm:col-start-2 sm:row-span-3 sm:row-start-9 lg:col-span-5 lg:col-start-2 lg:row-span-4 lg:row-start-auto bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                6
              </div>
            </div>

            <div className="rounded-xl shadow-lg sm:col-span-7 sm:col-start-7 sm:row-span-4 sm:row-start-9 lg:col-span-7 lg:col-start-7 lg:row-span-5 lg:row-start-auto bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
              <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4">
                7
              </div>
            </div>
          </div>
        </div>

        <div className="flex invisible justify-items-start self-start mr-5 ml-2.5 mt-8">
          <div className="invisible w-[75px] h-[15px] sm:w-[115px] sm:[20px] lg:w-[145.5px] lg:h-[28px] relative">
            <Image src="/Group608.svg" alt="vektor" fill />
          </div>
        </div>
      </div>
    </div>
  )
}
