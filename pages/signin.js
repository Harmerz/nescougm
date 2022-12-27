import { BackToTop } from '../components/element/backtotop';
import { DefaultLayout } from '../components/layout';

export default function SignIn() {
  return (
    <DefaultLayout title="Sign In - NESCO UGM 2023">
    <div className='justify-center bg-gradient-to-br from-bg-00 to-bg-01 h-[100vh] flex items-center'>
      <div className='text-7xl font-bold uppercase text-white'>SignIn</div>
      <BackToTop />
    </div>
      
    </DefaultLayout>
    
  )
}
