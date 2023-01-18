import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

export function Medpart() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])
  return (
    <div className="bg-bg-02 h-[150vh] sm:h-[170vh] w-full overflow-hidden">
      <div className="grid">
        <div className="flex justify-self-end self-start mt-10 mr-5 sm:mr-10">
          <div className="w-[60px] h-[50px] sm:w-[85.63px] sm:h-[72.85px] relative">
            <Image alt="vektor" fill src="/Group 5.svg" />
          </div>
        </div>

        <div className="grid h-[120vh] w-11/12 lg:w-10/12 xl:w-9/12 place-self-center">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="flex justify-center self-center aos-init"
          >
            <div className="text-[32px] sm:text-[42px] text-justify font-bold font-poppins leading-[43.15px] text-white ">
              Lorem Ipsum
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="h-[90vh] grid grid-rows-4 aos-init"
          >
            <div className="grid grid-cols-9 self-center gap-2 h-[12vh]">
              <div className="rounded-xl shadow-lg col-start-1 col-span-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-3 col-span-5 sm:col-span-5 sm:col-start-3 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-span-1 sm:col-start-9 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[12vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-4 col-span-2 sm:col-start-4 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-6 col-span-2 sm:col-start-6 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-8 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[12vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-3 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-5 col-span-2 sm:col-start-5 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-7 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[12vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-4 col-span-2 sm:col-start-4 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-6 col-span-2 sm:col-start-6 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-8 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg p-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-items-end self-end w-full">
          <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] relative">
            <Image src="/Group 609.svg" alt="vektor" fill />
          </div>
        </div>
      </div>
    </div>
  )
}
