export default function TimelineList({ children, index, timeline }) {
  return (
    <div
      className={`h-full w-full flex ${
        index % 2 === 1 ? 'flex-row lg:flex-col' : 'flex-row-reverse lg:flex-col-reverse'
      }  justify-center items-center ${index === '01' ? '' : 'lg:-ml-[5vh]'} my-[1.5vh] lg:my-0`}
    >
      <div
        className={`h-full w-full relative flex ${
          index % 2 === 1 ? 'lg:flex-col-reverse' : 'lg:flex-col'
        }`}
      >
        <div
          className={`absolute lg:static text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold text-center h-full lg:h-[22%] flex items-center pb-[3%] lg:justify-start ${
            index % 2 === 1
              ? 'left-[44%] lg:items-start lg:pb-0'
              : 'right-[44%] lg:items-end lg:pb-[1%]'
          } lg:ml-[5%] font-jost font-extrabold`}
        >
          {index}
        </div>
        <div
          className={`${
            index % 2 === 1
              ? 'ml-[11%] mr-[59%] lg:mr-0 lg:ml-0 lg:mb-[5%]'
              : 'mr-[11%] ml-[59%] lg:ml-0 lg:mr-0 lg:mt-[5%]'
          }`}
        >
          <div
            className={`text-lg sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-3xl font-jost text-transparent bg-clip-text bg-gradient-to-b from-c-01 to-c-02 flex items-center mb-[2%] ${
              index % 2 === 1 ? 'text-right' : 'text-left'
            } lg:text-left`}
          >
            {timeline}
          </div>
          <div
            className={`text-sm sm:text-xl md:text-2xl lg:text-sm 2xl:text-lg font-poppins text-white ${
              index % 2 === 1 ? 'text-right' : 'text-left'
            } lg:text-left`}
          >
            {children}
          </div>
        </div>
      </div>
      <div className="h-full w-0 lg:w-full" />
    </div>
  )
}
