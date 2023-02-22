/* eslint-disable no-console */
import axios from 'axios'
// import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible, AiFillMail, AiFillUnlock } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'
import { FaGraduationCap } from 'react-icons/fa'

// import google from '../../../../public/icon/google.svg'
import { Button } from '../../../element/button'

export function SignUp() {
  const icons = [BsPersonFill, AiFillMail]
  const route = useRouter()
  const [status, setStatus] = useState('Pelajar')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [Open1, setOpen1] = useState(false)
  const [Open2, setOpen2] = useState(false)
  const [confirm, setConfirm] = useState(true)
  const Toggle1 = () => {
    setOpen1(!Open1)
  }
  const Toggle2 = () => {
    setOpen2(!Open2)
  }
  const Register = () => async () => {
    try {
      await axios
        .post('http://localhost:8000/api/signup', {
          email,
          password,
          status,
          name,
        })
        .finally(() => {
          route.push('/auth/verifdaftar')
        })
        .catch((err) => {
          console.log(err)
        })
    } catch (error) {
      console.log(error)
    }
  }

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
                  onChange={(e) => {
                    if (item.name === 'email') {
                      setEmail(e.target.value)
                    } else if (item.name === 'nama') {
                      setName(e.target.value)
                    }
                  }}
                />
              </div>
            )
          })}
          <div className="flex gap-[8px] text-[#A5A9AD] text-[16px] font-poppins bg-gradient-to-b from-c-02 to-c-01 drop-shadow-[0px_0px_1.9px_#008DB8] w-full h-[51px] p-[1px] rounded-[8px] items-center justify-center relative">
            <FaGraduationCap
              size={24}
              className="pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-[11px]"
            />
            <select
              name="status"
              id="status"
              className="text-[16px] pl-[43px] bg-c-05 rounded-[8px]  h-full w-full text-[#A5A9AD] focus:outline-none"
              required
              onChange={(e) => setStatus(e.target.value)}
            >
              <option disabled selected hidden>
                pilih kategori peserta--
              </option>
              <option value="Pelajar" className="w-[319px] sm:w-[362px]">
                Pelajar
              </option>
              <option value="Mahasiswa" className="w-[319px] sm:w-[362px]">
                Mahasiswa
              </option>
            </select>
          </div>
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

        {/* <div
          className="flex flex-row justify-around w-10/12"
          onChange={(e) => setStatus(e.target.value)}
        >
          <label htmlFor="1" className="text-white text-base font-poppins flex items-center">
            <input
              type="radio"
              name="kategori"
              value="Pelajar"
              className="after:bg-c-01 w-5 h-5 mr-2"
              defaultChecked
            />
            Pelajar
          </label>
          <label htmlFor="2" className="text-white text-base font-poppins flex items-center">
            <input
              type="radio"
              name="kategori"
              value="Mahasiswa"
              className="after:bg-c-01 w-5 h-5 mr-2"
            />
            Mahasiswa
          </label>
        </div> */}
        <div className="flex flex-col justify-center items-center gap-[17px]">
          <Button type="tertiary" size="xl" animation="extra" onClick={Register()}>
            Daftar
          </Button>
          {/* <href className=" border-[2px] border-c-01 rounded-[8.07px] w-full py-[11px] cursor-pointer">
            <div className="flex gap-[7px] items-center justify-center hover:drop-shadow-[0_0_20px_rgba(81,177,204,0.64)] ">
              <Image src={google} width={16.48} className="flex items-center " />
              <button type="button" className="text-white font-jost font-bold leading-[30px]  ">
                Daftar dengan Google
              </button>
            </div>
          </href> */}
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
