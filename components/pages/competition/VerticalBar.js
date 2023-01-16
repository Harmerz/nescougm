export default function VerticalBar({ title = '', color = 'white', hide = true }) {
  return (
    <div
      className={`${
        hide ? 'hidden' : 'flex'
      } lg:flex flex-col w-[20px] items-center h-full justify-center`}
    >
      <div
        className={`text-base sm:text-lg lg:text-xl text-${color} mb-[28px] font-jost font-bold`}
      >
        Nes
        <br />
        co
      </div>
      <div className={`h-[1px] w-[9px] bg-${color}`} />
      <div className={`h-3/5 w-[1px] bg-${color}`} />
      <div className={`h-[1px] w-[9px] bg-${color}`} />
      <div
        className={`text-base sm:text-lg lg:text-xl text-${color} mt-[16px] -rotate-90 w-[150px] mb-[80px] font-jost font-bold`}
      >
        {title}
      </div>
    </div>
  )
}
