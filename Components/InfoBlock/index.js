import { Col, Row } from "antd"
import './style.scss'

const InfoBlock = ({ className = '', highlight = false, title = '', content = '', ...rest }) => {
  return (
    <Row style={{ width: '100%' }} className={`t-info-block-container ${highlight ? 'highlight' : ''} ${className}`} {...rest}>
      <Col span={9} className='t-info-column'>{typeof title === 'string' ? title : title()}</Col>
      <Col span={13} className='t-info-column'>{typeof content === 'string' ? content : content()}</Col>
    </Row>
  )
}

export default InfoBlock