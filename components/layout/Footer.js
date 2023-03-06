import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook, BsLine } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

import { Button } from '../element/button'

export function Footer() {
  const competition = [
    { kompetisi: 'Paper Competition', link: '/competition/paper' },
    { kompetisi: 'Poster Competition', link: '/competition/poster' },
    { kompetisi: 'Video Competition', link: '/competition/video' },
    { kompetisi: 'Seminar Nasional', link: '/seminar' },
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
      <div className="flex lg:flex-row flex-col lg:justify-between gap-[50px] lg:gap-0 lg:px-[100px] py-[81px] items-center">
        <div className="lg:flex-row flex-col items-center flex gap-[20px]">
          {/* <div className="w-24 h-24 bg-slate-400 " /> */}
          <div className="w-1/2 flex justify-center ">
            <Image src="/Logo.svg" width={95} height={83} />
          </div>
          <div className="h-full w-full flex flex-col gap-[10px] items-center lg:items-start justify-center">
            <div className="flex justify-center ">
              <Image src="/Nesco-Footer.svg" alt="Footer" width={210} height={60} />
            </div>
            <div className="flex flex-row gap-x-[10px] lg:justify-start justify-center items-center">
              {LinkSocialMedia.map((item, idx) => {
                const Icon = icons[idx]
                return (
                  <div key={item.link}>
                    <Link href={item.link} target="_blank" className="cursor-pointer ">
                      <Icon
                        icon={icons[idx]}
                        className="fill-[#D8DDDF] hover:fill-c-02"
                        size={17}
                      />
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex-col flex gap-[14px] lg:gap-[18px] ">
          <div className="text-[24px] text-c-01 font-jost font-bold justify-center items-center lg:justify-start lg:items-start ">
            QUICK LINKS
          </div>
          <div className="flex flex-col gap-[7px] text-[14px] justify-center items-center lg:justify-start lg:items-start">
            {competition.map((text) => (
              <Link
                href={text.link}
                className=" text-white font-poppins font-medium justify-center flex hover:opacity-50"
                key={text.kompetisi}
              >
                {text.kompetisi}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex-col flex gap-[14px] lg:gap-[18px] justify-start items-center lg:justify-center">
          <div className="text-[24px] text-c-01 font-jost font-bold flex justify-center">
            PRESENTED BY
          </div>
          <Image src="/magatrika.svg" width={125} height={100} alt="magatrika" />
        </div>
        <div className="flex justify-center">
          <a href="https://api.whatsapp.com/send/?phone=6282158450268">
            <Button type="secondary">Whatsapp</Button>
          </a>
        </div>
      </div>
    </div>
  )
}
