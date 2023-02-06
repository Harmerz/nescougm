import 'aos/dist/aos.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

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
          duration: 2,
          bounce: 0,
          repeat: Infinity,
          repeatType: 'mirror',
          repeatDelay: 1,
        },
        opacity: { delay, duration: 0.01 },
      },
    }
  },
}

export function Webinar() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <div className="w-full relative h-fit py-16 sm:py-[100px] md:py-[300px] px-10 sm:px-20 md:px-[100px] bg-[#1F2326]  content-center">
      <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute bottom-2/3 sm:right-10 lg:top-1/4  justify-self-end">
        <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>
      <div className="h-[200px] w-[200px] sm:h-[281px] sm:w-[281px] absolute top-2/3 lg:top-2/3 sm:left-10">
        <div className="h-full w-full bg-gradient-to-b from-c-02 to-bg-02 opacity-20 rounded-full blur-xl contrast-100 brightness-500 drop-shadow-xl saturate-500" />
      </div>

      <div className="max-w-[1240px]  min-h-fit mx-auto grid md:grid-rows-1 2xl:gap-[76px] self-center">
        <div className="flex justify-center h-fit ">
          <h1
            data-aos="fade-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="text-white  md:text-4xl sm:text-3xl text-xl  2xl:text-[50px] font-bold text-justify font-jost aos-init"
          >
            Seminar <span className="text-[#0DF8CF]">Nasional</span>
          </h1>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
          className="flex flex-col lg:flex-row aos-init"
        >
          <div className="w-1/2 mx-auto lg:mx-0 justify-center flex items-center">
            <Image
              height={284.42}
              width={233.5}
              className="w-4/5 md:3/5 xl:w-2/3 sm:h-4/5  mx-auto my-auto"
              src="/homepageassets/Webinar.svg"
              alt="/"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[12px] sm:text-[15px] md:text-[16px] text-justify font-poppins leading-[23.3px] md:leading-[36.75px] text-white pb-10 lg:pb-0">
              {' '}
              Seminar Nasional adalah seminar yang diadakan oleh NESCO tiap tahunnya dengan tema
              ketenagalistrikan untuk menjadi ruang diskusi dan upaya mengenalkan serta mendorong
              perkembangan sistem ketenagalistrikan di kalangan masyarakat umum.
            </h2>
          </div>
        </div>
      </div>
      <div className="hidden md:grid absolute right-0 top-0 h-[20vh] lg:h-[25vh] md:w-1/4 xl:w-1/3 justify-self-end self-end ">
        <div className="relative bottom-1/3 sm:bottom-2/3 h-4/5  sm:h-full  w-1/6 xl:w-1/12 justify-self-end ">
          <motion.svg
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            className=" w-full h-full"
            viewBox="0 0 49 415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
          >
            <motion.path
              d="M53.8969 387.205L24.1699 357.478V252.122L53.8969 222.395"
              stroke="url(#paint0_linear_511_1059)"
              strokeWidth="2"
              variants={draw}
              custom={1}
            />
            <motion.path
              d="M1 339.117V316.385L14.9892 330.374V353.106L1 339.117Z"
              fill="url(#paint1_linear_511_1059)"
            />
            <motion.path
              d="M47.7011 105.748L14.6396 138.809C14.5834 138.865 14.5518 138.942 14.5518 139.021V152.599C14.5518 152.866 14.8749 153 15.0639 152.811L48.1253 119.75C48.1816 119.694 48.2132 119.617 48.2132 119.538V105.96C48.2132 105.693 47.89 105.559 47.7011 105.748Z"
              fill="url(#paint2_linear_511_1059)"
            />
            <motion.path
              d="M47.7011 128.043L14.6396 161.104C14.5834 161.161 14.5518 161.237 14.5518 161.316V174.894C14.5518 175.162 14.8749 175.295 15.0639 175.106L48.1253 142.045C48.1816 141.989 48.2132 141.912 48.2132 141.833V128.255C48.2132 127.988 47.89 127.854 47.7011 128.043Z"
              fill="url(#paint3_linear_511_1059)"
            />
            <motion.path
              d="M30.6393 409.5C30.6393 412.445 33.0271 414.833 35.9727 414.833C38.9182 414.833 41.306 412.445 41.306 409.5C41.306 406.554 38.9182 404.167 35.9727 404.167C33.0271 404.167 30.6393 406.554 30.6393 409.5ZM34.9727 284.909V409.5H36.9727V284.909H34.9727Z"
              fill="url(#paint4_linear_511_1059)"
            />
            <motion.path
              d="M18.4863 224.143L54.3336 188.733"
              stroke="url(#paint5_linear_511_1059)"
              strokeWidth="2"
              variants={draw}
              custom={2}
            />
            <motion.path
              d="M1.87402 134.525L1.16692 133.818L0.874023 134.111V134.525H1.87402ZM27.6665 108.733L28.3737 109.44L28.6665 109.147V108.733H27.6665ZM22.3332 6C22.3332 8.94552 24.721 11.3333 27.6665 11.3333C30.6121 11.3333 32.9999 8.94552 32.9999 6C32.9999 3.05448 30.6121 0.666667 27.6665 0.666667C24.721 0.666667 22.3332 3.05448 22.3332 6ZM2.87402 180.427V134.525H0.874023V180.427H2.87402ZM2.58113 135.233L28.3737 109.44L26.9594 108.026L1.16692 133.818L2.58113 135.233ZM28.6665 108.733V6H26.6665V108.733H28.6665Z"
              fill="url(#paint6_linear_511_1059)"
            />
            <motion.path
              d="M53.8966 354.855L2.31152 306.767V240.318L20.2351 222.395V188.296L11.0548 179.116V135.4L53.8966 92.5579"
              stroke="url(#paint7_linear_511_1059)"
              strokeWidth="2"
              variants={draw}
              custom={3}
            />
            <defs>
              <linearGradient
                id="paint0_linear_511_1059"
                x1="39.0334"
                y1="222.395"
                x2="39.0334"
                y2="387.205"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="0.0001" stopColor="#0DF8CF" />
                <stop offset="1" stopColor="#05C2FC" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_511_1059"
                x1="-1.18581"
                y1="340.866"
                x2="18.9236"
                y2="329.062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0DF8CF" />
                <stop offset="1" stopColor="#05C2FC" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_511_1059"
                x1="31.3825"
                y1="105.236"
                x2="25.4808"
                y2="138.46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_511_1059"
                x1="31.3825"
                y1="127.531"
                x2="31.3825"
                y2="175.619"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_511_1059"
                x1="36.4727"
                y1="284.909"
                x2="36.4727"
                y2="409.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0DF8CF" />
                <stop offset="1" stopColor="#05C2FC" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_511_1059"
                x1="37.5029"
                y1="188.733"
                x2="37.5029"
                y2="222.395"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_511_1059"
                x1="15.5566"
                y1="6"
                x2="15.5566"
                y2="171.814"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_511_1059"
                x1="28.1041"
                y1="92.5579"
                x2="37.2844"
                y2="320.319"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#05C2FC" />
                <stop offset="1" stopColor="#0DF8CF" />
              </linearGradient>
            </defs>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}

export default Webinar
