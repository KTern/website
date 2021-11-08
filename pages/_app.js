import '../styles/globals.css'

import { Authorization ,getToken} from '../auth';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async () => {
  let token = await Authorization();
  return { token: token }
}
export default MyApp
