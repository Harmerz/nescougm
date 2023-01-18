import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

import TimelineList from './TimelineList'
import VerticalBar from './VerticalBar'

export function Timeline({ timelines }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="box-content pt-[7vh] lg:py-[5vh] w-full lg:min-h-[720px] lg:h-[100vh] bg-c-00 flex items-center relative"
      id="CompetitionTimeline"
    >
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionTimeline"
        data-aos-anchor-placement="top-center"
        className="absolute inset-0 pointer-events-none"
      >
        <div className="w-[19vw] h-[19vw] rounded-full absolute right-[0%] top-[15%] -translate-y-1/3 bg-c-01 opacity-[.14] z-[9] hidden lg:block blur-[80px] md:blur-[90px]" />
        <div className="w-[19vw] h-[19vw] rounded-full absolute left-[15%] top-[72%] -translate-x-1/2 -translate-y-1/3 bg-c-01 opacity-[.14] z-[9] hidden lg:block blur-[80px] md:blur-[90px]" />
        <div className="w-[40vw] h-[40vw] rounded-full absolute left-[15%] top-[24%] -translate-x-1/2 -translate-y-2/3 bg-c-01 opacity-[.14] z-[9] lg:hidden blur-[80px] md:blur-[90px]" />
        <div className="w-[40vw] h-[40vw] rounded-full absolute left-[2%] bottom-[20%] -translate-x-1/2 translate-y-2/3 bg-c-01 opacity-[.14] z-[9] lg:hidden blur-[80px] md:blur-[90px]" />
        <div className="absolute inset-0 -top-[100%] overflow-hidden">
          <div className="w-[40vw] h-[40vw] rounded-full absolute right-[1%] top-[70%] translate-x-1/2 -translate-y-2/3 bg-c-01 opacity-[.14] z-[9] lg:hidden blur-[80px] md:blur-[90px]" />
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionTimeline"
        data-aos-anchor-placement="top-center"
        className="hidden lg:block h-4/5 w-[2%] ml-[3.5%]"
      >
        <VerticalBar title="Timeline" color="c-01" />
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center z-[10] lg:ml-[5%] mt-[7vh] lg:mt-0 box-content pb-[5vh] lg:pb-0">
        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-anchor="#CompetitionTimeline"
          data-aos-anchor-placement="top-center"
          className="mb-[40px] lg:mb-0 lg:absolute w-1/2 lg:mx-auto lg:inset-x-0 lg:top-[15%] text-center text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-jost font-bold text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02"
        >
          Timeline
        </div>
        <div className="relative lg:static lg:mr-[8%] w-full h-full flex flex-col lg:flex-row justify-evenly">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor="#CompetitionTimeline"
            data-aos-anchor-placement="top-center"
            className="lg:h-[20%] absolute inset-y-0 inset-x-[43%] lg:inset-0 lg:my-auto bg-gradient-to-t lg:bg-gradient-to-l from-c-01 to-c-02 flex items-center overflow-hidden"
          >
            <div
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="500"
              data-aos-anchor="#CompetitionTimeline"
              data-aos-anchor-placement="top-center"
              className="hidden lg:block h-[400%] w-[2%] ml-[3.5%]"
            >
              <VerticalBar title="Timeline" color="white" />
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor="#CompetitionTimeline"
            data-aos-anchor-placement="top-center"
            className="lg:mr-[8%] w-full h-full flex flex-col lg:flex-row justify-evenly"
          >
            {timelines.map((x, i) => (
              <TimelineList index={`0${i + 1}`} timeline={x[0]} key="none">
                {x[1]}
              </TimelineList>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
