import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Authorization } from "../auth"
var token=""
function MyApp ({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}
Authorization();
// export default appWithTranslation(MyApp);
export default MyApp;
