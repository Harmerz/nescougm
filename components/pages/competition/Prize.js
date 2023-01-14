import 'react-responsive-carousel/lib/styles/carousel.min.css'

import Image from 'next/image'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'

import IconJuara from '../../../public/vector/competition/competition-juara.svg'
import Vector0 from '../../../public/vector/competition/competition-prize-00.svg'
import Vector1 from '../../../public/vector/competition/competition-prize-01.svg'
import RightArrow from '../../../public/vector/competition/competition-prize-right-arrow.svg'
import PrizeList from './PrizeList'
import VerticalBar from './VerticalBar'

export function Prize({ favorit = true }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  return (
    <div className="w-full h-fit lg:h-[100vh] bg-c-00 flex justify-end items-center relative">
      <Image src={Vector1} className="absolute bottom-0 right-0 w-[30%]" />
      <div className="w-[40vw] h-[40vw] lg:w-[22vw] lg:h-[22vw] rounded-full absolute -left-[3%] top-[7%] lg:left-[1%] lg:top-[18%] xl:top-[12%] 2xl:top-[6%] bg-c-01 opacity-[.14] z-[11] blur-[80px] md:blur-[90px]" />
      <div className="w-[34vw] h-[34vw] lg:w-[22vw] lg:h-[22vw] rounded-full absolute left-[5%] bottom-[35%] lg:left-[4%] md:bottom-[30%] lg:bottom-[11%] bg-c-01 opacity-[.14] z-[11] lg:z-[9] blur-[80px] md:blur-[90px]" />
      <div className="w-[13vw] h-[13vw] rounded-full absolute left-[21%] bottom-[5%] xl:bottom-[2%] bg-c-01 opacity-[.14] z-[9] hidden lg:block blur-[80px] md:blur-[90px]" />
      <div className="absolute inset-0 -top-[100%] overflow-hidden">
        <div className="w-[30vw] h-[30vw] lg:w-[22vw] lg:h-[22vw] rounded-full absolute -right-[2%] top-[70%] lg:top-[51%] bg-c-01 opacity-[.14] z-[11] blur-[80px] md:blur-[90px]" />
      </div>
      <div className="absolute w-[18vw] left-0 inset-y-0 bg-gradient-to-b from-c-01 to-c-02 flex items-center z-10">
        <div className="h-[100%] ml-[10%]">
          <VerticalBar title="Prize Pool" color="white" hide={false} />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={Vector0}
            className="w-[85%] absolute bottom-[6%] md:bottom-[4%] lg:bottom-[5%] right-[4%]"
          />
        </div>
      </div>
      <div className="w-[35vw] lg:w-[19vw] h-[80%] lg:h-[63%] mt-[1%] bg-bg-01 absolute left-[8vw] flex flex-col z-10">
        <div className="h-full text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 flex items-center ml-[10%]">
          Prize
          <br />
          Pool
        </div>
        <div className="h-[24%] ml-[10%] w-[80%] text-white text-base md:text-lg lg:text-xl xl:text-2xl flex items-center">
          <div>
            Go to Kategori{' '}
            <span
              className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-tl from-c-01 to-c-02 z-[100]"
              onClick={() => setCurrentSlide((slide) => slide + 1)}
              role="presentation"
            >
              {currentSlide ? 'Mahasiswa' : 'SMA/MA sederajat'}
              {'>'}
            </span>
          </div>
        </div>
      </div>
      <div className="w-[82vw] h-full">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          emulateTouch
          className="w-full h-full"
          renderArrowPrev={() => <div />}
          renderArrowNext={(clickHandler) => {
            return (
              <div className="absolute top-0 bottom-0 right-0 mr-[7vw] flex items-center z-[100]">
                <button onClick={clickHandler} type="button" className="w-[2vw]">
                  <Image src={RightArrow} />
                </button>
              </div>
            )
          }}
          renderIndicator={(onClickHandler, isSelected, index) => {
            return (
              <span
                className={`inline-block w-[12px] h-[12px] rounded-full ${
                  index === 0 ? 'ml-[25vw] sm:ml-[23vw] md:ml-[21vw] lg:ml-[0.4vw]' : ''
                } mx-[0.4vw] lg:mb-[15vh] cursor-pointer ${isSelected ? 'bg-c-01' : 'bg-white'}`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                role="button"
                tabIndex={0}
              />
            )
          }}
          selectedItem={currentSlide}
          onChange={(index) => setCurrentSlide(index)}
        >
          <div>
            <div className="w-full lg:h-[100vh] flex lg:flex-col">
              <div
                className={`w-[20vw] lg:w-fit h-fit ${
                  favorit ? 'mt-[5%]' : 'sm:mt-[1vh] md:mt-[2.5vh]'
                } lg:mt-[10vh] text-lg md:text-xl lg:text-4xl xl:text-5xl font-bold text-white flex flex-wrap ml-[6vw] lg:ml-[3vw]`}
              >
                Kategori&nbsp;
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 text-left">
                  Mahasiswa
                </div>
              </div>
              <div className="w-[60vw] h-full flex flex-col lg:flex-row mx-[10vw] mt-[7%] pl-[2vw] mb-[10vw] lg:mb-0">
                <PrizeList icon={IconJuara} title="Juara I">
                  Rp5.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                <PrizeList icon={IconJuara} title="Juara II">
                  Rp4.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                <PrizeList icon={IconJuara} title="Juara III">
                  Rp3.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                {favorit ? (
                  <PrizeList icon={IconJuara} title="Juara Favorit">
                    Rp250.000,-
                    <br />
                    +sertifikat
                  </PrizeList>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
          <div>
            <div className="w-full lg:h-[100vh] flex lg:flex-col">
              <div
                className={`w-[20vw] lg:w-fit h-fit mt-[0%] ${
                  favorit ? 'sm:mt-[1%] md:mt-[2%] text-lg' : 'text-sm sm:text-base'
                } lg:mt-[10vh] md:text-xl lg:text-4xl xl:text-5xl font-bold text-white flex flex-wrap ml-[6vw] lg:ml-[3vw]`}
              >
                Kategori&nbsp;
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 text-left">
                  SMA/MA sederajat
                </div>
              </div>
              <div className="w-[60vw] h-full flex flex-col lg:flex-row mx-[10vw] mt-[7%] pl-[2vw] mb-[10vw] lg:mb-0">
                <PrizeList icon={IconJuara} title="Juara I">
                  Rp5.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                <PrizeList icon={IconJuara} title="Juara II">
                  Rp4.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                <PrizeList icon={IconJuara} title="Juara III">
                  Rp3.000.000,-
                  <br />
                  +sertifikat
                </PrizeList>
                {favorit ? (
                  <PrizeList icon={IconJuara} title="Juara Favorit">
                    Rp250.000,-
                    <br />
                    +sertifikat
                  </PrizeList>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
