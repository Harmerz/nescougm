import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

import google from '../../../../public/icon/google.svg'
import { Button } from '../../../element/button'
import { InputPassword } from '../InputPassword'

export function SignUp() {
  const icons = [BsPerson, AiOutlineMail]
  const form = [
    { name: 'nama', id: 'nama', type: 'text', placeholder: 'Nama' },
    { name: 'email', id: 'email', type: 'email', placeholder: 'Alamat Email' },
  ]
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-[10px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form className="flex flex-col justify-center items-center gap-[17px] w-full ">
          {form.map((item, idx) => {
            const Icon = icons[idx]
            return (
              <div
                key={item.id}
                className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative"
              >
                <Icon
                  size={24}
                  className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
                />
                <input
                  type={item.type}
                  name={item.name}
                  id={item.id}
                  placeholder={item.placeholder}
                  className="pl-[43px] bg-c-05 rounded-[8px] flex flex-col justify-between h-full w-full text-[#A5A9AD] focus:outline-none"
                  required
                />
              </div>
            )
          })}
          <InputPassword Keterangan="Kata Sandi" />
        </form>

        <div className="flex flex-col justify-center items-center gap-[17px]">
          <Button type="tertiary" size="xl" animation="extra">
            Daftar
          </Button>
          <href className=" border-[2px] border-c-01 rounded-[8.07px] w-full py-[11px] cursor-pointer">
            <div className="flex gap-[7px] items-center justify-center hover:drop-shadow-[0_0_20px_rgba(81,177,204,0.64)] ">
              <Image src={google} width={16.48} className="flex items-center " />
              <button type="button" className="text-white font-jost font-bold leading-[30px]  ">
                Daftar dengan Google
              </button>
            </div>
          </href>
        </div>
      </div>
      <p className="font-poppins text-[12px] text-white/50 text-center">
        Already have an account ?{' '}
        <span className="text-c-02 underline">
          <a href="./signin">Sign In</a>
        </span>
      </p>
    </div>
  )
}

export default SignUp