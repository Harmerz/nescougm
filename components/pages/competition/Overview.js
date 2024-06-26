import 'aos/dist/aos.css'

import AOS from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'

import Icon00 from '../../../public/vector/competition/competition-overview-00.svg'
import Icon01 from '../../../public/vector/competition/competition-overview-01.svg'
import Icon02 from '../../../public/vector/competition/competition-overview-02.svg'
import { Button } from '../../element/button'
import OverviewList from './OverviewList'
import VerticalBar from './VerticalBar'

export function Overview({
  competitionDescription,
  peserta,
  biayaPendaftaran,
  contactPersons,
  guidebook,
}) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div
      className="w-full h-fit lg:min-h-[620px] lg:h-[100vh] bg-c-00 py-[5vh] box-content flex justify-around items-center flex-col lg:flex-row relative"
      id="CompetitionOverview"
    >
      <div
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionOverview"
        data-aos-anchor-placement="top-center"
        className="absolute inset-0 z-[11] pointer-events-none"
      >
        <div className="w-[30vw] h-[30vw] md:w-[22vw] md:h-[22vw] rounded-full absolute left-0 top-0 lg:-left-[1%] lg:top-[12%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px]" />
        <div className="w-[10vw] h-[10vw] rounded-full absolute left-[21%] top-[10vw] bg-c-01 opacity-[.14] hidden lg:block blur-[80px] md:blur-[90px]" />
        <div className="w-[36vw] h-[36vw] rounded-full absolute left-[2%] top-[42%] bg-c-01 opacity-[.14] lg:hidden blur-[80px] md:blur-[90px]" />
        <div className="absolute inset-0 -top-[100%] -bottom-[100%] overflow-hidden">
          <div className="w-[22vw] h-[22vw] rounded-full absolute -right-[5%] top-[36%] lg:top-[48%] bg-c-01 opacity-[.14] blur-[80px] md:blur-[90px] z-[11]" />
          <div className="w-[45vw] h-[45vw] rounded-full absolute -right-[7%] bottom-[36%] bg-c-01 opacity-[.14] lg:hidden blur-[80px] md:blur-[90px] z-[11]" />
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-delay="500"
        data-aos-anchor="#CompetitionOverview"
        data-aos-anchor-placement="top-center"
        className="h-4/5"
      >
        <VerticalBar title="Overview" color="c-01" />
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor="#CompetitionOverview"
        data-aos-anchor-placement="top-center"
        className="w-[80%] lg:w-[20%] text-justify lg:text-left lg:h-fit flex flex-col mb-[5%] items-center lg:items-start"
      >
        <div className="flex flex-col items-center w-fit">
          <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-jost font-bold text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02">
            Overview
          </div>
          <div className="w-[80%] h-[4px] mt-[8px] bg-c-01" />
        </div>
        <div className="w-full mt-[15px] font-poppins text-white text-[12px] md:text-[16px] 2xl:text-xl   text-justify">
          {competitionDescription}
        </div>
        <Link href={guidebook} className="mt-[15px] z-[100]">
          <Button type="secondary" size="sm">
            Guide Book
          </Button>
        </Link>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor="#CompetitionOverview"
        data-aos-anchor-placement="top-center"
        className="w-[40%] lg:w-[28%] flex justify-center items-center"
      >
        <svg
          width="456"
          viewBox="0 0 456 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="group pointer-events-none"
        >
          <path
            d="M415.999 565.5H54.0039V149.395C54.0039 149.395 54.0039 0 231.002 0C415.999 0 415.999 149.395 415.999 149.395V565.5Z"
            fill="url(#paint0_linear_747_1944)"
            className="pointer-events-auto"
          />
          <path
            d="M235.437 181.696L272 215.696L379.687 510.164L57.6867 510.164L57.6869 292.696L131.937 215.696L235.437 181.696Z"
            fill="url(#paint1_linear_747_1944)"
          />
          <path
            d="M247.159 136C241.794 122.418 235.993 91.4428 255.709 76.2023C280.355 57.1517 305.5 36.8716 305.5 12"
            stroke="black"
            strokeWidth="10"
          />
          <ellipse
            cx="199.5"
            cy="267.5"
            rx="88.5"
            ry="87.5"
            fill="#d3d3d3"
            className="animate-[flicker_4s_linear_infinite] group-hover:animate-none"
          />
          <rect
            x="187.111"
            y="148"
            width="99.5367"
            height="38"
            rx="10"
            transform="rotate(18.5848 187.111 148)"
            fill="#1F2326"
          />
          <rect
            x="215.111"
            y="119"
            width="69.0802"
            height="38"
            rx="10"
            transform="rotate(18.5848 215.111 119)"
            fill="#1F2326"
          />
          <path d="M213.912 199L198.999 220.298" stroke="#1F2326" strokeWidth="4" />
          <path d="M228 203L228.842 228.986" stroke="#1F2326" strokeWidth="4" />
          <defs>
            <linearGradient
              id="paint0_linear_747_1944"
              x1="249.501"
              y1="215.561"
              x2="-3.77413"
              y2="476.258"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.0260485"
                stopColor="#037497"
                className="animate-[flickerBgStart_4s_linear_infinite] group-hover:animate-none"
              />
              <stop
                offset="0.43529"
                stopColor="#037497"
                className="animate-[flickerBgCenter_4s_linear_infinite] group-hover:animate-none"
              />
              <stop
                offset="1"
                stopColor="#037497"
                className="animate-[flickerBgEnd_4s_linear_infinite] group-hover:animate-none"
              />
            </linearGradient>
            <linearGradient
              id="paint1_linear_747_1944"
              x1="244.738"
              y1="143.353"
              x2="154.187"
              y2="466.164"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor="white"
                stopOpacity="0"
                className="animate-[flickerLight_4s_linear_infinite] group-hover:animate-none"
              />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor="#CompetitionOverview"
        data-aos-anchor-placement="top-center"
        className="w-[60%] lg:w-[25%] lg:h-[60%] flex flex-col items-center justify-evenly"
      >
        <OverviewList icon={Icon00} title="Kategori Peserta:">
          {peserta}
        </OverviewList>
        <OverviewList icon={Icon01} title="Biaya Pendaftaran:">
          {biayaPendaftaran}
        </OverviewList>
        <OverviewList icon={Icon02} title="Contact Person:">
          {contactPersons.map(([nama, wa, line]) => (
            <div key={nama + wa}>
              <div className="font-bold">{nama}</div>
              <div>
                WA:{' '}
                <a
                  href={`http://wa.me/62${wa}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:opacity-50"
                >
                  {wa}
                </a>
              </div>
              <div>
                LINE:{' '}
                <a
                  href={`http://line.me/ti/p/~${line}`}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:opacity-50"
                >
                  {line}
                </a>
              </div>
            </div>
          ))}
        </OverviewList>
      </div>
    </div>
  )
}
