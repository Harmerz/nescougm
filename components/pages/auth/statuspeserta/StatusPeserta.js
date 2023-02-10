import { BsPerson } from 'react-icons/bs'

import { Button } from '../../../element/button'

export function StatusPeserta() {
  return (
    <div className="max-w-[319px] sm:max-w-[362px] mx-auto flex flex-col h-[100vh] justify-center items-center gap-[10px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form className="flex flex-col justify-center items-center gap-[17px] w-full ">
          <h1 className="font-poppins font-medium text-[24px] text-[#A5A9AD] ">
            Pilih Status Peserta
          </h1>
          <div className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative">
            <BsPerson
              size={24}
              className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
            />
            <select
              name="status"
              id="status"
              className="text-[16px] pl-[43px] bg-c-05 rounded-[8px]  h-full w-full text-[#A5A9AD] focus:outline-none"
              required
            >
              <option value="pelajar" className="w-[319px] sm:w-[362px]">
                Pelajar
              </option>
              <option value="mahasiswa" className="w-[319px] sm:w-[362px]">
                Mahasiswa
              </option>
            </select>
          </div>
          {/* <DropdownSelect /> */}
        </form>

        <Button type="tertiary" size="xl" animation="extra">
          Reset Password
        </Button>
      </div>
      <p className="font-poppins text-[12px] text-white/50 text-center">
        Didn&apos;t receive an email?{' '}
        <span className="text-c-02 underline">
          <a href="#?">Resend</a>
        </span>
      </p>
    </div>
  )
}

export default StatusPeserta
