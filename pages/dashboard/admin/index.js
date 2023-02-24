import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { DataTable, Hero } from '../../../components/pages/dashboard/admin'
import { NotFound } from '../../404'

export default function DashboardAdmin() {
  const [data, setData] = useState([])
  const router = useRouter()
  const profile = async () => {
    try {
      // eslint-disable-next-line no-underscore-dangle, no-undef
      const id = JSON.parse(localStorage.getItem('user'))?._id
      axios
        .get(`https://be-nesco-2023-p2kk.vercel.app/api/${id}/profile`)
        .then((res) => {
          setData(res.data)
        })
        .catch(() => {
          // eslint-disable-next-line no-console
          console.log('error')
          router.push('/auth/signin')
        })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    profile()
  }, [])
  if (data?.role === 'admin')
    return (
      <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
        <div className="bg-c-00 min-h-[100vh] pt-[10px] px-[5%] lg:px-[100px] lg:overflow-hidden">
          <Hero />
          <DataTable title="All Competition" />
          <BackToTop />
        </div>
      </DefaultLayoutDashboard>
    )
  return <NotFound />
}
