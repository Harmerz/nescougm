import Head from 'next/head'

import NavbarDashboard from './NavbarDashboard'

export function DefaultLayout({ children, title = 'NESCO UGM' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700;800&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <header>
        <NavbarDashboard />
      </header>
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
