/* eslint-disable no-console */
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'

import { Button } from '../../../element/button'

export function ResetPassword() {
  const icons = [AiOutlineMail]
  const [email, setEmail] = useState('')
  const router = useRouter()
  const form = [{ name: 'email', id: 'email', type: 'email', placeholder: 'Alamat Email' }]
  const Reset = () => async () => {
    try {
      await axios
        .post('http://localhost:8000/api/requestPasswordReset', {
          email,
        })
        .then(() => {
          router.push('/auth/verifresetpassword')
        })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="max-w-[319px] sm:max-w-[362px] mx-auto flex flex-col h-[100vh] justify-center items-center gap-[10px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <form className="flex flex-col justify-center items-center gap-[17px] w-full ">
          <h1 className="font-poppins font-medium text-[24px] text-[#A5A9AD] ">Reset Password</h1>
          <p className="font-poppins font-medium text-[16px] text-[#A5A9AD] text-justify">
            Masukkan alamat email akun anda, kemudian cek email anda untuk mengatur ulang kata sandi
          </p>
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
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            )
          })}
        </form>

        <Button type="tertiary" size="xl" animation="extra" onClick={Reset()}>
          Reset Password
        </Button>
      </div>
    </div>
  )
}

export default ResetPassword
