import Image from 'next/image'
import { useState } from 'react'

export function CompetitionList() {
  const [competition, setCompetition] = useState('')
  const [warning, setWarning] = useState(false)
  const [title, setTitle] = useState('Kompetisi yang didaftar')

  return (
    <section>
      <div className="relative">
        <h1 className="w-[339px] font-jost font-medium bg-gradient-to-r from-c-02 to-c-01 bg-clip-text text-transparent text-[30px]">
          {title}
        </h1>
        {competition !== '' ? (
          <div>{competition}</div>
        ) : (
          <div className="flex justify-center gap-[68px] py-[89px]">
            <button
              type="button"
              onClick={() => [
                setCompetition('Paper'),
                setTitle('Paper Competition'),
                setWarning(!warning),
              ]}
            >
              <Image
                src="/vector/dashboard/admin/CompetitionDashboard.svg"
                alt="iconPaper"
                width={200}
                height={200}
              />
            </button>
            <button
              type="button"
              onClick={() => [
                setCompetition('Poster'),
                setTitle('Poster Competition'),
                setWarning(!warning),
              ]}
            >
              <Image
                src="/vector/dashboard/admin/CompetitionDashboard.svg"
                alt="iconPoster"
                width={200}
                height={200}
              />
            </button>
            <button
              type="button"
              onClick={() => [
                setCompetition('Video'),
                setTitle('Video Competition'),
                setWarning(!warning),
              ]}
            >
              <Image
                src="/vector/dashboard/admin/CompetitionDashboard.svg"
                alt="iconVideo"
                width={200}
                height={200}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default CompetitionList
