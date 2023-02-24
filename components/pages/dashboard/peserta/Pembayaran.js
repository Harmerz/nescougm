/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import FormData from 'form-data'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Button } from '../../../element/button'

const firebaseConfig = {
  apiKey: 'AIzaSyAGyEzjL9GIh80vbjazecsROa94a1w9Lyk',
  authDomain: 'nesco-fb1d6.firebaseapp.com',
  projectId: 'nesco-fb1d6',
  storageBucket: 'nesco-fb1d6.appspot.com',
  messagingSenderId: '412903612',
  appId: '1:412903612:web:b4e65de54653a5b68508b9',
}

export function Pembayaran({ teamId, payment, status, kompetisi }) {
  const router = useRouter()
  const [file, setFile] = useState()
  const [modal, setModal] = useState(false)
  const [url, setUrl] = useState()
  const app = initializeApp(firebaseConfig)
  const handelGambar = () => {
    setModal(true)
    getDownloadURL(ref(getStorage(app), payment)).then((URL) => {
      setUrl(URL)
    })
  }
  const handleClick = () => {
    const formData = new FormData()
    formData.append('proofOfPayment', file)
    formData.append('teamId', teamId)
    axios
      .post(`https://be-nesco-2023-p2kk.vercel.app/api/payment`, formData)
      .then((res) => {
        console.log(res)
        router.reload()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <div
        className={`${
          modal ? 'block' : 'hidden'
        } fixed z-50 bg-slate-800 top-0 left-0 w-full h-full`}
      >
        <button
          className="absolute top-4 right-8 text-[##f1f1f1] font-bold text-4xl"
          onClick={() => setModal(false)}
          type="button"
        >
          &times;
        </button>
        <div className="flex justify-center items-center">
          <Image src={url} alt="Picture of the author" width={500} height={500} />
        </div>
      </div>
      <div className="flex flex-col mt-10 w-[98%] h-4/5 bg-[#252E37] drop-shadow-[0_0_14px_rgba(0,0,0,0.25)] rounded-xl p-6 md:p-12">
        <div
          className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xl sm:text-2xl transition-all font-bold font-jost uppercase`}
        >
          Pembayaran
        </div>
        <div className="lg:flex-row flex mt-6 flex-col">
          <div className="lg:w-1/2 text-white font-jost text-xs md:text-base">
            <p>
              Pembayaran kompetisi <span className="text-c-02">{kompetisi}</span> sebesar Rp.,,,,,,
              dapat dibayarkan melalui rekening di bawah ini
            </p>
            <p>1. Bank BCA : 8175413321 atas nama Citra Agatha</p>
            <p>2. Bank CIMB Niaga : 706729978000 atas nama Citra Agatha</p>
            <p>3. Bank BRI : 691101017625539 atas nama Malikha Aulia</p>
            <p>4. OVO, Gopay, Dana : 085156052603</p>
            <p>
              atas nama Citra Agatha Setelah berhasil melakukan pembayaran, harap melampirkan bukti
              pembayaran pada tempat yang telah disediakan.
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 justify-end items-start">
            {payment === '-' ? (
              <>
                <div className="w-full flex justify-end mt-10 lg:mt-0">
                  <div className="justify-end w-full lg:w-4/5">
                    <form>
                      <label>
                        <input
                          type="file"
                          className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-l-lg file:border-0
                    file:text-sm file:font-medium
                    file:bg-c-01 file:text-c-00
                    hover:file:cursor-pointer hover:file:bg-c-02
                    border-[1px] rounded-l-xl text-white border-c-02 bg-c-00 w-full"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </label>
                    </form>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <div className="flex w-1/4 justify-end mt-4 ">
                    <Button type="primary" size="sm" animation="main" onClick={handleClick}>
                      Submit
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full flex justify-end">
                <div className="flex w-1/4 justify-center mt-4 justify-items-end">
                  <Button type="primary" size="sm" animation="main" onClick={handelGambar}>
                    Lihat Detail
                  </Button>
                </div>
              </div>
            )}
            <div className="w-full justify-end mt-4">
              <p className="justify-end flex text-xs md:text-base">
                <span className="text-c-01">Status</span>{' '}
                <span className="text-white">: {status}</span>
              </p>
              <p className="flex text-white justify-end text-[8px] md:text-xs">
                Proses verifikasi akan dilakukan paling lambat 2x24 jam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
