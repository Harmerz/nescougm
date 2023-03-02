import styles from '../../../styles/Home.module.css'

export function Judul() {
  return (
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
          Indonesia’s adaptive electrical ecosystem by Integrating Clean Energy Resilience through
          e-mobility
        </p>
      </div>
    </div>
  )
}
export default Judul
