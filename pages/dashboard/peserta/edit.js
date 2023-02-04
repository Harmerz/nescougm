import { BackToTop } from '../../../components/element/BackToTop'
import DefaultLayoutDashboard from '../../../components/layoutDashboard/DefaultLayoutDashboard'
import { EditComponent } from '../../../components/pages/dashboard/peserta'

export function Edit() {
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
