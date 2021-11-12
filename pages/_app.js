/* eslint-disable @next/next/no-sync-scripts */
require('../styles/globals.css') 
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Link from "next/link"
function MyApp ({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <link rel="shortcut icon"  href="https://ktern.com/img/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      </>
    )
}

export default MyApp
