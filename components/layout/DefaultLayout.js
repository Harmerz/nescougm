import { lazy, Suspense } from 'react'

const Head = lazy(() => import('next/head'))
const Navbar = lazy(() => import('./Navbar'))

export function DefaultLayout({ children, title = 'NESCO UGM' }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </Suspense>
  )
}

export default DefaultLayout
