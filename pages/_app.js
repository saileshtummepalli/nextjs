
import Footer from 'components/Layout/Footer/footer'
import Navbar from 'components/Layout/Navbar/navbar'
import { wrapper } from '../src/store/index'
    import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  
  return (
    <div>
    <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </div>)
}

export default wrapper.withRedux(MyApp)
