/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

import { Button } from '../../../element/button'

export function PengumpulanKarya({ data }) {
  const [link, setLink] = useState('')
  const [warning, setWarning] = useState(false)
  const route = useRouter()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Submit = () => async () => {
    setWarning(!warning)
    try {
      await axios.post(`https://be-nesco-2023.vercel.app/api/${data._id}/submit`, {
        submission: link,
      })
      route.reload()
    } catch (error) {
      console.log(error)
    }
  }
  const Unggah = useCallback(() => {
    return (
      <div className="bg-black fixed z-40 bg-opacity-[.7] h-screen top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen flex justify-center items-center">
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[488px] flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
            <h1 className=" text-center text-[12px] md:text-[14px] leading-[30px] font-poppins font-medium">
              Pastikan Anda telah melakukan pengisian data dengan lengkap dan benar. Apabila sudah
              simpan permanen maka anda setuju bahwa data yang sudah diisi tidak dapat diubah
              kembali.
            </h1>
            <div className="flex justify-center gap-[40px]">
              <div>
                <Button onClick={() => setWarning(!warning)} size="sm" type="secondary">
                  Batalkan
                </Button>
              </div>
              <button type="submit" onClick={Submit()}>
                <Button size="sm" type="primary">
                  Simpan
                </Button>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }, [Submit, warning])

  return (
    <div className="flex flex-col mt-10 w-[98%] h-4/5 bg-bg-01 rounded-xl p-6 md:p-12">
      {warning ? <Unggah /> : <div />}
      <div
        className={` rounded bg-clip-text bg-gradient-to-t from-c-01 to-c-02 text-transparent text-xl sm:text-2xl transition-all font-bold font-jost uppercase`}
      >
        SUBMIT KARYA
      </div>
      <div className="w-1/2 mt-8">
        <label
          htmlFor="Nteam"
          className="flex-col flex text-white font-poppins font-medium text-base"
        >
          Submisi Form:
          {data.submission === '-' ? (
            <input
              type="text"
              id="Nteam"
              name="Nteam"
              className="bg-bg-04 rounded-lg h-8 p-4 border-c-02 border-[0.5px] border-opacity-30 mt-4"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          ) : (
            <p>{data?.submission}</p>
          )}
        </label>
        <p className="text-white">*drop link google drive karya di sini</p>
        <p className="text-white">
          Jangan Lupa untuk me-<span className=" font-bold">setting</span> Public
        </p>
      </div>
      {data.submission === '-' ? (
        <div className="w-1/8 mt-8">
          <Button type="secondary" onClick={() => setWarning(!warning)}>
            Unggah
          </Button>
        </div>
      ) : (
        <div />
      )}
    </div>
  )
}
