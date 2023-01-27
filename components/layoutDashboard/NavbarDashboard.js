import { useState, useEffect } from 'react'
import { Button } from '../element/button'
import Image from 'next/image'
import logo from '../../public/NescoDashboard.svg'

export default function NavbarDashboard() {
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
