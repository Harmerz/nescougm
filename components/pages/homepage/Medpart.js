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
    <div className="bg-c-00 h-fit w-full overflow-hidden">
      <div className="grid">
        {/* <div className="flex self-center justify-end h-[15vh] sm:h-[20vh] 2xl:h-[25vh]">
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
        </div> */}

        <div className="flex flex-col py-[20px] gap-[10px] lg:gap-[20px] px-[20px] justify-center items-center">
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="flex h-[5vh] sm:h-[7vh] lg:h-[10vh]  justify-center self-center aos-init"
          >
            <div className="font-jost font-bold self-center text-[30px] sm:text-[36px] text-justify leading-[40.15px] text-white ">
              Sponsorship
            </div>
          </div>
          <div className="bg-white rounded-xl max-w-[900px] h-[320px] md:h-[200px]">
            <div className="h-[100px] flex flex-wrap gap-x-[7px] justify-center items-center">
              <Image
                src="/medpart/pertamina2.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '100%' }}
              />
              <Image
                src="/medpart/maxpower.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '120%' }}
              />
              <Image
                src="/medpart/pln.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '40%' }}
              />
              {/* </div>
            <div className="h-[60px]  flex flex-wrap justify-center items-center gap-[5px]"> */}
              <Image
                src="/medpart/pupuk.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '25%' }}
              />
              <Image
                src="/medpart/sriwahana.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '50%' }}
              />
              <Image
                src="/medpart/ss.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '50%' }}
              />
              <Image
                src="/medpart/wismamm.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '60%' }}
              />
              <Image
                src="/medpart/explora.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '25%' }}
              />
              <Image
                src="/medpart/ourwear.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '25%' }}
              />
              <Image
                src="/medpart/getgit.png"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '40%' }}
              />
            </div>
          </div>
          {/* <div className="grid grid-flow-col lg:flex lg:flex-row gap-[5px] lg:gap-[10px] justify-center items-center">
            <div className="h-[102px] sm:h-[162px] w-fit rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/pertamina2.png" width={299} height={102} />
            </div>
            <div className="h-[92px] sm:h-[152px] w-fit rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/maxpower.png" width={200} height={50} />
            </div>
          </div>
          <div className="grid grid-flow-col lg:flex lg:flex-row justify-center items-center gap-[5px] lg:gap-[10px]">
            <div className="h-[82px] sm:h-[142px] w-fit px-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/pupuk.png" width={185} height={50} />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit p-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/pln.png" width={100} height={70} />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit px-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/explora.png" width={185} height={50} />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit px-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/getgit.png" width={150} height={100} />
            </div>
          </div>
          <div className="grid grid-flow-col lg:flex lg:flex-row justify-center items-center gap-[5px] lg:gap-[10px]">
            <div className="h-[82px] sm:h-[142px] w-fit px-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/ourwear.png" width={185} height={50} />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit p-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/sriwahana.png" width={130} height={130} />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit p-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/ss.png" width={130} height={130} className="rounded-xl" />
            </div>
            <div className="h-[82px] sm:h-[142px] w-fit p-[8px] rounded-xl shadow-lg bg-gradient-to-r  from-[#0DF8CF] to-[#05C2FC] flex justify-center items-center">
              <Image src="/medpart/wismamm.jpg" width={130} height={130} className="rounded-xl" />
            </div>
          </div> */}
          {/* <div
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="1000"
            className="h-[102px] lg:h-[65vh] sm:h-[63vh] lg:h-[70vh] xl:h-[100vh] 2xl:h-[110vh]  grid grid-rows-4 aos-init"
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
          </div> */}
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
