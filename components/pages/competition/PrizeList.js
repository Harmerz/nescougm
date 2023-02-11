import Image from 'next/image'

export default function PrizeList({ children, icon, title }) {
  return (
    <div className="my-[1vw] lg:my-0 lg:h-[73%] w-full flex flex-col justify-center items-center">
      <div className="font-jost font-bold text-xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 text-center h-[23%] mb-[5%] flex items-center">
        {title}
      </div>
      <div className="flex items-center justify-center w-[10vw]">
        <Image src={icon} />
      </div>
      <div className="text-[12px] md:text-[16px] font-poppins mx-[2px] text-white text-center lg:text-left mt-[5%] lg:mt-[3vh]">
        {children}
      </div>
    </div>
  )
}
