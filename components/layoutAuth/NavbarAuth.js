import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/Logo.svg'

export function NavbarAuth() {
  return (
    <div className="flex z-[999] cursor-pointer">
      <Link href="/">
        <Image
          src={logo}
          alt="logo"
          weight={77}
          height={77}
          className="absolute left-[70px] top-[33px]"
        />
      </Link>
    </div>
  )
}

export default NavbarAuth
