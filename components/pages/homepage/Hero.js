/* eslint-disable @next/next/no-img-element */
import 'aos/dist/aos.css'

import AOS from 'aos'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

import styles from '../../../styles/Home.module.css'

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

export function Hero() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="bg-c-00 min-h-fit">
      <div className="w-full min-h-screen grid items-center">
        <div className="grid h-[20vh] lg:h-[25vh] w-full lg:w-1/2 self-start justify-self-start">
          <div className="w-2/5 h-full sm:w-1/3 lg:w-2/5 pt-[45px] md:pt-[65px]">
            <motion.svg
              data-aos="fade-right"
              data-aos-duration="500"
              data-aos-delay="500"
              className="w-full h-full "
              viewBox="0 0 190 351"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial="hidden"
              animate="visible"
            >
              <motion.path
                d="M189 47L189.768 47.6402L190 47.362V47H189ZM174 65V66H174.468L174.768 65.6402L174 65ZM107 65V64H106.582L106.289 64.297L107 65ZM64.5 108L63.7888 107.297L63.5 107.589V108H64.5ZM64.5 167.5L65.2071 168.207L65.5 167.914V167.5H64.5ZM51.5 180.5L50.7929 179.793L50.5 180.086V180.5H51.5ZM51.5 200.5L52.2288 201.185L52.5 200.896V200.5H51.5ZM36 217V218H36.4326L36.7288 217.685L36 217ZM-1.83333 217C-1.83333 219.946 0.554481 222.333 3.5 222.333C6.44552 222.333 8.83333 219.946 8.83333 217C8.83333 214.054 6.44552 211.667 3.5 211.667C0.554481 211.667 -1.83333 214.054 -1.83333 217ZM188 6V47H190V6H188ZM188.232 46.3598L173.232 64.3598L174.768 65.6402L189.768 47.6402L188.232 46.3598ZM174 64H107V66H174V64ZM106.289 64.297L63.7888 107.297L65.2112 108.703L107.711 65.703L106.289 64.297ZM63.5 108V167.5H65.5V108H63.5ZM63.7929 166.793L50.7929 179.793L52.2071 181.207L65.2071 168.207L63.7929 166.793ZM50.5 180.5V200.5H52.5V180.5H50.5ZM50.7712 199.815L35.2712 216.315L36.7288 217.685L52.2288 201.185L50.7712 199.815ZM36 216H3.5V218H36V216Z"
                fill="url(#paint0_linear_511_1043)"
              />
              <motion.path
                d="M27 17H26V17.4233L26.3039 17.7179L27 17ZM43.5 33H44.5V32.5767L44.1961 32.2821L43.5 33ZM42.5 75C42.5 75.5523 42.9477 76 43.5 76C44.0523 76 44.5 75.5523 44.5 75H42.5ZM26 6.5V17H28V6.5H26ZM26.3039 17.7179L42.8039 33.7179L44.1961 32.2821L27.6961 16.2821L26.3039 17.7179ZM42.5 33V75H44.5V33H42.5Z"
                fill="url(#paint1_linear_511_1043)"
              />
              <motion.path
                d="M29 23L20 32V64L12 74H1.5"
                stroke="url(#paint2_linear_511_1043)"
                strokeWidth="2"
                variants={draw}
                custom={1}
              />
              <motion.path
                d="M48.5 17.5V16.5H48.0721L47.7766 16.8095L48.5 17.5ZM103 17.5V18.5H103.402L103.692 18.222L103 17.5ZM109.667 6C109.667 8.94552 112.054 11.3333 115 11.3333C117.946 11.3333 120.333 8.94552 120.333 6C120.333 3.05448 117.946 0.666667 115 0.666667C112.054 0.666667 109.667 3.05448 109.667 6ZM38.7234 29.1905L49.2234 18.1905L47.7766 16.8095L37.2766 27.8095L38.7234 29.1905ZM48.5 18.5H103V16.5H48.5V18.5ZM103.692 18.222L115.692 6.72199L114.308 5.27801L102.308 16.778L103.692 18.222Z"
                fill="url(#paint3_linear_511_1043)"
              />
              <motion.path
                d="M44 42H145.5L160.5 27.5H189"
                stroke="url(#paint4_linear_511_1043)"
                strokeWidth="2"
                variants={draw}
                custom={2}
              />
              <motion.path
                d="M43.5 76L26.5 92.5V164.5L14.5 177M14.5 177V157L-1 141.5M14.5 177V247.5L26.5 262V350.5"
                stroke="url(#paint5_linear_511_1043)"
                strokeWidth="2"
                variants={draw}
                custom={3}
              />
              <motion.path
                d="M65.0391 67.2787C65.031 67.1053 65.1713 66.9612 65.3448 66.9647L93.4527 67.5315C93.7151 67.5367 93.8447 67.8526 93.6616 68.0407L66.8716 95.5566C66.6885 95.7447 66.3692 95.6236 66.3569 95.3614L65.0391 67.2787Z"
                fill="url(#paint6_linear_511_1043)"
              />
              <motion.circle cx="43" cy="76" r="4" fill="url(#paint7_linear_511_1043)" />
              <motion.path
                d="M57.1172 181.883L66.3172 172.683C66.5691 172.431 67 172.609 67 172.966V188.334C67 188.44 66.9579 188.542 66.8828 188.617L57.6828 197.817C57.4309 198.069 57 197.891 57 197.534V182.166C57 182.06 57.0421 181.958 57.1172 181.883Z"
                fill="url(#paint8_linear_511_1043)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_511_1043"
                  x1="96.25"
                  y1="6"
                  x2="96.9405"
                  y2="160.015"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_511_1043"
                  x1="35.25"
                  y1="6.5"
                  x2="36.068"
                  y2="56.4879"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_511_1043"
                  x1="15.25"
                  y1="23"
                  x2="15.5221"
                  y2="60.2252"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_511_1043"
                  x1="76.5"
                  y1="6"
                  x2="76.5189"
                  y2="22.4237"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_511_1043"
                  x1="116.5"
                  y1="27.5"
                  x2="116.504"
                  y2="38.0842"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_511_1043"
                  x1="22.75"
                  y1="76"
                  x2="23.4572"
                  y2="149.718"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint6_linear_511_1043"
                  x1="65.0241"
                  y1="66.9582"
                  x2="85.3474"
                  y2="86.7455"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C2FC" />
                  <stop offset="0.927083" stopColor="#0DF8CF" />
                  <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint7_linear_511_1043"
                  x1="43"
                  y1="72"
                  x2="43"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#05C5F9" />
                  <stop offset="1" stopColor="#0DF8CF" />
                </linearGradient>
                <linearGradient
                  id="paint8_linear_511_1043"
                  x1="62"
                  y1="172"
                  x2="62"
                  y2="198.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0DF8CF" />
                  <stop offset="1" stopColor="#05C2FC" />
                </linearGradient>
              </defs>
            </motion.svg>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duration="500"
          data-aos-delay="500"
          className="flex flex-col-reverse lg:grid lg:grid-cols-2 max-w-[186px] justify-center md:max-w-[1560px] mx-auto w-full lg:py-10 lg:px-16 xl:py-10 xl:px-[162px]  aos-init lg:mt-[-100px] 2xl:mt-[-155px]"
        >
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="flex flex-col w-full gap-[6px] lg:gap-5 xl:gap-[37px] justify-center"
          >
            <div>
              <div className="w-full  text-center lg:text-left mx-auto lg:mx-0 font-jost font-extrabold text-[42.89px] leading-[47.73px] md:text-[70px] md:leading-[75px] lg:text-[120px] 2xl:text-[139px] lg:leading-[111px] overflow-visible">
                <h1 className={styles.h1}>NESCO</h1>
              </div>
              <div className="lg:pl-[10px] w-full text-center lg:text-left mx-auto lg:mx-0 font-jost font-extrabold text-[14.19px] leading-[19.6px] md:text-[25px] md:leading-[30px] lg:text-[46px] lg:leading-[70px]">
                <h1 className={styles.h1}>2023</h1>
              </div>
            </div>
            <div className="lg:pl-[10px] w-full md:w-3/4  text-center lg:text-left mx-auto lg:mx-0">
              <p className="text-[6px] md:text-[16px] font-medium font-poppins text-white text-center lg:text-justify self-start lg:justify-self-start ">
                Indonesia’s adaptive electrical ecosystem by Integrating Clean Energy Resilience
                through e-mobility
              </p>
            </div>
          </div>

          <div className="xl:mr-[-100px]">
            <img src="/homepageassets/gif2.gif" alt="/" />
          </div>
        </div>

        <div className="grid h-[20vh] lg:h-[25vh] w-2/5 sm:w-1/3 lg:w-1/4  relative justify-self-end self-end ">
          <div className="relative pb-20 bottom-1/3 sm:bottom-2/3 h-4/5 w-1/4 sm:h-full sm:w-1/4 lg:w-1/6 justify-self-end ">
            <motion.svg
              data-aos="fade-left"
              data-aos-duration="500"
              data-aos-delay="500"
              className="w-full h-full "
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
    </div>
  )
}
