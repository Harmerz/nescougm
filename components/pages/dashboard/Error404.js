import Link from 'next/link'

export function Page404() {
  return (
    <div className=" justify-center  flex items-center flex-col bg-gradient-to-br from-c-00 to-bg-01 min-h-screen">
      <div
        className=" flex items-center justify-center bg-clip-text text-transparent bg-gradient-to-t from-c-02
         to-c-01 text-7xl font-bold text-[96px] leading-[144px] uppercase text-white font-poppins mt-[177px] lg:mt-[203px] lg:text-[120px] lg:leading-[180px] 
"
      >
        404
      </div>
      <div className="uppercase text-white text-lg font-bold font-poppins mt-[42px] md:mt-[16px] text[20px] leading-[30px] llg:text-[28px] ">
        oops, page not found
      </div>
      <div
        className="text-white mt-[13px] w-[200px] h-[81px]  text-center font-normal 
      md:w-[532px] md:h-[27px] md:mt[5px] place-content-center"
      >
        <p className="text-[18px] leading-[27px] font-normal">
          The page you are looking for does not exist or error occured
        </p>
      </div>
      <Link href="/">
        <div className="flex flex-row justify-center mt-[56px] mb-[266px] lg:mb-[205px]">
          <div className=" text-white font-poppins  flex flex-row justify-center font-light text-[16px] leading-[28.9px] ">
            <p>
              <u>Return to Hompage</u>
            </p>
          </div>
          <div className=" mt-[8.5px] pl-[10px] scale-[100%]">
            <svg
              width="13"
              height="15"
              viewBox="0 0 13 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13 7.5L0.25 14.8612V0.138784L13 7.5Z" fill="white" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}
