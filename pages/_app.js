import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Authorization } from "../auth"

var token=""
function MyApp ({ Component, pageProps }) {
  
  
  return <Component {...pageProps} />
}
// export default appWithTranslation(MyApp);
// MyApp.getInitialProps = async () => {
//   let token = await Authorization();
//   return { token: token }
// }
export default MyApp;
