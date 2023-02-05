import Image from 'next/image'
import { useState } from 'react'

export function JumlahKarya() {
  const [jumlahKarya, setJumlahKarya] = useState(1)
  // const [maxKarya, setMaxKarya] = useState(false)
  // const [minKarya, setMinKarya] = useState(true)
  return (
    <div className="flex flex-col mt-10 w-[98%] h-4/5 bg-bg-01 rounded-xl p-6 md:p-12">
      <div
        className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xl sm:text-2xl transition-all font-bold font-jost`}
      >
        Jumlah Karya yang ingin diserahkan
      </div>
      <div className="flex-col xl:flex-row flex m-5 justify-center mt-12">
        <div className="flex flex-col xl:w-1/3 justify-center">
          <div id="addButton" className="flex flex-row w-full justify-center">
            <button
              type="button"
              onClick={() => {
                if (jumlahKarya > 1) {
                  setJumlahKarya(jumlahKarya - 1)
                }
              }}
              className={`w-[32px] h-[32px] rounded-full flex items-center justify-center bg-c-00 ${
                jumlahKarya === 1
                  ? 'cursor-default'
                  : 'cursor-pointer drop-shadow-[0_0_4px_rgba(5,195,252,0.5)] '
              } `}
            >
              <Image src="/vector/dashboard/peserta/negatif.svg" width={15} height={15} />
            </button>
            <div className="mx-3 h-9 w-[192px] border-[1px] border-c-02 border-opacity-20 rounded-xl text-white font-jost font-medium text-base flex justify-center items-center bg-bg-00">
              {jumlahKarya}
            </div>
            <button
              type="button"
              onClick={() => {
                if (jumlahKarya < 2) setJumlahKarya(jumlahKarya + 1)
              }}
              className={`w-[32px]  h-[32px]  rounded-full flex items-center justify-center bg-c-00 ${
                jumlahKarya === 2
                  ? 'cursor-default'
                  : 'cursor-pointer drop-shadow-[0_0_4px_rgba(5,195,252,0.5)] '
              } `}
            >
              <Image src="/vector/dashboard/peserta/positif.svg" width={15} height={15} />
            </button>
          </div>
          <p className="text-white text-xs font-poppins mt-8 mb-8 flex justify-start items-end">
            *Maksimal karya yang dapat diserahkan adalah 2 karya
          </p>
        </div>
        <div className="w-full xl:w-2/3">
          <p className="text-white font-jost text-sm md:text-lg font-medium">
            Pengumpulan 1 karya Poster adalah sebesar{' '}
            <span className="text-c-02">Rp. 40.000,00</span>. Peserta diperkenankan mengirimkan
            maksimal 2 karya Poster dengan pengumpulan kedua hanya dikenai biaya sebesar{' '}
            <span className="text-c-02"> Rp. 25.000,00</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
