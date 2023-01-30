/* eslint-disable no-undef */
import Image from 'next/image'

import logo from '../../public/NescoDashboard.svg'
import { Button } from '../element/button'

export function NavbarDashboard() {
  return (
    <div className="w-[100vw] z-[9999] bg-c-00">
      <div className="flex justify-between items-center px-[20px] md:px-[100px] py-[48px]">
        <a href="./">
          <Button type="secondary" size="md" className="">
            Return to Homepage
          </Button>
        </a>
        <a
          href="./"
          className="hidden md:flex transition duration-300 ease-in-out hover:scale-125 transform active:scale-105 active:opacity-50 "
        >
          <Image src={logo} alt="logo" />
        </a>
      </div>
    </div>
  )
}
