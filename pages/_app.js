/* eslint-disable import/no-unresolved */
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/competition.css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0V1HL98QPD"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer =  window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0V1HL98QPD');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
