import Image from 'next/image'

import { Button } from '../../../element/button'

function ButtonDashboard({ children }) {
  return (
    <button
      type="submit"
      className={` rounded bg-gradient-to-t from-c-01 to-c-02 text-white text-[8px] sm:px-4 sm:py-2 px-1 py-1 transition-all font-semibold font-poppins`}
    >
      {children}
    </button>
  )
}

export function CompetitionPeserta() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <h1 className="my-12 rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-3xl md:text-5xl px-4 py-2 transition-all font-semibold font-poppins">
        Paper Competition
      </h1>
      <div className="bg-c-00 xl:w-4/5 w-11/12 items-center justify-center flex md:p-6 py-11">
        <div className="flex flex-col xl:w-4/5 w-11/12 h-4/5 bg-bg-01 rounded-xl">
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
                  Gatau
                </div>
              </div>
            </div>
            <div className="flex flex-wrap flex-row sm:w-2/3 justify-around">
              <div className="flex flex-col">
                <div className="text-white font-poppins sm:text-xs text-[8px]">Intitusi</div>
                <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                  Gatau
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-white font-poppins sm:text-xs text-[8px]">Nomor Kontak</div>
                <div className="text-white font-poppins font-semibold sm:text-base text-xs">
                  Gatau
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
            <div className="font-jost sm:text-base text-xs font-bold text-white mb-6">Anggota</div>
            <div className="grid grid-cols-3 gap-5">
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Nama Ketua
                </div>
                <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                  Jhon Doe
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Email Ketua
                </div>
                <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                  jhondoe@gmail.com
                </div>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Foto Ketua
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  e-KTM Ketua
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Bukti Twibbon dan Follow Ketua
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
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
                  Jhon Doe
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Email Anggota 1
                </div>
                <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                  jhondoe@gmail.com
                </div>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Foto Anggota 1
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  e-KTM Anggota 1
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Bukti Twibbon dan Follow Anggota 1
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
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
                  Jhon Doe
                </div>
              </div>
              <div className="col-span-2">
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Email Anggota 2
                </div>
                <div className="text-white sm:text-base text-xs font-poppins font-semibold">
                  jhondoe@gmail.com
                </div>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Foto Anggota 2
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  e-KTM Anggota 2
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
              <div>
                <div className="text-white sm:text-xs text-[8px] font-poppins sm:mb-3">
                  Bukti Twibbon dan Follow Anggota
                </div>
                <ButtonDashboard>Lihat Detail</ButtonDashboard>
              </div>
            </div>
          </div>
          <div className="flex-row justify-end p-16 md:flex hidden">
            <div className="md:mr-12 mr-6">
              <Button type="secondary">Edit</Button>
            </div>
            <Button>Simpan Permanent</Button>
          </div>
          <div className="flex-row justify-end p-16 md:hidden flex">
            <div className="md:mr-12 mr-6">
              <Button type="secondary" size="sm">
                Edit
              </Button>
            </div>
            <Button size="sm">Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
