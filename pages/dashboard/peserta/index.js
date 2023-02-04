import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { CompetitionPeserta, Hero } from '../../../components/pages/dashboard/peserta'

export default function DashboardAdmin() {
  return (
    <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
      <div className="bg-bg-03 min-h-[100vh] pt-[150px] px-[5%] lg:px-[100px] lg:overflow-hidden">
        <Hero />
        <BackToTop />
        <CompetitionPeserta />
      </div>
    </DefaultLayoutDashboard>
  )
}
