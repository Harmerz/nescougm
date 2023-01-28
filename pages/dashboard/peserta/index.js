import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { CompetitionList, Hero } from '../../../components/pages/dashboard/peserta'

export default function DashboardAdmin() {
  return (
    <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
      <div>
        <Hero />
        <BackToTop />
        <CompetitionList />
      </div>
    </DefaultLayoutDashboard>
  )
}
