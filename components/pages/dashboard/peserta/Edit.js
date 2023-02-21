/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import FormData from 'form-data'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AiOutlineRollback } from 'react-icons/ai'

import { Button } from '../../../element/button'

export function EditComponent() {
  const [jumlah, setJumlah] = useState('1')
  const router = useRouter()
  const [data, setData] = useState([])
  const [nama, setNama] = useState()
  const [institusi, setInstitusi] = useState()
  const [nomorKontak1, setNomorKontak1] = useState()
  const [nomorKontak2, setNomorKontak2] = useState()
  const [namaAnggota1, setNamaAnggota1] = useState()
  const [emailAnggota1, setEmailAnggota1] = useState()
  const [fotoAnggota1, setFotoAnggota1] = useState()
  const [eKtmAnggota1, setEKtmAnggota1] = useState()
  const [buktiFollowAnggota1, setBuktiFollowAnggota1] = useState()
  const [namaAnggota2, setNamaAnggota2] = useState()
  const [emailAnggota2, setEmailAnggota2] = useState()
  const [fotoAnggota2, setFotoAnggota2] = useState()
  const [eKtmAnggota2, setEKtmAnggota2] = useState()
  const [buktiFollowAnggota2, setBuktiFollowAnggota2] = useState()
  const [namaAnggota3, setNamaAnggota3] = useState()
  const [emailAnggota3, setEmailAnggota3] = useState()
  const [fotoAnggota3, setFotoAnggota3] = useState()
  const [eKtmAnggota3, setEKtmAnggota3] = useState()
  const [buktiFollowAnggota3, setBuktiFollowAnggota3] = useState()
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
  useEffect(() => {
    setNama(data?.teams?.[0]?.namaTeam)
    setInstitusi(data?.teams?.[0]?.institusi)
    setNomorKontak1(data?.teams?.[0]?.nomorKontak1)
    setNomorKontak2(data?.teams?.[0]?.nomorKontak2)
    setNamaAnggota1(data?.teams?.[0]?.namaAnggota1)
    setEmailAnggota1(data?.teams?.[0]?.emailAnggota1)
    setNamaAnggota2(data?.teams?.[0]?.namaAnggota2)
    setEmailAnggota2(data?.teams?.[0]?.emailAnggota2)
    setNamaAnggota3(data?.teams?.[0]?.namaAnggota3)
    setEmailAnggota3(data?.teams?.[0]?.emailAnggota3)
  }, [data?.teams])

  const handleSimpan = () => {
    const formData = new FormData()
    formData.append('namaTeam', nama ?? '-')
    formData.append('institusi', institusi ?? '-')
    formData.append('nomorKontak1', nomorKontak1 ?? '-')
    formData.append('nomorKontak2', nomorKontak2 ?? '-')
    formData.append('namaAnggota1', namaAnggota1 ?? '-')
    formData.append('emailAnggota1', emailAnggota1 ?? '-')
    formData.append('fotoAnggota1', fotoAnggota1 ?? '-')
    formData.append('eKtmAnggota1', eKtmAnggota1 ?? '-')
    formData.append('buktiFollowAnggota1', buktiFollowAnggota1 ?? '-')
    formData.append('namaAnggota2', namaAnggota2 ?? '-')
    formData.append('emailAnggota2', emailAnggota2 ?? '-')
    formData.append('fotoAnggota2', fotoAnggota2 ?? '-')
    formData.append('eKtmAnggota2', eKtmAnggota2 ?? '-')
    formData.append('buktiFollowAnggota2', buktiFollowAnggota2 ?? '-')
    formData.append('namaAnggota3', namaAnggota3 ?? '-')
    formData.append('emailAnggota3', emailAnggota3 ?? '-')
    formData.append('fotoAnggota3', fotoAnggota3 ?? '-')
    formData.append('eKtmAnggota3', eKtmAnggota3 ?? '-')
    formData.append('buktiFollowAnggota3', buktiFollowAnggota3 ?? '-')
    formData.append('kategori', 'Mahasiswa' ?? '-')
    formData.append('userId', JSON.parse(localStorage.getItem('user'))?._id ?? '-')
    axios
      .post('http://localhost:8000/api/createteam', formData)
      .then(() => {
        router.push('/dashboard/peserta')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="bg-bg-04 rounded-xl flex flex-col py-12 px-6">
      <Link className="mb-8" href="/dashboard/peserta">
        <button
          type="submit"
          href="#?"
          className="font-jost font-medium sm:text-xs lg:text-lg xl:text-xl flex items-center absolute top-[4%] right-[3%] lg:static text-c-02"
        >
          <AiOutlineRollback />
          &nbsp;
          <div className=" bg-gradient-to-l from-c-01 to-c-02 bg-clip-text text-transparent">
            Kembali
          </div>
        </button>
      </Link>
      <div className="bg-bg-01 rounded-xl flex justify-center items-center p-16">
        <div className="flex flex-col w-3/5 justify-center items-center">
          <div className="pl-4">
            <div className="bg-c-00 rounded-3xl py-2 px-2 flex justify-center items-center  w-36">
              <div
                className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg px-4 py-2 transition-all font-semibold font-poppins`}
              >
                DATA TIM
              </div>
            </div>
          </div>
          <form className="flex flex-col w-full">
            <label
              htmlFor="Nteam"
              className="flex-col flex text-white font-poppins font-medium text-base"
            >
              Nama Tim:
              <input
                type="text"
                id="Nteam"
                name="Nteam"
                className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
              />
            </label>
            <label
              htmlFor="intuisi"
              className="flex-col flex text-white font-poppins font-medium text-base mt-5"
            >
              Intitusi:
              <input
                type="text"
                id="intuisi"
                name="intuisi"
                className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                value={institusi}
                onChange={(e) => setInstitusi(e.target.value)}
                required
              />
            </label>
            <label
              htmlFor="intuisi"
              className="flex-col flex text-white font-poppins font-medium text-base mt-5"
            >
              Nomor Kontak:
              <div className="flex flex-col w-full justify-between md:flex-row">
                <input
                  type="text"
                  id="nomorKontak"
                  name="nomorKontak"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30 md:w-[48%]"
                  value={nomorKontak1}
                  onChange={(e) => setNomorKontak1(e.target.value)}
                  required
                />
                <input
                  type="text"
                  id="nomorKontak"
                  name="nomorKontak"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30 md:w-[48%] mt-4 md:mt-0"
                  value={nomorKontak2}
                  onChange={(e) => setNomorKontak2(e.target.value)}
                  required
                />
              </div>
            </label>
          </form>
          <p className="text-xs font-poppins text-white text-left self-start mt-2">
            *Nomor Ketua dan 1 nomor cadangan
          </p>
        </div>
      </div>

      {/* Data Peserta */}
      <div className="bg-bg-01 rounded-xl flex justify-center items-center p-16">
        <div className="flex flex-col w-11/12 justify-center items-center">
          <div className="pl-4">
            <div className="bg-c-00 rounded-3xl py-2 px-2 flex justify-center items-center ">
              <div
                className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg px-4 py-2 transition-all font-semibold font-poppins`}
              >
                DATA PESERTA
              </div>
            </div>
          </div>
          <form className="flex flex-col w-4/5">
            <div className="flex flex-col md:flex-row mt-7 w-full">
              <p className="text-white font-poppins font-semibold text-base w-2/12  ">
                Jumlah Peserta :
              </p>
              <div
                className="flex flex-row justify-around w-10/12"
                onChange={(e) => setJumlah(e.target.value)}
              >
                <label htmlFor="1" className="text-white text-base font-poppins flex items-center">
                  <input
                    type="radio"
                    name="jumlah"
                    value="1"
                    className="after:bg-c-01 w-5 h-5 mr-2"
                    defaultChecked
                  />
                  1 Orang
                </label>
                <label htmlFor="2" className="text-white text-base font-poppins flex items-center">
                  <input
                    type="radio"
                    name="jumlah"
                    value="2"
                    className="after:bg-c-01 w-5 h-5 mr-2"
                  />
                  2 Orang
                </label>
                <label htmlFor="3" className="text-white text-base font-poppins flex items-center">
                  <input
                    type="radio"
                    name="jumlah"
                    value="3"
                    className="after:bg-c-01 w-5 h-5 mr-2"
                  />
                  3 Orang
                </label>
              </div>
            </div>
          </form>

          <div
            className={` self-start rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg py-2 transition-all font-semibold font-poppins`}
          >
            KETUA
          </div>
          <form className="flex flex-col lg:flex-row w-full justify-around">
            <div className="lg:w-[30%] w-full">
              <label
                htmlFor="Ketua"
                className="flex-col flex text-white font-poppins font-medium text-base"
              >
                Nama Ketua:
                <input
                  value={namaAnggota1}
                  onChange={(e) => setNamaAnggota1(e.target.value)}
                  type="text"
                  id="Ketua"
                  name="Ketua"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%] w-full self-end justify-self-end">
              <label
                htmlFor="EKetua"
                className="flex-col flex text-white font-poppins font-medium text-base lg:mt-0 mt-5 "
              >
                Email Ketua:
                <input
                  value={emailAnggota1}
                  onChange={(e) => setEmailAnggota1(e.target.value)}
                  type="email"
                  id="EKetua"
                  name="EKetua"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%]" />
          </form>
          <div className="flex flex-col md:flex-row w-full justify-between mt-6">
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Foto Ketua:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileFotoAnggota1"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileFotoAnggota1"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFotoAnggota1(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {fotoAnggota1?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5 ">
              E-KTM Ketua:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileEktmAnggota1"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileEktmAnggota1"
                    type="file"
                    className="hidden"
                    onChange={(e) => setEKtmAnggota1(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {eKtmAnggota1?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Bukti Follow IG @nescougm:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileBuktiFollowAnggota1"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileBuktiFollowAnggota1"
                    type="file"
                    className="hidden"
                    onChange={(e) => setBuktiFollowAnggota1(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {buktiFollowAnggota1?.name}
            </div>
          </div>
          {/* <------------------------ ANGGOTA 1 ------------------------> */}
          <div
            className={` mt-10 self-start rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg py-2 transition-all font-semibold font-poppins`}
          >
            ANGGOTA 1
          </div>
          <form className="flex flex-col lg:flex-row w-full justify-around">
            <div className="lg:w-[30%] w-full">
              <label
                htmlFor="Anggota1"
                className="flex-col flex text-white font-poppins font-medium text-base"
              >
                Nama Anggota 1:
                <input
                  value={namaAnggota2}
                  onChange={(e) => setNamaAnggota2(e.target.value)}
                  type="text"
                  id="Anggota1"
                  name="Anggota1"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%] w-full self-end justify-self-end">
              <label
                htmlFor="EAnggota1"
                className="flex-col flex text-white font-poppins font-medium text-base lg:mt-0 mt-5 "
              >
                Email Anggota 1:
                <input
                  value={emailAnggota2}
                  onChange={(e) => setEmailAnggota2(e.target.value)}
                  type="email"
                  id="EKetua"
                  name="EKetua"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%]" />
          </form>
          <div className="flex flex-col md:flex-row w-full justify-between mt-6">
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Foto Anggota 1:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileFotoAnggota2"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileFotoAnggota2"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFotoAnggota2(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {fotoAnggota2?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5 ">
              E-KTM Anggota 1:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileEktmAnggota2"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileEktmAnggota2"
                    type="file"
                    className="hidden"
                    onChange={(e) => setEKtmAnggota2(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {eKtmAnggota2?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Bukti Follow IG @nescougm:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileBuktiFollowAnggota2"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileBuktiFollowAnggota2"
                    type="file"
                    className="hidden"
                    onChange={(e) => setBuktiFollowAnggota2(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {buktiFollowAnggota2?.name}
            </div>
          </div>

          <div
            className={` mt-10 self-start rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg py-2 transition-all font-semibold font-poppins`}
          >
            ANGGOTA 2
          </div>
          <form className="flex flex-col lg:flex-row w-full justify-around">
            <div className="lg:w-[30%] w-full">
              <label
                htmlFor="Anggota2"
                className="flex-col flex text-white font-poppins font-medium text-base"
              >
                Nama Anggota 2:
                <input
                  value={namaAnggota3}
                  onChange={(e) => setNamaAnggota3(e.target.value)}
                  type="text"
                  id="Anggota2"
                  name="Anggota2"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%] w-full self-end justify-self-end">
              <label
                htmlFor="EAnggota2"
                className="flex-col flex text-white font-poppins font-medium text-base lg:mt-0 mt-5 "
              >
                Email Anggota 2:
                <input
                  value={emailAnggota3}
                  onChange={(e) => setEmailAnggota3(e.target.value)}
                  type="email"
                  id="Anggota2"
                  name="Anggota2"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
                  required
                />
              </label>
            </div>
            <div className="lg:w-[30%]" />
          </form>
          <div className="flex flex-col md:flex-row w-full justify-between mt-6">
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Foto Anggota 2:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileFotoAnggota3"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileFotoAnggota3"
                    type="file"
                    className="hidden"
                    onChange={(e) => setFotoAnggota3(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {fotoAnggota3?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5 ">
              E-KTM Anggota 2:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileEktmAnggota3"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileEktmAnggota3"
                    type="file"
                    className="hidden"
                    onChange={(e) => setEKtmAnggota3(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {eKtmAnggota3?.name}
            </div>
            <div className=" w-full md:w-[30%] flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5">
              Bukti Follow IG @nescougm:
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="fileBuktiFollowAnggota3"
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mb-2 text-sm text-gray-500 justify-center flex text-center flex-col">
                      <p className="font-semibold">Click to upload</p>
                      <p>or drag and drop</p>
                    </div>
                  </div>
                  <input
                    id="fileBuktiFollowAnggota3"
                    type="file"
                    className="hidden"
                    onChange={(e) => setBuktiFollowAnggota3(e?.target?.files[0])}
                  />
                </label>
              </div>
              File : {buktiFollowAnggota3?.name}
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row justify-end p-16 md:flex hidden">
        <div className="md:mr-12 mr-6">
          <Link href="/dashboard/peserta">
            <Button type="secondary" size="sm">
              Batal
            </Button>
          </Link>
        </div>
        <Button onClick={handleSimpan}>Simpan</Button>
      </div>
      <div className="flex-row justify-end p-16 md:hidden flex">
        <div className="md:mr-12 mr-6">
          <Link href="/dashboard/peserta">
            <Button type="secondary" size="sm">
              Batal
            </Button>
          </Link>
        </div>
        <Button size="sm" onClick={handleSimpan}>
          Simpan
        </Button>
      </div>
    </div>
  )
}

export default EditComponent
