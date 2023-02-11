import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Gif() {
  const [gif1, setGif1] = useState(true)
  const [gif2, setGif2] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setGif1(false)
    }, 9000)
  })
  useEffect(() => {
    setInterval(() => {
      setGif2(true)
    }, 8600)
  })
  return (
    <div className="container after:pb-[100%] xl:mr-[-100px] w-full relative after:block">
      {gif2 ? (
        <Image
          className=" object-cover object-center h-auto"
          src="/homepageassets/gif2.webp"
          alt="maskot nesco"
          fill
          priority
        />
      ) : (
        <div />
      )}
      {gif1 ? (
        <Image
          className=" object-cover object-center h-auto"
          src="/homepageassets/gif1.webp"
          alt="maskot nesco"
          fill
        />
      ) : (
        <div />
      )}
    </div>
  )
}

export default Gif
