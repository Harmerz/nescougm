import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { CompetitionList, Hero } from '../../../components/pages/dashboard/admin'

export default function DashboardAdmin() {
  return (
    <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
      <div className="bg-c-00 min-h-[100vh] pt-[150px] pb-[100vh] lg:py-[150px] px-[5%] lg:px-[100px] lg:overflow-hidden">
        <Hero />
        <CompetitionList />
        <BackToTop />
      </div>
    </DefaultLayoutDashboard>
  )
}
