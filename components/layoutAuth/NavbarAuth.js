import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/Logo.svg'

export function NavbarAuth() {
  return (
    <div className="fixed flex z-[999] cursor-pointer px-[22px] sm:px-[70px] pt-[22px] sm:pt-[33px]">
      <Link href="/">
        <Image src={logo} alt="logo" className="w-[50px] sm:w-[77px]" />
      </Link>
    </div>
  )
}

export default NavbarAuth
