/* eslint-disable @next/next/no-sync-scripts */
require('../styles/globals.css') 
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Link from "next/link"


import { SocialProfileJsonLd } from "next-seo";
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
        {/* Sharethis */}
        <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=60fa43c683fc3c00121c8da1&product=inline-share-buttons' async='async'></script>
        {/*ShareThis  */}
        <link rel="shortcut icon"  href="https://storage.googleapis.com/ktern-public-files/website/icons/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b1320" />
        {/* <!-- this sets logo in Apple smatphones. --> */}
<link rel="apple-touch-icon" href="/assets/kternLogo.png" />
{/* <!-- this sets the color of url bar in Apple smatphones --> */}
        <meta name="apple-mobile-web-app-status-bar" content="#0b1320" />
                  <script type="text/javascript" id="zsiqchat"  dangerouslySetInnerHTML={{
            __html:`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "f440e91b3668705fa583df5dbc6e74336a479d5c9175a86e330df6b09d955c51c217306de45b754907f8ee064f96a38d", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}}/>

      </Head>
      <Component {...pageProps} />
      </>
    )
}

export default MyApp
