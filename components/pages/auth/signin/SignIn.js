/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineCloseCircle,
  AiOutlineMail,
  AiOutlineUnlock,
} from 'react-icons/ai'

import { Button } from '../../../element/button'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [Open, setOpen] = useState(false)
  const [wrong, setWrong] = useState(false)
  const Toggle = () => {
    setOpen(!Open)
  }
  const route = useRouter()
  const profile = () => {
    const id = JSON.parse(localStorage.getItem('user'))?._id ?? ''
    if (id !== '') {
      axios.get(`http://localhost:8000/api/${id}/profile`).then((res) => {
        if (res?.data?.role === 'admin') {
          route.push('/dashboard/admin')
        } else {
          route.push('/dashboard/peserta')
        }
      })
    }
  }
  const Login = () => async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/signin', {
        email,
        password,
      })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      if (response?.data?.user?.email === 'nescougm2023@gmail.com') {
        route.push('/dashboard/admin')
      } else {
        route.push('/dashboard/peserta')
      }
    } catch (error) {
      if (
        error?.response?.data?.error === 'Email and password do not match' ||
        error?.response?.data?.error === 'Email was not found'
      ) {
        setWrong(true)
        setTimeout(() => {
          setWrong(false)
        }, 3000)
      } else if (error?.response?.data?.error === 'Email Not Yet Verified') {
        route.push('/auth/notverify')
      } else {
        console.log(error)
      }
    }
  }
  useEffect(() => {
    profile()
  }, [])
  const icons = [AiOutlineMail]
  const form = [{ name: 'email', id: 'email', type: 'email', placeholder: 'Alamat Email' }]
  return (
    <div className="relative">
      <div
        className={` ${
          wrong ? '' : 'hidden'
        } absolute z-40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-bg-02 md:h-56 md:w-96 h-40 w-72 rounded-lg`}
      >
        <div className="flex flex-col justify-center text-center h-full w-full">
          <div className="flex w-full text-center justify-center">
            <AiOutlineCloseCircle size={100} color="red" />
          </div>
          <p className="text-white">Wrong Email or Password</p>
        </div>
      </div>
      <div className="flex flex-col h-[100vh] max-w-[319px] sm:max-w-[362px] justify-center mx-auto gap-[10px]">
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
                    setEmail(e.target.value)
                  }}
                />
              </div>
            )
          })}
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
              placeholder="Kata Sandi"
              className="pl-[43px] bg-c-05 rounded-[8px] flex flex-col justify-between h-full w-full text-[#A5A9AD] focus:outline-none"
              required
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />

            {Open === false ? (
              <AiFillEyeInvisible
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle}
              />
            ) : (
              <AiFillEye
                size={24}
                className="cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-[11px]"
                onClick={Toggle}
              />
            )}
          </div>
        </form>
        <div className="font-poppins text-[12px] text-white/50 text-center">
          Lupa kata sandi ?{' '}
          <Link href="/auth/resetpassword1">
            <span className="text-c-02 underline">Reset</span>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-[17px]">
          <Button type="tertiary" size="xl" animation="extra" onClick={Login()}>
            Masuk
          </Button>
          {/* <div className=" border-[2px] border-c-01 rounded-[8.07px] w-full py-[11px] cursor-pointer">
            <div className="flex gap-[7px] items-center justify-center hover:drop-shadow-[0_0_20px_rgba(81,177,204,0.64)] ">
              <Image src={google} width={16.48} className="flex items-center " />
              <button type="button" className="text-white font-jost font-bold leading-[30px]  ">
                Masuk dengan Google
              </button>
            </div>
          </div> */}
        </div>
        <div className="font-poppins text-[12px] text-white/50 text-center">
          Don&apos;t have an account ?{' '}
          <Link href="/auth/signup">
            <span className="text-c-02 underline">Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
