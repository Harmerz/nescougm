import Head from 'next/head'

import { NavbarDashboard } from './NavbarDashboard'

export function DefaultLayout({ children, title = 'NESCO UGM' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <NavbarDashboard />
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
