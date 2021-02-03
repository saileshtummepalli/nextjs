
import { wrapper } from '../src/store/index'
    import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
