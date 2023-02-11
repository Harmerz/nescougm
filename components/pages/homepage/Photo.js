import 'aos/dist/aos.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../styles/Home.module.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import Slider from 'react-slick'

import Caraousel from './Caraousel'
import {
  imageSlide1,
  imageSlide2,
  imageSlide3,
  imageSlide4,
  imageSlide5,
  imageSlide6,
  imageSlide7,
  smimageSlide,
} from './data'

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: 'spring',
          duration: 3,
          bounce: 0,
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 2,
        },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}
export function Photo() {
  useEffect(() => {
    AOS.init()
  }, [])
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className=" md:min-h-screen bg-c-00">
      <div className="bg-gradient-to-t from-transparent to-c-02 relative rounded-[10px] p-[1px] md:p-[3px] md:shadow-[0_-10px_15px_rgba(13,248,207,0.2)] md:min-h-screen flex flex-col sm:grid">
        <div className="bg-c-00 rounded-t-[10px] md:min-h-screen ">
          <div className="flex h-[15vh] sm:h-[10vh] lg:h-[13vh] xl:h-[18vh]">
            {/* <div className="flex self-center ml-8 lg:ml-12 w-[90px] h-[50px] sm:w-[120px] sm:h-[80px] lg:w-[150.5px] lg:h-[100px] xl:w-[180.5px] xl:h-[120px]">
              <motion.svg
                className="w-full h-full"
                viewBox="0 0 146 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  d="M44 15L102 15"
                  stroke="url(#paint0_linear_511_986)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={draw}
                  custom={4}
                />
                <motion.path
                  d="M28.8284 1H54.6716C56.4534 1 57.3457 3.15428 56.0858 4.41421L32.0858 28.4142C31.7107 28.7893 31.202 29 30.6716 29H4.82843C3.04662 29 2.15428 26.8457 3.41421 25.5858L27.4142 1.58579C27.7893 1.21071 28.298 1 28.8284 1Z"
                  stroke="url(#paint1_linear_511_986)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  variants={draw}
                  custom={1}
                />
                <motion.path
                  d="M114.828 1H140.672C142.453 1 143.346 3.15428 142.086 4.41421L118.086 28.4142C117.711 28.7893 117.202 29 116.672 29H90.8284C89.0466 29 88.1543 26.8457 89.4142 25.5858L113.414 1.58579C113.789 1.21071 114.298 1 114.828 1Z"
                  stroke="url(#paint2_linear_511_986)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeOpacity="1"
                  variants={draw}
                  custom={7}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_511_986"
                    x1="55.3571"
                    y1="18"
                    x2="72.9835"
                    y2="15.8565"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#05C2FC" />
                    <stop offset="1" stopColor="#0DF8CF" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_511_986"
                    x1="30"
                    y1="30.5"
                    x2="52.5"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0DF8CF" />
                    <stop offset="1" stopColor="#05C2FC" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_511_986"
                    x1="116"
                    y1="30.5"
                    x2="138.5"
                    y2="7"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0DF8CF" />
                    <stop offset="1" stopColor="#05C2FC" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </div> */}
          </div>
          <div className="absolute h-[200px] w-[200px] top-2/3 sm:h-[281px] sm:w-[281px] sm:bottom-5">
            <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
          </div>

          <div className="hidden md:grid min-h-fit w-full sm:px-20 md:px-[100px] pb-10 lg:px-24  justify-self-center">
            <div
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay="500"
              className="flex justify-center sm:mt-0 sm:mb-0 aos-init pb-[30px] 2xl:pb-[71px]"
            >
              <div className="font-jost font-bold self-center text-[30px] sm:text-[36px] text-justify leading-[40.15px] text-white ">
                Gallery <span className="text-[#0DF8CF]">NESCO</span>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              className="grid gap-4 min-h-fit pb-20 mt-12 lg:mt-20 aos-init"
            >
              <div className="flex gap-4">
                <div className="relative top-1/2 basis-1/3 sm:h-[300px] lg:h-[400px] xl:h-[500px]">
                  <Caraousel images={imageSlide1} />
                </div>
                <div className="basis-1/3 sm:h-[400px] lg:h-[500px] xl:h-[600px]">
                  <Caraousel images={imageSlide2} />
                </div>
                <div className="basis-1/3 relative top-1/2 sm:h-[200px] lg:h-[250px] xl:h-[300px]">
                  <Caraousel images={imageSlide3} />
                </div>
              </div>

              <div className="flex gap-4 sm:pl-20 sm:pr-16 lg:pl-28 lg:pr-20 xl:pl-[135px] xl:pr-20 2xl:pl-52">
                <div className="basis-1/4 sm:h-[225px] lg:h-[275px] xl:h-[320px] self-end">
                  <Caraousel images={imageSlide4} />
                </div>
                <div className="basis-3/4 sm:h-[320px] lg:h-[420px] xl:h-[520px]">
                  <Caraousel images={imageSlide5} />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="basis-5/12 sm:h-[150px] lg:h-[250px] xl:h-[350px]">
                  <Caraousel images={imageSlide6} />
                </div>

                <div className="basis-7/12 sm:h-[200px] lg:h-[300px] xl:h-[400px]">
                  <Caraousel images={imageSlide7} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-[50px] sm:pt-[135px] pb-[214px] md:py-0 flex flex-col sm:max-w-[468px] sm:mx-auto md:hidden px-10 gap-5 mb-auto md:pb-20">
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              data-aos-delay="500"
              className="flex justify-center aos-init"
            >
              <h1 className=" md:text-4xl sm:text-3xl text-xl font-bold text-justify font-jost text-white py-2 aos-init">
                Gallery <span className="text-[#0DF8CF]">NESCO</span>
              </h1>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
              className="max-w-5xl w-full"
            >
              <Slider {...settings}>
                {smimageSlide.map((image) => {
                  return (
                    <div
                      key={image.image}
                      className="flex h-[300px] w-full m-w-[1560px] rounded-xl shadow-lg bg-gradient-to-r p-[2px] from-[#0DF8CF] to-[#05C2FC] mt-3"
                    >
                      <div className="relative w-full h-full mt-o mr-auto cursor-grab items-center bg-c-00 rounded-lg">
                        <Image
                          width={1500}
                          height={1000}
                          className="block w-full h-full object-cover rounded-lg"
                          src={image.image}
                          alt="/"
                        />
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
          {/* <div className="hidden sm:flex min-h-fit lg:h-[14vh] sm:px-20 lg:px-24 justify-end">
            <motion.div
              animate={{
                scale: [0.5, 1, 1, 0.5, 0.5],
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
              className="sm:w-[50px] lg:w-[60px]  place-self-end lg:place-self-center"
            >
              <Image
                className="h-full w-full"
                width={0}
                height={0}
                src="/homepageassets/Group 4.svg"
                alt="vektor"
              />
            </motion.div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Photo
