import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsLine } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

import { Button } from '../element/button'

export function Footer() {
  const competition = [
    'Paper Competition',
    'Electricity Innovation Competition',
    'Poster Competition',
    'Webinar Nasional',
  ]

  const LinkSocialMedia = [
    { link: 'https://twitter.com/nescougm?t=aApXITaUPmMjM0viNp7inw&s=09', size: 15.5 },
    { link: 'https://instagram.com/nescougm?igshid=YmMyMTA2M2Y=', size: 13.3 },
    { link: 'https://www.facebook.com/nescougm', size: 14.9 },
    { link: 'https://www.tiktok.com/@nescougm?_t=8Z6RtFgZkYb&_r=1', size: 12 },
    { link: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=rcz3985n', size: 14.9 },
    { link: 'https://youtube.com/@user-lu7hz2zj9w', size: 17.3 },
  ]

  const icons = [AiOutlineTwitter, AiFillInstagram, BsFacebook, FaTiktok, BsLine, AiFillYoutube]

  return (
    <div className="h-fit min-h-[550px] lg:min-h-0  bg-c-00 ">
      <div className="flex lg:flex-row flex-col lg:justify-around gap-y-[49px] py-[81px] items-center">
        <div className="lg:flex-row flex-col items-center flex gap-[20px]">
          {/* <div className="w-24 h-24 bg-slate-400 " /> */}
          <div className="w-full h-full flex justify-center lg:justify-end">
            <Image src="/Logo.svg" width={95} height={83} />
          </div>
          <div className="h-full w-full flex flex-col gap-[10px] items-center lg:items-start justify-center">
            <div className="flex justify-center ">
              <Image src="/Nesco-Footer.png" alt="Footer" width={210} height={60} />
            </div>
            <div className="flex flex-row gap-x-[10px] lg:justify-start justify-center items-center">
              {LinkSocialMedia.map((item, idx) => {
                const Icon = icons[idx]
                return (
                  <div key={item.link}>
                    <Link href={item.link} target="_blank" className="cursor-pointer">
                      <Icon icon={icons[idx]} className="fill-[#D8DDDF] " size={item.size} />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex-col flex">
          <div className="text-lg text-c-01 font-jost font-bold flex justify-center">
            QUICK LINKS
          </div>
          {competition.map((text) => (
            <div
              className="text-md text-white font-poppins font-medium justify-center flex"
              key={text}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button type="secondary">Get In Touch</Button>
        </div>
      </div>
    </div>
  )
}
