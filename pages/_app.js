import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Authorization } from "../auth"
import { useEffect } from 'react';
import { useRouter } from 'next/router'
var token=""
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

  return <Component {...pageProps} />
}
// export default appWithTranslation(MyApp);
// MyApp.getInitialProps = async () => {
//   let token = await Authorization();
//   return { token: token }
// }
export default MyApp;
