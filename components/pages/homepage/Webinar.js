import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'

export function Webinar() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 2000,
    })
  }, [])

  return (
    <div className="bg-bg-02 h-[100vh]">
      <div className="grid h-[100vh]">
        <div
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="500"
          className="grid h-[20vh] lg:h-[35vh] justify-center row-start-1 aos-init aos-animate"
        >
          <div className="self-end lg:self-center place-self-center text-[22px] sm:text-[32px] lg:text-[42px] text-justify font-bold font-poppins leading:[20px] lg:leading-[43.15px] text-transparent bg-clip-text bg-gradient-to-br from-c-01 to-c-02">
            {' '}
            Lorem Ipsum sit dolor amet{' '}
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="1000"
          className="lg:flex grid justify-center h-[80vh] lg:h-[65vh] aos-init"
        >
          <div className="justify-self-center self-center lg:self-start box-border w-[245px] h-[165px] sm:w-[300px] sm:h-[200px] lg:h-[260px] lg:w-[350px] xl:h-[361px] xl:w-[438px] shadow-md bg-[#D9D9D9] rounded-xl  lg:mt-0 lg:mr-16 xl:mr-24" />
          <div className="sm:h-[20vh] lg:h-[30vh] justify-self-center self-start lg:self-start  w-11/12 sm:w-8/12 lg:w-4/12 text-[12px] lg:text-[14.38px] text-justify font-medium font-poppins leading-[36.75px] text-white lg:ml-16 xl:ml-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>
        </div>
      </div>
    </div>
  )
}
