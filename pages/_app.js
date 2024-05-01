/* eslint-disable @next/next/no-sync-scripts */
require('../styles/globals.css') 
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import Head from "next/head";
import Link from "next/link"
import TagManager from "react-gtm-module"
import { clarity } from 'react-microsoft-clarity';

import { SocialProfileJsonLd } from "next-seo";
import {page_event} from "../component/page_event"
const tagManagerArgs = {
  gtmId: "GTM-MHZVHTK",
}
import { StoreProvider } from '../component/modal';
function MyApp ({ Component, pageProps }) {
  const router = useRouter()
  clarity.init('kuw9ejkqcg');
// if(process.browser)
// console.log(document)
  useEffect(() => {
    
    TagManager.initialize(tagManagerArgs)
    const handleRouteChange = url => {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
      })
     page_event({event_name:"Navigated To",page_destination:url})
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
      
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
    
    
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHZVHTK"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
{/* <StoreProvider> */}
      <Component {...pageProps} />
      {/* </StoreProvider> */}
      </>
    )
}

export default MyApp
