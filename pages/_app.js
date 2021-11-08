import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async () => {
 
  return {props:{ token: token} }
}
export default MyApp
