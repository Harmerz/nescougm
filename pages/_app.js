/* eslint-disable import/no-unresolved */
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/competition.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Add the favicon */}
      {/* Note that the path doesn't include "public" */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
