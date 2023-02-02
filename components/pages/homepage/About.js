import 'aos/dist/aos.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

const draw = {
  hidden: { x: -200 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      x: 0,
      transition: {
        delay,
        type: 'spring',
        duration: 1,
        bounce: 0,
        repeat: Infinity,
        repeatType: 'mirror',
        repeatDelay: 2,
      },
    }
  },
}
export function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])
  return (
    <div className="shadow-2xl rounded-sm min-h-screen bg-gradient-to-t pr-[8px] pt-[0px] pb-[6px] pl-[8px] from-c-01 to-bg-02">
      <div className="grid relative rounded-lg content-center bg-c-00 min-h-screen py-16 px-8 sm:p-0">
        <div className="hidden sm:flex min-h-fit lg:h-[14vh] sm:px-20 lg:px-24 justify-start">
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
            className="sm:w-[70px] sm:h-[60px] lg:w-[85.63px] lg:h-[60.85px] place-self-end lg:place-self-center"
          >
            <Image
              className="h-full w-full"
              width={0}
              height={0}
              src="/homepageassets/Group 4.svg"
              alt="vektor"
            />
          </motion.div>
        </div>

        <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute top-20 left-0 lg:top-1/4 lg:left-10">
          <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
        </div>
        <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] h-[281px] w-[281px] absolute top-2/3  lg:top-2/3 lg:right-10 justify-self-end">
          <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
        </div>

        <div className="max-w-[1560px] min-h-fit mx-auto grid lg:flex self-center gap-8 lg:gap-10 sm:py-8 sm:px-20 lg:py-12 aos-init">
          <div className="lg:w-1/2 justify-center m-0 lg:m-auto lg:order-last">
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="aspect-video flex items-center"
            >
              <iframe
                width="853"
                height="480"
                className="h-4/5 w-4/5 m-auto rounded-xl"
                src="aftermovie fix.mp4"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="500"
            className="lg:w-1/2 flex flex-col justify-center justify-items-center gap-8"
          >
            <h1 className="text-white md:text-[42px] md:leading-[43.2px] sm:text-2xl 2xl:text-[50px] lg:leading-[50px] text-xl font-bold font-jost text-center lg:text-left pt-2">
              National{' '}
              <span className="text-transparent bg-clip-text bg-[#0DF8CF]">Electrical</span> Power
              System Competition
            </h1>

            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="text-[12px] sm:text-[15px] xl:text-[16px] text-justify font-medium font-poppins leading-[36.75px] text-white pb-10 lg:pb-0"
            >
              National Electrical Power System Competition (NESCO) merupakan sebuah kompetisi
              tingkat nasional Badan Semi Otonom (BSO) Magatrika (Mahasiswa Ketenagalistrikan) yang
              berada di bawah arahan Keluarga Mahasiswa Teknik Elektro dan Teknologi Informasi
              Fakultas Teknik Universitas Gadjah Mada (KMTETI FT UGM) yang membahas mengenai
              permasalahan listrik tegangan tinggi yang bertujuan untuk meningkatkan perkembangan
              ketenagalistrikan khususnya di Indonesia.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          className="hidden sm:flex min-h-fit lg:h-[14vh] sm:px-20 lg:px-20 xl:px-40 justify-end"
        >
          <motion.div
            variants={draw}
            custom={4}
            className="place-self-center sm:w-[150px] sm:h-[100px] lg:w-[200px] lg:h-[150px] xl:w-[300px] xl:h-[190px]"
          >
            <Image
              className="h-full w-full"
              width={0}
              height={0}
              src="/homepageassets/Vector 212.svg"
              alt="vektor"
            />
          </motion.div>

          <motion.div
            variants={draw}
            custom={3}
            className="place-self-center sm:w-[75px] sm:h-[100px] lg:w-[100px] lg:h-[150px] xl:w-[120px] xl:h-[190px]"
          >
            <Image
              className="h-full w-full"
              width={0}
              height={0}
              src="/homepageassets/Vector 213.svg"
              alt="vektor"
            />
          </motion.div>

          <motion.div
            variants={draw}
            custom={2}
            className="place-self-center sm:w-[75px] sm:h-[100px]  lg:w-[100px] lg:h-[150px] xl:w-[120px] xl:h-[190px]"
          >
            <Image
              className="h-full w-full"
              width={0}
              height={0}
              src="/homepageassets/Vector 214.svg"
              alt="vektor"
            />
          </motion.div>

          <motion.div
            variants={draw}
            custom={1}
            className="place-self-center sm:w-[75px] sm:h-[100px] lg:w-[100px] lg:h-[150px] xl:w-[120px] xl:h-[190px]"
          >
            <Image
              className="h-full w-full"
              width={0}
              height={0}
              src="/homepageassets/Vector 215.svg"
              alt="vektor"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
