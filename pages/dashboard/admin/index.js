import { BackToTop } from '../../../components/element/BackToTop'
import { Hero } from '../../../components/pages/dashboard/admin/Hero'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'

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
