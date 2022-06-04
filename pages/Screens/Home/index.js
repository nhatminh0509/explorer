import { Col, Row } from 'antd'
import Blocks from 'pages/Components/Blocks'
import Transactions from 'pages/Components/Transactions'
import './style.scss'

const Home = () => {
  
  return (<div className='home-container'>
    <Row gutter={50} className='ML25 MR25 MT100' style={{ width: '100%' }}>
      <Col className='MT20' md={24} lg={12}>
        <Transactions />
      </Col>
      <Col className='MT20' md={24} lg={12}>
        <Blocks />
      </Col>
    </Row>
  </div>)
}

export default Home