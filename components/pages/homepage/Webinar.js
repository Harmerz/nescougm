import 'aos/dist/aos.css'

import AOS from 'aos'
import Image from 'next/image'
import { useEffect } from 'react'

export function Webinar() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])

  return (
    <div className="w-full relative min-h-screen py-16 px-10 sm:px-20  bg-[#1F2326] flex content-center">
      <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute bottom-2/3 sm:right-10 lg:top-1/4  justify-self-end">
        <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>
      <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute top-2/3 lg:top-2/3 sm:left-10">
        <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>
      <div className="max-w-[1240px] min-h-fit mx-auto grid md:grid-rows-1 self-center gap-8 lg:gap-20">
        <div className="flex justify-center h-fit">
          <h1
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="text-white md:text-[42px] 2xl:text-[50px] sm:text-3xl text-xl font-bold text-justify font-jost py-2 aos-init"
          >
            Seminar <span className="text-transparent bg-clip-text bg-[#0DF8CF]">Nasional</span>
          </h1>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="lg:flex grid gap-8 aos-init"
        >
          <div className="lg:w-1/2 justify-center flex items-center">
            <Image
              height={0}
              width={0}
              className="w-4/5 xl:w-1/2 h-full sm:h-4/5 lg:h-full mx-auto my-auto"
              src="/"
              alt="/"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[12px] sm:text-[15px] md:text-[16px] text-justify font-poppins leading-[36.75px] text-white pb-10 lg:pb-0">
              {' '}
              Seminar Nasional adalah seminar yang diadakan oleh NESCO tiap tahunnya dengan tema
              ketenagalistrikan untuk menjadi ruang diskusi dan upaya mengenalkan serta mendorong
              perkembangan sistem ketenagalistrikan di kalangan masyarakat umum.
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
