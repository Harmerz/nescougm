/* eslint-disable no-undef */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import logo from '../../public/NescoDashboard.svg'
import { Button } from '../element/button'

export function NavbarDashboard() {
  const styles = {
    active: {
      visibility: 'visible',
      transition: 'all 0.5s',
      position: 'fixed',
    },
    hidden: {
      visibility: 'hidden',
      transition: 'all 0.5s',
      transform: 'translateY(-100%)',
      position: 'fixed',
    },
  }

  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.pageYOffset : 0)
  const [visible, setVisible] = useState(true)
  function handleScroll() {
    const currentYOffset = window.pageYOffset
    const temp = yOffset >= currentYOffset

    setYOffset(currentYOffset)
    setVisible(temp)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <div
      className="sticky top-0 w-[100vw] z-[9999]"
      style={visible ? styles.active : styles.hidden}
    >
      <div className="flex justify-between items-center px-5 md:px-[100px] py-6 bg-c-00">
        <Link href="/">
          <Button type="secondary" size="md" className="">
            Return to Homepage
          </Button>
        </Link>
        <Link
          href="/"
          className="hidden md:flex transition duration-300 ease-in-out hover:scale-125 transform active:scale-105 active:opacity-50 "
        >
          <Image src={logo} alt="logo" />
        </Link>
      </div>
    </div>
  )
}
