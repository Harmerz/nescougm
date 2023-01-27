import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { Hero } from '../../../components/pages/dashboard/admin/Hero'

export default function DashboardAdmin() {
  return (
    <DefaultLayoutDashboard title="Dashboard - NESCO UGM 2023">
      <div>
        <Hero />
        <BackToTop />
      </div>
    </DefaultLayoutDashboard>
  )
}
