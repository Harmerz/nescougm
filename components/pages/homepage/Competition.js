/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../../../styles/Home.module.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { EffectCoverflow, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../../element/button'
// ;

const Yoyo = {
  hidden: { y: -20 },
  visible: (i) => {
    const delay = 1 + i * 0.5
    return {
      y: 0,
      transition: {
        delay,
        type: 'spring',
        ease: 'easeOut',
        duration: 1,
        repeatType: 'mirror',
        repeat: Infinity,
        yoyo: Infinity,
      },
    }
  },
}

export function HomePageCompetition() {
  const Lomba = ['Paper Competition', 'Poster Competition', 'Essay Competition']
  const Picture = [
    '/homepageassets/video.svg',
    '/homepageassets/pape.svg',
    '/homepageassets/poster.svg',
  ]
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="min-h-screen relative justify-center items-center flex flex-col bg-c-00 overflow-hidden">
      <div className="flex min-h-fit h-[20vh] w-full px-8 sm:px-16 mb-16 mt-8 justify-start">
        <div className="w-full h-full place-self-end lg:place-self-center">
          <motion.svg
            initial="hidden"
            animate="visible"
            width="80"
            height="160"
            viewBox="0 0 55 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.rect
              variants={Yoyo}
              custom={4}
              x="21.8105"
              y="23.2974"
              width="32.1892"
              height="32.1892"
              stroke="url(#paint0_linear_511_997)"
              strokeWidth="2"
              strokeDasharray="4 4"
            />
            <motion.rect
              variants={Yoyo}
              custom={2}
              x="1"
              y="1"
              width="36.6486"
              height="36.6486"
              fill="url(#paint1_linear_511_997)"
              stroke="url(#paint2_linear_511_997)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_511_997"
                x1="37.9051"
                y1="22.2974"
                x2="37.9051"
                y2="56.4866"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_511_997"
                x1="19.3243"
                y1="0"
                x2="19.3243"
                y2="38.6486"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_511_997"
                x1="19.3243"
                y1="0"
                x2="19.3243"
                y2="38.6486"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="2000"
        data-aos-delay="500"
        className="w-4/5 shadow-xl relative border-4 border-c-02 h-fit max-w-[1560px] rounded-xl grid gap-32 sm:gap-0 aos-init"
      >
        <div className="relative w-full h-[8vh] sm:h-[8vh] bottom-full flex justify-center">
          <div className="absolute w-[180px] h-[180px] xl:w-[200px] xl:h-[200px] rounded-full border-dotted border-c-02 border-4 bg-c-00 flex justify-center">
            <Image src={Picture[activeIndex]} width={120} height={100} />
          </div>
        </div>
        <div className="flex flex-col gap-12 sm:gap-0">
          <div className="justify-between flex flex-row items-center">
            <div id="Judul" className="w-1/2 hidden sm:flex items-center xl:ml-10">
              <div className="w-full h-full flex flex-col">
                <h1 className="sm:text-4xl lg:text-5xl font-bold w-4/5 xl:w-3/5 text-center justify-center text-white">
                  {Lomba[activeIndex]}
                </h1>
                <div className="justify-center hidden sm:flex w-4/5 xl:w-3/5 mt-10">
                  <Button className="self-items-center" type="secondary" size="md">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div
              id="swiper"
              className="w-full sm:w-1/2 justify-center sm:justify-end flex self-end h-fit sm:h-48"
            >
              <div className="self-end flex w-3/4 sm:w-2/5 lg:w-1/3 h-full relative">
                <div className=" w-1/2 sm:w-full xl:w-4/5 absolute rounded-md sm:rounded-none sm:rounded-l-md bg-gradient-to-r from-c-01 to-c-02 h-11 justify-end top-1/2 translate-x-1/2 sm:-translate-x-0 sm:right-0 translate-y-[-50%]" />
                <div className="w-full absolute justify-end top-1/2 sm:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] hidden sm:block">
                  <Swiper
                    onSlideChange={(e) => setActiveIndex(e?.activeIndex)}
                    direction="vertical"
                    // pagination={{
                    //   clickable: true,
                    // }}
                    className="mySwipper justify-end hidden md:block"
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                    clickable
                  >
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/video.svg"
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/pape.svg"
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/poster.svg"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="w-full absolute justify-end top-1/2 sm:top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] sm:hidden block">
                  <Swiper
                    onSlideChange={(e) => setActiveIndex(e?.activeIndex)}
                    direction="horizontal"
                    pagination={{
                      clickable: true,
                    }}
                    className="mySwipper justify-end hidden md:block"
                    effect="coverflow"
                    grabCursor
                    centeredSlides
                    slidesPerView="auto"
                    spaceBetween={50}
                    coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth: 10,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    modules={[EffectCoverflow]}
                  >
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/video.svg"
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/pape.svg"
                      />
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-00 border-c-02 border-4 flex items-center justify-center self-center relative"
                    >
                      <img
                        className="mx-auto flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute h-14 w-14"
                        src="/homepageassets/poster.svg"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 flex items-center self-center mt-2 sm:mt-10 mb-10 sm:mb-10 px-5 sm:px-0">
            <p className="text-white text-center ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:grid h-[20vh] lg:h-[25vh] sm:w-1/3 lg:w-1/4  relative justify-self-end self-end w-full">
        <div className="relative pb-15 bottom-1/2 h-4/5 sm:w-1/5 justify-self-end ">
          <Image
            src="/homepageassets/Group 607.svg"
            className="w-full h-full"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePageCompetition
