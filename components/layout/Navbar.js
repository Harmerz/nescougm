/* eslint-disable no-undef */
import Image from 'next/image'
import Link from 'next/link'
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
      childern: [
        {
          name: 'Electricity',
          value: 'electricity',
          key: 'electricity',
        },
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
      ],
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
  const [dropDownCompetition, setDropDownCompetition] = useState(false)
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
                      className="flex items-center w-full md:p-4 py-2 justify-center font-poppins text-md font-semibold text-white rounded hover:text-c-01"
                      onClick={() => setDropDownCompetition(!dropDownCompetition)}
                    >
                      Competition{' '}
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
                      className={`z-10 fixed font-normal bg-c-00 divide-y divide-gray-100 rounded shadow w-44 ${
                        dropDownCompetition ? '' : 'hidden'
                      }`}
                    >
                      <ul className="py-1 text-sm text-white" aria-labelledby="dropdownLargeButton">
                        {route.childern.map((competition) => (
                          <li key={competition.value}>
                            <Link
                              href={`/competitions/${competition.value}`}
                              className="block px-4 py-2 hover:text-c-01"
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
                      <span className="self-center font-poppins whitespace-nowrap text-md text-white font-semibold">
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
          <Link href="/signin" className="md:p-4 py-2 flex justify-center">
            <Button color="primary">SignIn</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
