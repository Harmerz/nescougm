import { useState } from 'react'
import { AiOutlineRollback, AiOutlineSearch } from 'react-icons/ai'

export function DataTable({ title, onKembali }) {
  const isi = [
    ['Haha hihi', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['Tim Juara oye', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', true, ''],
    ['Nekolism', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['neko-neko.fig', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet A', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet B', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet C', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet D', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet E', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet F', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
    ['isyarat sistem dapet G', 'Jhon Doe', 'doe@mail.ui.ac.id', '87845692811', false, ''],
  ]
  const [hasilPencarian, setHasilPencarian] = useState(isi)
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-[6vw] h-[6vw] bg-[#D9D9D9]" />
        <div className="ml-[1%] text-4xl h-fit font-jost font-medium bg-gradient-to-b from-c-01 to-c-02 bg-clip-text text-transparent">
          {title} Competition
        </div>
      </div>
      <div>
        <button
          type="submit"
          href="#?"
          onClick={onKembali}
          className="font-jost font-medium sm:text-xs lg:text-lg xl:text-xl flex items-center absolute top-[4%] right-[3%] lg:static text-c-02"
        >
          <AiOutlineRollback />
          &nbsp;
          <div className=" bg-gradient-to-l from-c-01 to-c-02 bg-clip-text text-transparent">
            Kembali
          </div>
        </button>
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
                isi.filter((peserta) =>
                  peserta[0].toLowerCase().includes(e.target.value.toLowerCase())
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
        <div className="grid grid-rows-[60px] grid-cols-[0.4fr_repeat(7,1fr)_12px] justify-items-center items-center outline outline-1 outline-c-02/[.60] rounded-t-[5px]">
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
              className="grid grid-rows-[60px] grid-cols-[0.4fr_repeat(7,1fr)] justify-items-center items-center"
            >
              <div>{index + 1}</div>
              <div>{baris[0]}</div>
              <div>{baris[1]}</div>
              <div>{baris[2]}</div>
              <div>{baris[3]}</div>
              <div>
                <button type="submit" href="#?">
                  <div className="font-bold underline">Lihat Detail</div>
                </button>
              </div>
              <div>{baris[4] ? '1' : '0'}</div>
              <div>{baris[5]}</div>
              <div className="h-[1px] col-span-full bg-c-02/[.60] w-[97%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
