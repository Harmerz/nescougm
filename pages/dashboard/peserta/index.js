/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import {
  CompetitionList,
  CompetitionPeserta,
  Hero,
} from '../../../components/pages/dashboard/peserta'

export default function DashboardAdmin() {
  const [data, setData] = useState([])
  const router = useRouter()
  const profile = () => {
    const id = JSON.parse(localStorage.getItem('user'))?._id
    axios
      .get(`http://localhost:8000/api/${id}/profile`)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        console.log('error')
        // router.push('/auth/signin')
      })
  }
  useEffect(() => {
    profile()
  }, [])
  if (data?.verified) {
    if (
      data?.teams?.[0]?.selectedCompetition === '-' ||
      data?.teams?.[0]?.selectedCompetition === undefined
    ) {
      return (
        <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
          <div className="bg-bg-03 min-h-[100vh] pt-[150px] px-[5%] lg:px-[100px] lg:overflow-hidden">
            <Hero nama={data?.name} email={data?.email} />
            <BackToTop />
            <CompetitionList />
          </div>
        </DefaultLayoutDashboard>
      )
    }
    return (
      <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
        <div className="bg-bg-03 min-h-[100vh] pt-[150px] px-[5%] lg:px-[100px] lg:overflow-hidden">
          <Hero nama={data?.name} email={data?.email} />
          <BackToTop />
          <CompetitionPeserta data={data?.teams?.[0]} />
        </div>
      </DefaultLayoutDashboard>
    )
  }
  return null
}
