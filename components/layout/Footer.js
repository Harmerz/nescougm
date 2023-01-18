import Image from 'next/image'

import { Button } from '../element/button'

export function Footer() {
  const competition = [
    'Paper Competition',
    'Electricity Innovation Competition',
    'Poster Competition',
    'Webinar Nasional',
  ]
  return (
    <div className="min-h-[550px] lg:min-h-0 h-[50vh] bg-c-00 flex items-center justify-center lg:justify-around lg:flex-row flex-col gap-y-6">
      <div className="lg:flex-row flex-col items-center flex">
        <div className="w-24 h-24 bg-slate-400 mb-3 lg:m-0" />
        <div className="w-[210px] h-[60px] lg:ml-4">
          <Image src="/Nesco-Footer.png" alt="Footer" width={210} height={60} />
        </div>
      </div>
      <div className="flex-col flex">
        <div className="text-lg text-c-01 font-jost font-bold flex justify-center">QUICK LINKS</div>
        {competition.map((text) => (
          <div
            className="text-md text-white font-poppins font-medium justify-center flex"
            key={text}
          >
            {text}
          </div>
        ))}
      </div>
      <div>
        <Button type="secondary">Get In Touch</Button>
      </div>
    </div>
  )
}
