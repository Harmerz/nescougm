import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiOutlineUnlock } from 'react-icons/ai'

export function InputPassword({ Keterangan = 'Kata Sandi' }) {
  const [Open, setOpen] = useState(false)
  return (
    <div
      key="password"
      className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative"
    >
      <AiOutlineUnlock
        size={24}
        className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
      />
      <input
        type={Open === false ? 'password' : 'text'}
        name="password"
        id="password"
        placeholder={Keterangan}
        className="pl-[43px] bg-c-05 rounded-[8px] flex flex-col justify-between h-full w-full text-[#A5A9AD] focus:outline-none"
        required
      />

      {Open === false ? (
        <AiFillEyeInvisible
          size={24}
          className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
          onClick={setOpen(true)}
        />
      ) : (
        <AiFillEye
          size={24}
          className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
          onClick={setOpen(true)}
        />
      )}
    </div>
  )
}

export default InputPassword
