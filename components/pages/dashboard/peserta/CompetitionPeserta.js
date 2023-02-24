/* eslint-disable no-underscore-dangle */
// import 'reoverlay/lib/ModalWrapper.css'

import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import FormData from 'form-data'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useState } from 'react'

import { Button } from '../../../element/button'
import { JumlahKarya } from './JumlahKarya'
import { Pembayaran } from './Pembayaran'
import { PengumpulanKarya } from './PengumpulanKarya'

export const firebaseConfig = {
  apiKey: 'AIzaSyAGyEzjL9GIh80vbjazecsROa94a1w9Lyk',
  authDomain: 'nesco-fb1d6.firebaseapp.com',
  projectId: 'nesco-fb1d6',
  storageBucket: 'nesco-fb1d6.appspot.com',
  messagingSenderId: '412903612',
  appId: '1:412903612:web:b4e65de54653a5b68508b9',
}

const app = initializeApp(firebaseConfig)

export function CompetitionPeserta({ data }) {
  const [warning, setWarning] = useState(false)
  const [url, setUrl] = useState('')
  const [modal, setModal] = useState(false)

  const handleSavePermamnent = () => {
    setWarning(!warning)
    const formData = new FormData()
    // eslint-disable-next-line no-undef
    const id = JSON.parse(localStorage?.getItem('user'))?._id
    formData.append('userId', id)
    formData.append('savePermanent', true)
    axios
      .post('https://be-nesco-2023-p2kk.vercel.app/api/createTeam', formData)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handelGambar = (value) => {
    setModal(true)
    getDownloadURL(ref(getStorage(app), value)).then((URL) => {
      setUrl(URL)
    })
  }
  const ButtonDashboard = useCallback(({ children, active, onClick }) => {
    if (active) {
      return (
        <button
          type="button"
          className={` rounded bg-gradient-to-t from-c-01 to-c-02 text-white text-[8px] sm:px-4 sm:py-2 px-1 py-1 transition-all font-semibold font-poppins`}
          onClick={onClick}
        >
          {children}
        </button>
      )
    }
    return (
      <button
        type="submit"
        disabled
        className={` rounded bg-gray-500 text-white text-[8px] sm:px-4 sm:py-2 px-1 py-1 transition-all font-semibold font-poppins`}
      >
        {children}
      </button>
    )
  }, [])

  const ChangeContent = useCallback(() => {
    return (
      <div className="bg-black fixed z-40 bg-opacity-[.7] h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[488px] flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
            <h1 className=" text-center text-[12px] md:text-[14px] leading-[30px] font-poppins font-medium">
              Pastikan Anda telah melakukan pengisian data dengan lengkap dan benar. Apabila sudah
              simpan permanen maka anda setuju bahwa data yang sudah diisi tidak dapat diubah
              kembali.
            </h1>
            <div className="flex justify-center gap-[40px]">
              <div>
                <Button onClick={() => setWarning(!warning)} size="sm" type="secondary">
                  Batalkan
                </Button>
              </div>
              <button type="submit" onClick={handleSavePermamnent}>
                <Button size="sm" type="primary">
                  Simpan
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }, [warning])

  return (
    <>
      <div
        className={`${
          modal ? 'block' : 'hidden'
        } bg-black fixed z-40 bg-opacity-[.7] h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex justify-center items-center`}
      >
        <div className="flex justify-start">
          <div className="flex justify-center items-center">
            <Image src={url} alt="Picture of the author" width={500} height={500} />
          </div>
          <button
            // className="flex w-screen h-full "
            className="flex justify-start items-start font-bold text-4xl text-white my-[-20px]"
            onClick={() => setModal(false)}
            type="button"
          >
            &times;
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="my-12 rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-3xl md:text-5xl px-4 py-2 transition-all font-semibold font-poppins">
          {data?.selectedCompetition === 'Lomba Video' ? 'Video Competition' : ''}
          {data?.selectedCompetition === 'Lomba Poster' ? 'Poster Competition' : ''}
          {data?.selectedCompetition === 'Lomba Paper' ? 'Paper Competition' : ''}
        </h1>
        <div className="bg-[#22292F] drop-shadow-[0_0_14px_rgba(0,0,0,0.25)] rounded-xl w-full items-center justify-center flex flex-col md:px-6 px-[16px] py-[25px] md:py-11 mb-[150px]">
          <div className="flex flex-col w-[98%] h-4/5 bg-[#252E37] drop-shadow-[0_0_14px_rgba(0,0,0,0.25)] rounded-xl">
            <div className="sm:p-16 py-10 pl-4">
              <div className="bg-c-00 rounded-3xl py-2 px-2 flex justify-center items-center  w-36">
                <div
                  className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg px-4 py-2 transition-all font-semibold font-poppins`}
                >
                  DATA TIM
                </div>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col mt-4 flex-wrap">
              <div className="sm:w-1/3 flex justify-center">
                <div className="flex flex-col mb-6">
                  <div className="text-white font-poppins sm:text-xs text-[8px]">Nama Tim</div>
                  <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                    {data?.namaTeam}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap flex-row sm:w-2/3 justify-around">
                <div className="flex flex-col">
                  <div className="text-white font-poppins sm:text-xs text-[8px]">Institusi</div>
                  <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                    {data?.institusi}
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="text-white font-poppins sm:text-xs text-[8px]">Nomor Kontak</div>
                  <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                    {data?.nomorKontak1}
                  </div>
                  <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                    {data?.nomorKontak2}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-36 relative flex">
              <Image src="/vector/dashboard/peserta/pembatas.svg" fill />
              <div className="absolute sm:top-1/2 top-3/4 sm:left-16 left-4">
                <div className="bg-c-00 rounded-3xl py-2 px-2">
                  <div
                    className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg px-4 py-2 transition-all font-semibold font-poppins`}
                  >
                    DATA PESERTA
                  </div>
                </div>
              </div>
            </div>
            <div id="deskripsi anggota" className="flex flex-col md:p-16 sm:p-8 p-4 mt-14 sm:mt-0">
              <div className="font-jost sm:text-base text-xs font-bold text-white mb-6">
                Anggota
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Nama Ketua
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.namaAnggota1}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Email Ketua
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.emailAnggota1}
                  </div>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Foto Ketua
                  </div>
                  <ButtonDashboard
                    active={data?.fotoAnggota1 !== '-'}
                    onClick={() => handelGambar(data?.fotoAnggota1)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    e-KTM Ketua
                  </div>
                  <ButtonDashboard
                    active={data?.eKtmAnggota1 !== '-'}
                    onClick={() => {
                      handelGambar(data?.eKtmAnggota1)
                    }}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Bukti Twibbon dan Follow Ketua
                  </div>
                  <ButtonDashboard
                    active={data?.buktiFollowAnggota1 !== '-'}
                    onClick={() => {
                      handelGambar(data?.buktiFollowAnggota1)
                    }}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
              </div>
              <div className="font-jost sm:text-base text-xs font-bold text-white mb-6 mt-9">
                Anggota 1
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Nama Anggota 1
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.namaAnggota2}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Email Anggota 1
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.emailAnggota2}
                  </div>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Foto Anggota 1
                  </div>
                  <ButtonDashboard
                    active={data?.fotoAnggota2 !== '-'}
                    onClick={() => handelGambar(data?.fotoAnggota2)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    e-KTM Anggota 1
                  </div>
                  <ButtonDashboard
                    active={data?.eKtmAnggota2 !== '-'}
                    onClick={() => handelGambar(data?.eKtmAnggota2)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Bukti Twibbon dan Follow Anggota 1
                  </div>
                  <ButtonDashboard
                    active={data?.buktiFollowAnggota2 !== '-'}
                    onClick={() => handelGambar(data?.buktiFollowAnggota2)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
              </div>
              <div className="font-jost sm:text-base text-xs font-bold text-white mb-6 mt-9">
                Anggota 2
              </div>
              <div className="grid grid-cols-3 gap-5">
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Nama Anggota 2
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.namaAnggota3}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Email Anggota 2
                  </div>
                  <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                    {data?.emailAnggota3}
                  </div>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Foto Anggota 2
                  </div>
                  <ButtonDashboard
                    active={data?.fotoAnggota3 !== '-'}
                    onClick={() => handelGambar(data?.fotoAnggota3)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    e-KTM Anggota 2
                  </div>
                  <ButtonDashboard
                    active={data?.eKtmAnggota3 !== '-'}
                    onClick={() => handelGambar(data?.eKtmAnggota3)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
                <div>
                  <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                    Bukti Twibbon dan Follow Anggota
                  </div>
                  <ButtonDashboard
                    active={data?.buktiFollowAnggota3 !== '-'}
                    onClick={() => handelGambar(data?.buktiFollowAnggota3)}
                  >
                    Lihat Detail
                  </ButtonDashboard>
                </div>
              </div>
            </div>
            <div className="flex-row justify-end p-16 md:flex hidden">
              <div className="md:mr-12 mr-6">
                {!data?.savePermanent ? (
                  <Link href="/dashboard/peserta/edit">
                    <Button type="secondary" size="sm">
                      Edit
                    </Button>
                  </Link>
                ) : (
                  <Button type="dead" animation="dead" size="sm">
                    Edit
                  </Button>
                )}
              </div>
              {data?.savePermanent ? (
                <Button type="dead" size="sm" animation="dead">
                  Simpan Permanent
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => {
                    setWarning(!warning)
                  }}
                >
                  Simpan
                </Button>
              )}
              {warning ? <ChangeContent /> : <div />}
            </div>
            <div className="flex-row justify-end p-16 md:hidden flex">
              <div className="md:mr-12 mr-6">
                {!data?.savePermanent ? (
                  <Link href="/dashboard/peserta/edit">
                    <Button type="secondary" size="sm">
                      Edit
                    </Button>
                  </Link>
                ) : (
                  <Button type="dead" animation="dead" size="sm">
                    Edit
                  </Button>
                )}
              </div>
              {data?.savePermanent ? (
                <Button type="dead" size="sm" animation="dead">
                  Simpan
                </Button>
              ) : (
                <Button
                  size="sm"
                  onClick={() => {
                    setWarning(!warning)
                  }}
                >
                  Simpan
                </Button>
              )}
              {warning ? <ChangeContent /> : <div />}
            </div>
          </div>
          {data?.selectedCompetition === 'Lomba Poster' ? <JumlahKarya /> : null}
          <Pembayaran
            teamId={data?._id}
            payment={data?.proofOfPayment}
            status={data?.statusTim}
            kompetisi={data?.selectedCompetition}
          />
          <PengumpulanKarya data={data} />
        </div>
      </div>
    </>
  )
}
