import Head from 'next/head'

import { NavbarDashboard } from './NavbarDashboard'

export function DefaultLayout({ children, title = 'NESCO UGM' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <header>
        <NavbarDashboard />
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
