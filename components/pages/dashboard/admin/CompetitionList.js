import Image from 'next/image'
import { useState } from 'react'

import { DataTable } from './CompetitionDataTable'

export function CompetitionList() {
  const [competition, setCompetition] = useState('')
  const [warning, setWarning] = useState(false)

  return (
    <section>
      <div className="relative">
        <h1 className="mt-[50px] w-[339px] font-jost font-medium bg-gradient-to-r from-c-02 to-c-01 bg-clip-text text-transparent text-[30px]">
          {competition !== '' ? '' : 'Kompetisi yang didaftar'}
        </h1>
        {competition !== '' ? (
          <div>
            <DataTable title={competition} onKembali={() => setCompetition('')} />
          </div>
        ) : (
          <div className="flex justify-center gap-[68px] py-[89px]">
            <button type="button" onClick={() => [setCompetition('Paper'), setWarning(!warning)]}>
              <Image
                src="/vector/dashboard/admin/CompetitionDashboard.svg"
                alt="iconPaper"
                width={200}
                height={200}
              />
            </button>
            <button type="button" onClick={() => [setCompetition('Poster'), setWarning(!warning)]}>
              <Image
                src="/vector/dashboard/admin/CompetitionDashboard.svg"
                alt="iconPoster"
                width={200}
                height={200}
              />
            </button>
            <button type="button" onClick={() => [setCompetition('Video'), setWarning(!warning)]}>
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
