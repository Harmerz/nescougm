import Image from 'next/image'

export default function OverviewList({ children, icon, title }) {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center mt-[20px] lg:mt-0">
      <div className="flex items-center justify-center w-[8%] lg:w-[10%]">
        <Image src={icon} />
      </div>
      <div className="flex flex-col w-[70%] lg:ml-[10%]">
        <div className="text-xl md:text-2xl lg:text-3xl font-jost text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 text-center lg:text-left">
          {title}
        </div>
        <div className="text-base md:text-lg lg:text-xl font-poppins text-white text-center lg:text-left">
          {children}
        </div>
      </div>
    </div>
  )
}
