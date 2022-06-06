import { Layout } from "antd"
import Header from "./Header"
import './style.scss'

const Container = (props) => {
  return (
    <Layout className='layout-container'>
      <Header />
      <div className="base-container">
        {props.children}
      </div>
    </Layout>
  )
}

export default Container