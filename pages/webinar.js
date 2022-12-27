import { BackToTop } from '../components/element/backtotop';
import { DefaultLayout } from '../components/layout';

export default function Webinar() {
  return (
    <DefaultLayout title="Webinar - NESCO UGM 2023">
    <div className='justify-center bg-gradient-to-br from-bg-00 to-bg-01 h-[100vh] flex items-center'>
      <div className='text-7xl font-bold uppercase text-white'>Webinar</div>
      <BackToTop />
    </div>
      
    </DefaultLayout>
    
  )
}
