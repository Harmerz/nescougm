import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { EditComponent } from '../../../components/pages/dashboard/peserta'

export function Edit() {
  const router = useRouter()
  const [data, setData] = useState([])
  const Profile = () => {
    // eslint-disable-next-line no-underscore-dangle, no-undef
    const id = JSON.parse(localStorage.getItem('user'))?._id
    axios
      .get(`http://localhost:8000/api/${id}/profile`)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log('error')
        router.push('/auth/signin')
      })
  }
  useEffect(() => {
    Profile()
  }, [])
  if (!data?.teams?.[0]?.savePermanent)
    return (
      <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
        <div className="bg-bg-03 min-h-[100vh] pt-[150px] px-[5%] lg:px-[100px] lg:overflow-hidden">
          <BackToTop />
          <EditComponent />
        </div>
      </DefaultLayoutDashboard>
    )
}

export default Edit
