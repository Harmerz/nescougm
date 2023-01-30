import Head from 'next/head'

import { NavbarAuth } from './NavbarAuth'

export function DefaultLayoutAuth({ children, title = 'NESCO UGM' }) {
  return (
    <div className="bg-c-00 relative overflow-hidden">
      <Head>
        <title>{title}</title>
      </Head>

      <header className="flex">
        <NavbarAuth />
      </header>
      <main>
        <div className="absolute z-0 top-[-100px] left-[-63px] opacity-[.14] blur-[90px] bg-c-01 w-[288px] h-[288px] rounded-full" />
        <div className="absolute z-0 bottom-[-87px] right-[-101px] opacity-[.14] blur-[90px] bg-c-01 w-[281px] h-[281px] rounded-full" />
        {children}
      </main>
    </div>
  )
}

export default DefaultLayoutAuth
