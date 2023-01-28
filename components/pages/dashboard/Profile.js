import Image from 'next/image'
import { RiLogoutBoxRLine } from 'react-icons/ri'

import vector1 from '../../../public/vector/dashboard/admin/Vector1Db.svg'
import profilePicture from '../../../public/vector/dashboard/dashboard-profile.svg'

export default function Profile({ icon = profilePicture, posisi = '', nama = '', email = '' }) {
  return (
    <div className="bg-c-00 ">
      <div className="font-jost text-2xl xl:text-3xl text-transparent bg-clip-text bg-gradient-to-l from-c-01 to-c-02 w-fit">
        Profile
      </div>
      <div className="bg-[#22292F] min-h-[180px] h-fit lg:h-[28vh] rounded-[10px] flex items-center flex-col lg:flex-row relative">
        <div className="mt-[40px] lg:mt-0 lg:ml-[7%] h-full w-[23%] sm:w-[17%] xl:w-[15%]">
          <Image src={icon} alt="icon" className="w-full h-full" />
        </div>
        <div className="mt-[20px] lg:mt-0 lg:ml-[4%] flex flex-col items-center lg:items-start text-white font-poppins w-[50%]">
          <h2 className="font-jost text-lg sm:text-xl xl:text-2xl text-transparent bg-clip-text bg-gradient-to-l from-c-01 to-c-02 w-fit">
            {posisi}
          </h2>
          <div className="mt-[3px] mb-[40px] lg:my-[10px]">
            <h2 className="text-sm sm:text-base xl:text-xl font-semibold text-center lg:text-left">
              {nama}
            </h2>
            <h2 className="text-xs sm:text-sm xl:text-lg font-normal text-center lg:text-left">
              {email}
            </h2>
          </div>

          <button
            type="submit"
            href="#?"
            className="text-[0.7rem] sm:text-xs lg:text-lg xl:text-xl flex items-center absolute top-[4%] right-[3%] lg:static"
          >
            <RiLogoutBoxRLine />
            &nbsp;
            <div className="underline">Sign Out</div>
          </button>
        </div>
        <div className="w-full h-full justify-end hidden lg:flex">
          <Image src={vector1} alt="vector" className="h-full w-fit" />
        </div>
      </div>
    </div>
  )
}
