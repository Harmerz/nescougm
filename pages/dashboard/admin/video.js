import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { DataTable, Hero } from '../../../components/pages/dashboard/admin'

export function DashboardAdminVideo() {
  return (
    <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
      <div className="bg-c-00 min-h-[100vh] pt-[10px] px-[5%] lg:px-[100px] lg:overflow-hidden">
        <Hero />
        <DataTable title="Video" />
        <BackToTop />
      </div>
    </DefaultLayoutDashboard>
  )
}

export default DashboardAdminVideo
