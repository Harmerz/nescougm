/* eslint-disable no-undef */
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../element/button'

export function Navbar() {
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window.pageYOffset : 0)
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
  const routes = [
    {
      path: '/competition',
      name: 'Competition',
      key: 'competition',
    },
    {
      path: '/webinar',
      name: 'Webinar',
      key: 'webinar',
    },
    {
      path: '/merch',
      name: 'Merch',
      key: 'merch',
    },
    {
      path: '/faq',
      name: 'FAQ',
      key: 'faq',
    },
  ]
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

  const [dropDown, setDropDown] = useState(false)
  return (
    <nav
      className={`bg-c-00 px-2 sm:px-4 border-b-[5px] py-2 border-c-01 border-t-4 md:rounded-none ${
        dropDown ? 'rounded-b-3xl' : ''
      } w-[100vw] z-[9999]`}
      style={visible ? styles.active : styles.hidden}
    >
      <div className="container flex flex-wrap justify-between lg:justify-around items-center mx-auto">
        <Link href="/" className="flex items-center">
          <div className="flex">
            <div className="flex justify-items-center place-items-center content-center mr-2 h-10 relative w-40">
              <Image src="/Nesco.png" alt="Tutur" fill />
            </div>
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setDropDown(!dropDown)}
        >
          <Image src="/icon/List.svg" width={20} height={20} alt="List" />
        </button>
        <div
          className={`w-full lg:flex items-center lg:w-auto lg:flex-row ${
            dropDown ? '' : 'hidden'
          }`}
          id="menu"
        >
          <ul
            className="
                    relative
                    pt-4
                    text-base text-gray-700
                    lg:flex
                    lg:justify-between 
                    lg:pt-0
                    item-center"
          >
            {routes.map((route) => {
              return (
                <Link href={route.path} className="md:p-4 py-2 flex justify-center" key={route.key}>
                  <div className="mx-5 flex">
                    <span className="self-center font-poppins whitespace-nowrap text-md text-white font-semibold">
                      {route.name}
                    </span>
                  </div>
                </Link>
              )
            })}
          </ul>
        </div>
        <div
          className={`w-full lg:flex items-center lg:w-auto lg:flex-row ${
            dropDown ? '' : 'hidden'
          }`}
        >
          <Link href="/signin" className="md:p-4 py-2 flex justify-center">
            <Button color="primary">SignIn</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
