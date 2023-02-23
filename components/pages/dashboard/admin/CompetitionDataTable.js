/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
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

export function DataTable({ title }) {
  const [verif, setVerif] = useState(false)
  const [batal, setBatal] = useState(false)
  const [status, setStatus] = useState(false)
  const [data, setData] = useState([])
  const [dataDetail, setDataDetail] = useState([])
  const dataProfile = () => {
    axios
      .get('http://localhost:8000/api/users')
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
        item?.email ?? '-',
        item?.teams?.[0]?.nomorKontak1 ?? '-',
        item?.paymentStatus ?? false,
        item?.teams?.[0]?.submission ?? '-',
      ]
    })
  }, [data])

  // warning sblm ngeverifikasi
  const ChangeContent1 = useCallback(() => {
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
                <Button size="sm" type="primary" onClick={() => setStatus(true)}>
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
  const ChangeContent2 = useCallback(() => {
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
                  setStatus(true)
                }}
              >
                <Button size="sm" type="primary" onClick={() => setStatus(false)}>
                  Batalkan
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
            onChange={(e) =>
              setHasilPencarian(
                isi.filter(
                  (peserta) =>
                    peserta[0].toLowerCase().includes(e.target.value.toLowerCase()) ||
                    peserta[1].toLowerCase().includes(e.target.value.toLowerCase())
                )
              )
            }
          />
        </div>
        <div className="ml-auto flex items-center mr-[3%]">Total: {isi.length}</div>
        <div className="flex items-center underline">
          <button type="submit" href="#?">
            Lihat Spreadsheet
          </button>
        </div>
      </div>
      <div className="mt-[20px] outline outline-1 outline-c-02/[.60] drop-shadow-[0_0_10px_#0DF8CF20] bg-bg-03 h-[400px] mb-[50px] rounded-[5px] text-white font-poppins">
        <div className="grid grid-rows-[60px] grid-cols-[0.4fr_repeat(8,1fr)_12px] justify-items-center items-center outline outline-1 outline-c-02/[.60] rounded-t-[5px]">
          <div>No</div>
          <div>Nama tim</div>
          <div>Nama ketua</div>
          <div>Email ketua</div>
          <div>Nomor wa</div>
          <div>Detail</div>
          <div>Status</div>
          <div>Karya</div>
          <div />
        </div>
        <div className="h-[340px] overflow-auto">
          {hasilPencarian.map((baris, index) => (
            <div
              key={baris[0] + baris[1]}
              className="grid grid-rows-[60px] grid-cols-[0.4fr_repeat(8,1fr)] justify-items-center items-center"
            >
              <div>{index + 1}</div>
              <div>{baris[0]}</div>

              <div>{baris[2]}</div>
              <div>{baris[3]}</div>
              <div>{baris[4]}</div>
              <div>
                <button type="button" onClick={() => setDataDetail(data[index]?.teams?.[0])}>
                  <div className="font-bold underline">Lihat Detail</div>
                </button>
              </div>
              <div>
                {baris[5] && status ? (
                  <button onClick={() => setBatal(true)} type="button">
                    <AiFillCheckSquare size={19.79} className="text-c-02" />
                  </button>
                ) : (
                  <button onClick={() => setVerif(true)} type="button">
                    <AiOutlineCheckSquare size={19.79} className="text-c-02" />
                  </button>
                )}
                {verif ? <ChangeContent1 /> : <div />}
                {batal ? <ChangeContent2 /> : <div />}
              </div>
              <div>{baris[6]}</div>
              <div className="h-[1px] col-span-full bg-c-02/[.60] w-[97%]" />
            </div>
          ))}
        </div>
      </div>
      <CompetitionPeserta data={dataDetail} />
    </div>
  )
}
