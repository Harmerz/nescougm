import Image from 'next/image'
import { RiLogoutBoxRLine } from 'react-icons/ri'

import vector1 from '../../../public/vector/dashboard/admin/Vector1Db.svg'

export default function Profile({ posisi = '', nama = '', email = '' }) {
  return (
    <div className="bg-c-00 min-h-[100vh] py-[150px] px-[100px] bg-cover overflow-hidden ">
      <div className=" ">
        <h1>Profile</h1>
        <div className="flex justify-between bg-[#22292F] rounded-[10px]">
          <div className="flex  mx-[100px] my-[50px]">
            <div />
            <div className="text-white text-[] font-poppins">
              <h2 className="font-jost text-16">{posisi}</h2>
              <h2 className="font-semibold">
                {nama} <span className="font-normal">{email}</span>
              </h2>

              <button type="submit" href="#?" className="underline flex items-center">
                <RiLogoutBoxRLine />
                <div className="">Sign Out</div>
              </button>
            </div>
          </div>
          <Image src={vector1} alt="vector" />
        </div>
      </div>
    </div>
  )
}
