/* eslint-disable no-unused-vars */
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Image from 'next/image'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { EffectCoverflow, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Button } from '../../element/button'
// ;
function ScrollUpCompetition() {
  return (
    <div className="flex flex-col">
      <div className="bg-c-00 w-14 h-14">
        <Image src="/vector/competition/competition-overview-00.svg" width={50} height={50} />
      </div>
      <div className="bg-c-00 w-14 h-14">
        <Image src="/vector/competition/competition-overview-01.svg" width={50} height={50} />
      </div>
      <div className="bg-c-00 w-14 h-14">
        <Image src="/vector/competition/competition-overview-02.svg" width={50} height={50} />
      </div>
    </div>
  )
}

export function HomePageCompetition() {
  const Lomba = ['Paper Competition', 'Poster Competition', 'Essay Competition']
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="h-[100vh] justify-center items-center flex bg-c-00">
      <div className="w-4/5 border-4 border-c-01 h-1/2 rounded-xl flex  ">
        <div className="flex place-self-center flex-col">
          <div className="justify-between flex flex-row items-center">
            <div id="Judul" className="ml-10 flex items-center">
              <div className="w-full h-full flex flex-col">
                <h1 className="text-5xl font-bold w-4/5 text-center justify-center text-white">
                  {Lomba[activeIndex]}
                </h1>
                <div className="justify-center flex w-4/5 mt-10">
                  <Button className="self-items-center" type="secondary" size="md">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            <div id="swiper" className="w-1/2 justify-end flex self-end h-48">
              <div className="self-end flex w-1/3 h-full relative">
                <div className="w-full absolute rounded-md bg-gradient-to-r from-c-01 to-c-02 h-11 justify-end top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
                <div className="w-full absolute justify-end top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
                  <Swiper
                    onSlideChange={(e) => setActiveIndex(e.activeIndex)}
                    direction="vertical"
                    // pagination={{
                    //   clickable: true,
                    // }}
                    className="mySwipper justify-end"
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
                  >
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-03 flex items-center justify-center self-center"
                    >
                      Slide 1
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-03 flex items-center justify-center self-center"
                    >
                      Slide 2
                    </SwiperSlide>
                    <SwiperSlide
                      style={{
                        width: '77px',
                        height: '77px',
                        borderRadius: '11px',
                      }}
                      className="bg-c-03 flex items-center justify-center self-center"
                    >
                      Slide 3
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center self-center mt-10">
            <p className="text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
