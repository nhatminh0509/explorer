import { Layout } from "antd"
import './style.scss'

const Container = (props) => {
  return (
    <Layout className='layout-container'>
      {props.children}
    </Layout>
  )
}

export default Container