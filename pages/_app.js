import '../styles/globals.css'
import 'antd/dist/antd.css'
import './global.scss'
import { Provider } from 'react-redux'
import { store } from '../controller/Redux/store'
// import Container from './Layout'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    {/* <Container> */}
      <Component {...pageProps} />
    {/* </Container> */}
  </Provider>
}

export default MyApp
