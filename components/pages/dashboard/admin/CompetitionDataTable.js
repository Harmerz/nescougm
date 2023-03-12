/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { initializeApp } from 'firebase/app'
import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  AiFillCheckSquare,
  AiOutlineCheckSquare,
  AiOutlineRollback,
  AiOutlineSearch,
} from 'react-icons/ai'

import { Button } from '../../../element/button'
import { CompetitionPeserta } from './CompetitionDetailPeserta'

const firebaseConfig = {
  apiKey: 'AIzaSyAGyEzjL9GIh80vbjazecsROa94a1w9Lyk',
  authDomain: 'nesco-fb1d6.firebaseapp.com',
  projectId: 'nesco-fb1d6',
  storageBucket: 'nesco-fb1d6.appspot.com',
  messagingSenderId: '412903612',
  appId: '1:412903612:web:b4e65de54653a5b68508b9',
}

const app = initializeApp(firebaseConfig)

export function DataTable({ title }) {
  const [verif, setVerif] = useState(false)
  const [batal, setBatal] = useState(false)
  const [data, setData] = useState([])
  const [dataDetail, setDataDetail] = useState([])
  const [idDetail, setIdDetail] = useState('')
  const [url, setUrl] = useState('')
  const [modal, setModal] = useState(false)

  const handelGambar = (value) => {
    setModal(true)
    getDownloadURL(ref(getStorage(app), value)).then((URL) => {
      setUrl(URL)
    })
  }
  const dataProfile = () => {
    axios
      .get('https://be-nesco-2023-p2kk.vercel.app/api/users')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    dataProfile()
  }, [])
  const isi = useMemo(() => {
    return data.map((item) => {
      return [
        item?.teams?.[0]?.namaTeam ?? '-',
        item?._id ?? '-',
        item?.name ?? '-',
        item?.teams?.[0]?.selectedCompetition ?? '-',
        item?.teams?.[0]?.unique_number ?? '-',
        item?.paymentStatus ?? false,
        item?.teams?.[0]?.submission ?? '-',
        item?.teams?.[0]?.proofOfPayment ?? '-',
      ]
    })
  }, [data])

  const handelVerifPembayaran = async (id) => {
    try {
      axios
        .post(`https://be-nesco-2023-p2kk.vercel.app/api/${id}/payment`, {
          paymentStatus: true,
        })
        .then(() => {
          dataProfile()
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }
  const handelBatalVerifPembayaran = async (id) => {
    try {
      axios
        .put(`https://be-nesco-2023-p2kk.vercel.app/api/${id}/cancelpayment`, {
          paymentStatus: false,
        })
        .then(() => {
          dataProfile()
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

  // warning sblm ngeverifikasi
  const ChangeContent1 = useCallback(({ id }) => {
    console.log(id)
    return (
      <div className="bg-black/30 fixed z-40 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[488px] flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
            <h1 className=" text-center text-[12px] md:text-[14px] leading-[30px] font-poppins font-medium">
              Beneran terverif kan? cek lagi yang teliti nggih
            </h1>
            <div className="flex justify-center gap-[40px]">
              <div>
                <Button onClick={() => setVerif(false)} size="sm" type="secondary">
                  Batalkan
                </Button>
              </div>
              <button
                type="submit"
                onClick={() => {
                  setVerif(false)
                }}
              >
                <Button size="sm" type="primary" onClick={() => handelVerifPembayaran(id)}>
                  Verifikasi
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }, [])

  // warning batal verifikasi
  const ChangeContent2 = useCallback(({ id }) => {
    return (
      <div className="bg-black/30 fixed z-40 h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center">
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[488px] flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
            <h1 className=" text-center text-[12px] md:text-[14px] leading-[30px] font-poppins font-medium">
              Batal verifikasi peserta? Besok lagi jangan plin-plan ya
            </h1>
            <div className="flex justify-center gap-[40px]">
              <div>
                <Button onClick={() => setBatal(false)} size="sm" type="secondary">
                  Enggajadi
                </Button>
              </div>
              <button
                type="submit"
                onClick={() => {
                  setBatal(false)
                }}
              >
                <Button size="sm" type="primary" onClick={() => handelBatalVerifPembayaran(id)}>
                  Batalkan Verifikasi
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }, [])

  const [hasilPencarian, setHasilPencarian] = useState(isi)

  useEffect(() => {
    setHasilPencarian(isi)
  }, [isi])
  return (
    <div>
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
      <div className="flex justify-center items-center mt-10">
        <div className="ml-[1%] text-4xl h-fit font-jost font-medium bg-gradient-to-b from-c-01 to-c-02 bg-clip-text text-transparent">
          {title}
        </div>
      </div>
      <div>
        <Link href="/">
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
      </div>
      <div className="flex h-[50px] mt-[14px] font-poppins text-white">
        <div className="w-[36vw] bg-bg-03 rounded-[5px] outline-c-02/[.60] outline outline-1 drop-shadow-[0_0_10px_#0DF8CF20] text-white/[.20] flex">
          <AiOutlineSearch className="h-full w-[3%] ml-[5%]" />
          <input
            type="text"
            placeholder="Cari nama kelompok"
            className="ml-[1%] w-full mr-[5%] bg-inherit focus:outline-0 placeholder:text-white/[.20] text-white/[.50]"
            onChange={(e) => {
              setHasilPencarian(
                isi.filter(
                  (peserta) =>
                    peserta[0].toLowerCase().includes(e.target.value.toLowerCase()) ||
                    peserta[2].toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }}
          />
        </div>
        <div className="ml-auto flex items-center mr-[3%]">Total: {isi.length}</div>
        <div className="flex items-center underline">
          <button type="submit">
            <a href="https://docs.google.com/spreadsheets/d/1V-_dyIN_6oEmPGDDbpZN3jitxDlpt2J3lM2Q44qvXJI/edit?usp=sharing">
              Lihat Spreadsheet
            </a>
          </button>
        </div>
      </div>
      <div className="mt-[20px] outline outline-1 outline-c-02/[.60] drop-shadow-[0_0_10px_#0DF8CF20] bg-bg-03 h-[400px] mb-[50px] rounded-[5px] text-white font-poppins overflow-auto">
        <div className="grid grid-cols-[0fr_0.4fr_repeat(7,1fr)] justify-items-center items-center relative">
          <div className="sticky top-0 h-[60px]" />
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            No
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Nama tim
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Nama ketua
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Kompetisi
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Nomor Unik
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Detail
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Status
          </div>
          <div className="sticky top-0 h-[60px] w-full flex justify-center items-center bg-bg-03">
            Karya
          </div>
          <div className="sticky top-[60px] h-[1px] col-span-full bg-c-02/[.60] w-full" />
          {hasilPencarian.map((baris, index) => (
            <>
              <div className="h-[60px]" />
              <div className="text-center">{index + 1}</div>
              <div className="text-center">{baris[0]}</div>

              <div className="text-center">{baris[2]}</div>
              <div className="text-center">{baris[3]}</div>
              <div className="text-center">{baris[4]}</div>
              <div className="text-center">
                <button type="button" onClick={() => setDataDetail(data[index]?.teams?.[0])}>
                  <div className="font-bold underline">Lihat Detail</div>
                </button>
              </div>
              <div className="text-center flex justify-center items-center">
                <button
                  type="button"
                  className="mr-2"
                  onClick={() => {
                    if (baris[7] !== '-') {
                      handelGambar(baris[7])
                    }
                  }}
                >
                  {baris[7] === '-' ? (
                    <div className="font-reguler cursor-not-allowed">Bukti</div>
                  ) : (
                    <div className="font-bold underline">Bukti</div>
                  )}
                </button>
                {baris[5] ? (
                  <button
                    onClick={() => {
                      setBatal(true)
                      setIdDetail(baris[1])
                    }}
                    type="button"
                  >
                    <AiFillCheckSquare size={19.79} className="text-c-02" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setVerif(true)
                      setIdDetail(baris[1])
                    }}
                    type="button"
                  >
                    <AiOutlineCheckSquare size={19.79} className="text-c-02" />
                  </button>
                )}
                {verif ? <ChangeContent1 id={idDetail} /> : <div />}
                {batal ? <ChangeContent2 id={idDetail} /> : <div />}
              </div>
              <div className="text-center">{baris[6]}</div>
              <div className="h-[1px] col-span-full bg-c-02/[.60] w-[97%]" />
            </>
          ))}
        </div>
      </div>
      <CompetitionPeserta data={dataDetail} />
    </div>
  )
}
