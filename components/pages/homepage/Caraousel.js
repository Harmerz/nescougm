import Image from 'next/image'
import { useEffect, useState } from 'react'

function Caraousel({ images }) {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  let timeOut = null
  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1)
  }

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1)
  }
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight()
      }, 2500)
  })

  console.log(current)
  return (
    <div
      onMouseEnter={() => {
        setAutoPlay(false)
        clearTimeout(timeOut)
      }}
      onMouseLeave={() => {
        setAutoPlay(true)
      }}
      className=" hidden sm:block rounded-xl shadow-lg h-full bg-gradient-to-r p-[4px] from-[#0DF8CF] to-[#05C2FC]"
    >
      <div className="flex flex-col justify-between h-full bg-[#D9D9D9] text-black rounded-lg">
        <div className="relative h-full w-full">
          {images.map((image, index) => {
            return (
              <div
                key={index.id}
                className={
                  index === current
                    ? 'duration-500 ease-in-out flex flex-1 absolute w-full h-full overflow-hidden rounded-md shadow-[0_0_11px_3px_ rgba(0,0,0,0.66)] opacity-800 pointer-events-visible'
                    : 'opacity-0 pointer-events-none duration-500 ease-in-out flex flex-1 absolute w-full h-full overflow-hidden rounded-md shadow-[0_0_11px_3px_ rgba(0,0,0,0.66)]'
                }
              >
                <Image
                  width={0}
                  height={0}
                  className="w-full object-cover"
                  src={image.image}
                  alt="/"
                />
              </div>
            )
          })}
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="hidden absolute text-[40px] bottom-1/2 bg-[white] flex justify-center items-center w-[30px] h-[30px] rounded-lg  cursor-pointer translate-y-2/4 left-4 left-4"
            onClick={() => slideLeft(!current)}
          >
            <Image src="/icon/left.png" width={30} height={20} alt="List" />
          </button>
          <button
            type="button"
            className="hidden absolute text-[40px] bottom-1/2 bg-[white] flex justify-center items-end w-[30px] h-[30px] rounded-lg cursor-pointer translate-y-2/4 right-4"
            onClick={() => slideRight(!current)}
          >
            <Image src="/icon/right.png" width={30} height={20} alt="List" />
          </button>
          <div className="absolute bottom-2 right-1/2 translate-x-2/4">
            {images.map((_, index) => {
              return (
                <button
                  type="button"
                  key={index.id}
                  className={
                    index === current
                      ? 'h-[8px] w-[10px] bg-gradient-to-r from-[#0DF8CF] to-[#05C2FC] rounded-2xl inline-block ml-[8px] cursor-pointer scale-100 bg-[white]'
                      : 'h-[8px] w-[10px] bg-white rounded-2xl inline-block ml-[8px] scale-75 cursor-pointer '
                  }
                  onClick={() => setCurrent(index)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Caraousel
