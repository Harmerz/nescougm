import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

export function About() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])
  return (
    <div className="shadow-xl h-[100vh] bg-gradient-to-t p-[6px] from-c-01 to-bg-02">
      <div className="grid items-center bg-bg-02 h-[98vh]">
        <div className="flex invisible sm:visible justify-start self-start h-[5vh] sm:h-[5vh] sm:ml-10 sm:mt-5">
          <img
            className="invisible sm:visible sm:w-[70px] sm:h-[60px] lg:w-[85.63px] lg:h-[65.85px]"
            src="/Group 4.svg"
            alt="vektor"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="lg:flex grid justify-center place-items-center h-[88vh] sm:h-[78vh] aos-init"
        >
          <div className=" grid self-start sm:self-start lg:self-center place-self-center w-[250px] sm:w-[500px] lg:w-[450px] xl:w-[550px] sm:mt-4 lg:ml-8 xl:ml-0 xl:mr-16">
            <div className="text-[18px] lg:text-[32px] xl:text-[42px] text-center lg:text-justify font-bold font-poppins leading-[43.15px] text-transparent bg-clip-text bg-gradient-to-br from-c-01 to-c-02">
              {' '}
              Lorem Ipsum sit dolor amet{' '}
            </div>
            <div className="w-[250px] sm:w-[500px] lg:w-[420px] xl:w-[550px] text-[12px] md:text-[15px] xl:text-[15px] text-justify font-medium font-poppins leading-[36.75px] mt-4 sm:mt-4 lg:mt-8 text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum. Sed ut perspiciatis unde omni.
            </div>
          </div>

          <div className="lg:self-center sm:self-end aspect-video lg:ml-8 lg:mb-12 xl:mb-0 xl:ml-20 row-start-1">
            <iframe
              title="This is a unique title"
              className="rounded-xl w-[250px] h-[140px] sm:w-[360px] sm:h-[202.5px] lg:w-[420px] lg:h-[236px] xl:w-[520px] xl:h-[292.5px]"
              src="/aftermovie fix.mp4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            />
          </div>
        </div>

        <div className="invisible sm:visible flex justify-end self-end h-[5vh] sm:h-[10vh] sm:mr-4 lg:mr-24 xl:mr-56 mb-5">
          <img width={338} height={403.5} src="/Group 608.svg" alt="vektor" />
        </div>
      </div>
    </div>
  )
}
