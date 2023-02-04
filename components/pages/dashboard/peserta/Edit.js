import { useState } from 'react'

export function EditComponent() {
  const [jumlah, setJumlah] = useState(1)
  return (
    <div className="bg-bg-04 rounded-xl flex flex-col">
      <h1>Edit Component</h1>
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
                />
                <input
                  type="text"
                  id="nomorKontak"
                  name="nomorKontak"
                  className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30 md:w-[48%] mt-4 md:mt-0"
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
          <form className="flex flex-col w-full w-4/5">
            <div className="flex flex-row justify-between mt-7">
              <p className="text-white font-poppins font-semibold text-base">Jumlah Peserta :</p>
              <label htmlFor="1" className="text-white text-base font-poppins flex items-center">
                <input
                  type="radio"
                  name="jumlah"
                  value="1"
                  onChange={(e) => setJumlah(e.target.value)}
                  checked
                  className="after:bg-c-01 w-5 h-5 mr-2"
                />
                1 Orang
              </label>
              <label htmlFor="2" className="text-white text-base font-poppins flex items-center">
                <input
                  type="radio"
                  name="jumlah"
                  value="2"
                  onChange={(e) => setJumlah(e.target.value)}
                  className="after:bg-c-01 w-5 h-5 mr-2"
                />
                2 Orang
              </label>
              <label htmlFor="3" className="text-white text-base font-poppins flex items-center">
                <input
                  type="radio"
                  name="jumlah"
                  value="3"
                  onChange={(e) => setJumlah(e.target.value)}
                  className="after:bg-c-01 w-5 h-5 mr-2"
                />
                3 Orang
              </label>
            </div>
          </form>
          <div
            className={` self-start rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xs sm:text-lg py-2 transition-all font-semibold font-poppins`}
          >
            KETUA
          </div>
          <form className="flex flex-col md:flex-row w-full">
            <label
              htmlFor="Ketua"
              className="flex-col flex text-white font-poppins font-medium text-base"
            >
              Nama Ketua:
              <input
                type="text"
                id="Ketua"
                name="Ketua"
                className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
              />
            </label>
            <label
              htmlFor="EKetua"
              className="flex-col flex text-white font-poppins font-medium text-base md:mt-0 mt-5 ml-5"
            >
              Email Ketua:
              <input
                type="text"
                id="EKetua"
                name="EKetua"
                className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30"
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditComponent
