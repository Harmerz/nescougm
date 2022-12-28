import { BackToTop } from '../components/element/BackToTop';
import { DefaultLayout } from '../components/layout';
import { Footer } from '../components/layout';


export default function Home() {
  return (
    <DefaultLayout title="Homepage - NESCO UGM 2023">
    <div className='justify-center bg-gradient-to-br from-bg-00 to-bg-01 h-[100vh] flex items-center'>
      <div className='text-7xl font-bold uppercase text-white'>Homepage</div>
      <BackToTop />
    </div>
      
    <footer>
        <Footer/>
      </footer>
    </DefaultLayout>
    
  )
}
