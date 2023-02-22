/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import { AiOutlineRollback, AiOutlineSearch } from 'react-icons/ai'

import { CompetitionPeserta } from './CompetitionDetailPeserta'

export function DataTable({ title }) {
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
              <div>{baris[5] ? '1' : '0'}</div>
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
