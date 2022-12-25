import Head from "next/head";
import { Navbar } from "./Navbar";

export function DefaultLayout({ children, title = "NESCO UGM" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      
    </>
  );
}
