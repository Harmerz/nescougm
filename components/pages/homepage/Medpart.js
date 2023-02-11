import 'aos/dist/aos.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
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
    <div className="hidden bg-c-00 h-[100vh] sm:h-[110vh] lg:h-[120vh] xl:h-[150vh] 2xl:h-[170vh] w-full overflow-hidden">
      <div className="grid">
        <div className="flex self-center justify-end h-[15vh] sm:h-[20vh] 2xl:h-[25vh]">
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ['0%', '0%', '50%', '50%', '0%'],
            }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="flex self-center w-[50px] h-[40px] sm:w-[78.63px] sm:h-[65.85px] lg:w-[100px] lg:h-[80px] mr-10 sm:mr-16 2xl:mr-20 "
          >
            <Image
              width={0}
              height={0}
              className="w-[50px] h-[40px] sm:w-[78.63px] sm:h-[65.85px] lg:w-[100px] lg:h-[80px]"
              src="/Group 5.svg"
              alt="vektor"
            />
          </motion.div>
        </div>

        <div className="grid h-[70vh] sm:h-[70vh] lg:h-[80vh] xl:h-[110vh] 2xl:h-[120vh] w-11/12 lg:w-10/12  place-self-center">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="flex h-[5vh] sm:h-[7vh] lg:h-[10vh]  justify-center self-center aos-init"
          >
            <div className="text-[32px] sm:text-[50px] xl:text-[60px] 2xl:text-[62px] text-justify font-bold font-poppins leading-[43.15px] text-white ">
              Lorem Ipsum
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="h-[65vh] sm:h-[63vh] lg:h-[70vh] xl:h-[100vh] 2xl:h-[110vh]  grid grid-rows-4 aos-init"
          >
            <div className="grid grid-cols-9 self-center gap-2 h-[8vh] sm:h-[10vh] xl:h-[15vh]">
              <div className="rounded-xl shadow-lg col-start-1 col-span-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-3 col-span-5 sm:col-span-5 sm:col-start-3 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-span-1 sm:col-start-9 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[8vh] sm:h-[10vh] xl:h-[15vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-4 col-span-2 sm:col-start-4 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-6 col-span-2 sm:col-start-6 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-8 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[8vh] sm:h-[10vh] xl:h-[15vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-3 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-5 col-span-2 sm:col-start-5 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-7 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>
            </div>

            <div className="grid grid-cols-10 self-center sm:grid-cols-9 gap-2 h-[8vh] sm:h-[10vh] xl:h-[15vh]">
              <div className="rounded-xl shadow-lg col-start-2 col-span-2 sm:col-start-2 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-4 col-span-2 sm:col-start-4 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-6 col-span-2 sm:col-start-6 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>

              <div className="rounded-xl shadow-lg col-start-8 col-span-2 sm:col-start-8 sm:col-span-1 bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]">
                <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[15vh] sm:h-[20vh] 2xl:h-[25vh] flex justify-items-end self-end w-full">
          <Image
            width={0}
            height={0}
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px]"
            src="/Group 609.svg"
            alt="vektor"
          />
        </div>
      </div>
    </div>
  )
}

export default Medpart
