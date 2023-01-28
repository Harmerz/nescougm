import Image from 'next/image'
import { useState } from 'react'

import IconCompetition from '../../../../public/vector/dashboard/admin/CompetitionDashboard.svg'
import { Button } from '../../../element/button'

export function CompetitionList() {
  const [table, setTable] = useState(false)
  const [competition, setCompetition] = useState('')
  const [daftar, setDaftar] = useState(false)
  const [title, setTitle] = useState('Kompetisi yang didaftar')
  const [handleComp, setHandleComp] = useState('')
  const [warning, setWarning] = useState(false)

  // eslint-disable-next-line react/no-unstable-nested-components
  const ChangeContent = () => {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-[15px] justify-center bg-[#22292F] border-c-02/25 border-[1px] px-[78px] py-[48px] rounded-[10px] text-white">
          <h1 className=" text-center text-[14px] leading-[30px] font-poppins font-medium">
            Apakah Anda sudah yakin untuk mendaftar pada cabang lomba ini?
            <p className="text-[9px] font-poppins font-light">
              Peringatan: satu akun hanya dapat didaftarkan pada satu cabang lomba
            </p>
          </h1>
          <div className="flex justify-center gap-[40px]">
            <div onClick={() => setWarning(!warning)}>
              <Button size="sm" type="secondary">
                Batalkan
              </Button>
            </div>
            <div
              onClick={() => [
                setTitle(competition),
                setHandleComp(competition),
                setWarning(!warning),
              ]}
            >
              <Button size="sm" type="primary">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <section>
      <div className="relative">
        <h1 className="w-[339px] font-jost font-medium bg-gradient-to-r from-c-02 to-c-01 bg-clip-text text-transparent text-[30px]">
          {title}
        </h1>
        {handleComp === 'Paper' ? (
          <div className="text-white flex justify-center">{competition}</div>
        ) : handleComp === 'Poster' ? (
          <div className="text-white flex justify-center">{competition}</div>
        ) : handleComp === 'Video' ? (
          <div className="text-white flex justify-center">{competition}</div>
        ) : handleComp === '' ? (
          <>
            {daftar ? (
              <div className="flex justify-center gap-[68px] py-[89px]">
                <button
                  type="button"
                  onClick={() => [
                    setTable(!table),
                    setCompetition('Paper'),
                    // setTitle('Paper Competition')
                    setWarning(!warning),
                  ]}
                >
                  <Image src={IconCompetition} alt="iconPaper" />
                </button>
                <button
                  type="button"
                  onClick={() => [
                    setTable(!table),
                    setCompetition('Poster'),
                    // setTitle('Poster Competition')
                    setWarning(!warning),
                  ]}
                >
                  <Image src={IconCompetition} alt="iconPoster" />
                </button>
                <button
                  type="button"
                  onClick={() => [
                    setTable(!table),
                    setCompetition('Video'),
                    // setTitle('Video Competition')
                    setWarning(!warning),
                  ]}
                >
                  <Image src={IconCompetition} alt="iconVideo" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-[26px] py-[87px] bg-[#22292F] rounded-[10px] drop-shadow-[0_0_14px_rgba(0,0,0,0.25)]">
                <div className="font-poppins font-bold text-[20px] text-white">
                  Belum ada kompetisi yang terdaftar
                </div>
                <div onClick={() => setDaftar(!competition)}>
                  <Button type="secondary" size="sm">
                    Daftar
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        {/* pop up disclaimer */}
        <div className="absolute z-40 top-1/3 right-1/3">
          {warning ? <ChangeContent /> : <div />}
        </div>
      </div>
    </section>
  )
}

export default CompetitionList
