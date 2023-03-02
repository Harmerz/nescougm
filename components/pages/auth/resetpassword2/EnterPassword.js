import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillUnlock } from 'react-icons/ai'

import { Button } from '../../../element/button'

export function EnterPassword() {
  const [password, setPassword] = useState('')
  const [Open1, setOpen1] = useState(false)
  const [Open2, setOpen2] = useState(false)
  const [confirm, setConfirm] = useState(true)
  const Toggle1 = () => {
    setOpen1(!Open1)
  }
  const Toggle2 = () => {
    setOpen2(!Open2)
  }
  return (
    <div className="max-w-[319px] sm:max-w-[362px] mx-auto flex flex-col h-[100vh] justify-center items-center gap-[10px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form className="flex flex-col justify-center items-center gap-[17px] w-full ">
          <h1 className="text-center font-poppins font-medium text-[24px] text-[#A5A9AD] ">
            Masukkan Password Baru
          </h1>
          <div
            key="password"
            className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative"
          >
            <AiFillUnlock
              size={24}
              className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
            />
            <input
              type={Open1 === false ? 'password' : 'text'}
              name="password"
              id="password"
              placeholder="Kata Sandi"
              className="pl-[43px] bg-c-05 rounded-[8px] flex flex-col justify-between h-full w-full text-[#A5A9AD] focus:outline-none"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            {Open1 === false ? (
              <AiFillEyeInvisible
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle1}
              />
            ) : (
              <AiFillEye
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle1}
              />
            )}
          </div>
          <div
            key="confirmPassword"
            className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative"
          >
            <AiFillUnlock
              size={24}
              className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
            />
            <input
              type={Open2 === false ? 'password' : 'text'}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Konfirmasi Kata Sandi"
              className="pl-[43px] bg-c-05 rounded-[8px] flex flex-col justify-between h-full w-full text-[#A5A9AD] focus:outline-none"
              required
              onChange={(e) => {
                if (e.target.value === password) {
                  setConfirm(true)
                } else {
                  setConfirm(false)
                }
              }}
            />

            {Open2 === false ? (
              <AiFillEyeInvisible
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle2}
              />
            ) : (
              <AiFillEye
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle2}
              />
            )}
          </div>
        </form>
        <p className={` ${confirm ? 'hidden' : 'block'} text-xs text-red-500`}>
          Password Tidak Sama
        </p>
        <Button type="tertiary" size="xl" animation="extra">
          Reset Password
        </Button>
      </div>
    </div>
  )
}

export default EnterPassword
