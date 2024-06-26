/* eslint-disable no-undef */
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Button } from '../element/button'

const Icon = ({ active = true }) => {
  return (
    <div className={`toggle__container ${active ? 'active' : ''}`}>
      <div className={`toggle ${active ? 'no-animation active' : ''} toggle__one`} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__two`} />
      <div className={`toggle ${active ? 'no-animation active' : 'active'} toggle__three`} />
    </div>
  )
}
export function Navbar() {
  const [yOffset, setYOffset] = useState(typeof window !== 'undefined' ? window?.pageYOffset : 0)
  const [visible, setVisible] = useState(true)
  const [dropDown, setDropDown] = useState(false)
  const [dropDownCompetition, setDropDownCompetition] = useState(false)

  function handleScroll() {
    const currentYOffset = window.pageYOffset
    const naik = yOffset >= currentYOffset

    setYOffset(currentYOffset)
    setVisible(naik)
    setDropDown(dropDown && visible)
    setDropDownCompetition(dropDownCompetition && visible)
  }

  const router = useRouter()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })
  const routes = [
    {
      path: '/competition',
      name: 'Competition',
      key: 'competition',
      children: [
        {
          name: 'Paper',
          value: 'paper',
          key: 'paper',
        },
        {
          name: 'Poster',
          value: 'poster',
          key: 'poster',
        },
        {
          name: 'Video',
          value: 'video',
          key: 'video',
        },
      ],
    },
    {
      path: '/seminar',
      name: 'Seminar',
      key: 'seminar',
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

  return (
    <nav
      className={`bg-c-00 px-2 sm:px-4 border-b-[2px] border-t-[2px] md:border-b-[3px] md:border-t-[3px] py-2 lg:py-0 border-c-01  md:rounded-none ${
        dropDown ? 'rounded-b-3xl' : ''
      } w-[100vw] z-[9999]`}
      style={visible ? styles.active : styles.hidden}
    >
      <div className="container flex flex-wrap justify-between lg:justify-around items-center mx-auto">
        <Link href="/" className="">
          <div className="w-2/3 md:w-full md:h-full flex  ">
            <Image src="/Nesco.png" alt="Nesco" width={146.33} height={43} />
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none "
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setDropDown(!dropDown)}
        >
          <Icon active={dropDown} />
        </button>
        <div
          className={`w-full lg:flex items-center lg:w-auto lg:flex-row ${
            dropDown ? '' : 'hidden'
          }`}
          id="menu_mobile"
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
              if (route.key === 'competition') {
                return (
                  <li key="competition">
                    <button
                      type="submit"
                      id="dropdownNavbarLink"
                      data-dropdown-toggle="dropdownNavbar"
                      className="flex items-center w-full md:p-4 py-2 justify-center font-poppins text-md font-semibold rounded hover:text-c-01 text-white"
                      onClick={() => setDropDownCompetition(!dropDownCompetition)}
                    >
                      <p
                        className={`hover:text-c-01 ${
                          router.pathname.includes(route.path)
                            ? 'text-c-01 border-b-4 border-c-01'
                            : 'text-white'
                        }`}
                      >
                        Competition
                      </p>
                      <svg
                        className="w-5 h-5 ml-1"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    <div
                      id="dropdownNavbar"
                      className={`z-10 lg:fixed justify-center  font-normal mx-auto bg-c-00 divide-y divide-gray-100 w-44 items-center  ${
                        dropDownCompetition ? 'lg:flex flex' : 'lg:hidden hidden'
                      }`}
                    >
                      <ul className="py-1 text-sm text-white" aria-labelledby="dropdownLargeButton">
                        {route.children.map((competition) => (
                          <li key={competition.value}>
                            <Link
                              href={`/competition/${competition.value}`}
                              className="block px-4 py-2 hover:text-c-01 text-md font-semibold font-poppins"
                              onClick={() => setDropDownCompetition(false)}
                            >
                              {competition.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                )
              }

              return (
                <li key={route.key}>
                  <Link href={route.path} className="md:p-4 py-2 flex justify-center">
                    <div className="mx-5 flex">
                      <span
                        className={`self-center font-poppins whitespace-nowrap text-md font-semibold hover:text-c-01  ${
                          router.pathname.includes(route.path)
                            ? 'text-c-01 border-b-4 border-c-01'
                            : 'text-white'
                        }`}
                      >
                        {route.name}
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div
          className={`w-full lg:flex items-center lg:w-auto lg:flex-row ${
            dropDown ? '' : 'hidden'
          }`}
        >
          <Link href="/auth/signin" className="md:p-4 py-2 flex justify-center">
            <Button color="primary">Sign In</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
