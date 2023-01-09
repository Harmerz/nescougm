/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { BsFillArrowUpSquareFill } from 'react-icons/bs'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  return (
    <div className="fixed bottom-10 right-10">
      <button
        type="button"
        onClick={backToTop}
        className={`${
          isVisible ? 'opacity-100' : 'opacity-0'
        } text-[#05C2FC] hover:text-[#00769a] hover:shadow-xl text-[42px] transition-all`}
      >
        <BsFillArrowUpSquareFill />
      </button>
    </div>
  )
}
