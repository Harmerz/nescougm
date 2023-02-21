/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import FormData from 'form-data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '../../../element/button'

export function CompetitionList() {
  const router = useRouter()
  const [warning, setWarning] = useState(false)
  const [competition, setCompetition] = useState('')

  const profile = () => {
    const id = JSON.parse(localStorage.getItem('user'))?._id
    axios
      .get(`http://localhost:8000/api/${id}/profile`)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        router.push('/auth/signin')
      })
  }
  useEffect(() => {
    profile()
  }, [])

  const handleClick = () => {
    const id = JSON.parse(localStorage.getItem('user'))?._id
    const formData = new FormData()
    formData.append('selectedCompetition', competition)
    formData.append('userId', id)
    axios
      .post(`http://localhost:8000/api/createTeam`, formData)
      .then((res) => {
        console.log(res)
        router.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const ChangeContent = useCallback(() => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
          <h1 className=" text-center text-[14px] leading-[30px] font-poppins font-medium">
            Apakah Anda sudah yakin untuk mendaftar pada cabang lomba {competition} ini?
            <p className="text-[9px] font-poppins font-light">
              Peringatan: satu akun hanya dapat didaftarkan pada satu cabang lomba
            </p>
          </h1>
          <div className="flex justify-center gap-[40px]">
            <div>
              <Button onClick={() => setWarning(!warning)} size="sm" type="secondary">
                Batalkan
              </Button>
            </div>
            <button
              type="submit"
              onClick={() => {
                setWarning(!warning)
              }}
            >
              <Button size="sm" type="primary" onClick={handleClick}>
                Daftar
              </Button>
            </button>
          </div>
        </div>
      </div>
    )
  }, [competition, warning])
  return (
    <div className="flex md:flex-row mt-12 justify-around flex-col relative">
      <button
        type="button"
        onClick={() => {
          setWarning(!warning)
          setCompetition('Lomba Paper')
        }}
        className="svg-wrapper relative flex justify-center"
      >
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/paper.png" width={150} height={150} />
          <div className=" text-white mt-3 text-base font-poppins font-semibold flex justify-center text-center">
            Paper Competition
          </div>
        </div>
      </button>

      <button
        type="button"
        onClick={() => {
          setWarning(!warning)
          setCompetition('Lomba Video')
        }}
        className="svg-wrapper relative flex justify-center"
      >
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/video.png" width={150} height={150} />
          <div className=" text-white text-base font-poppins font-semibold flex justify-center text-center mt-3">
            Video Competition
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={() => {
          setWarning(!warning)
          setCompetition('Lomba Poster')
        }}
        className="svg-wrapper relative flex justify-center"
      >
        <svg height="224" width="200" strokeLinecap="round">
          <rect
            className="competition-shape fill-bg-04"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape2 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
          <rect
            className="competition-shape3 fill-transparent"
            height="200"
            width="176"
            rx="15"
            ry="15"
            x="12"
            y="12"
          />
        </svg>
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image src="/vector/dashboard/peserta/poster.png" width={150} height={150} />
          <div className=" text-white text-base font-poppins font-semibold flex justify-center text-center mt-3">
            Poster Competition
          </div>
        </div>
      </button>
      <div className="absolute z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {warning ? <ChangeContent /> : <div />}
      </div>
    </div>
  )
}

export default CompetitionList
