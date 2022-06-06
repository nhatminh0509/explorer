import { Col, Row } from 'antd'
import './style.scss'

const columnDefault = [{
  name: '',
  dataField: '',
  column: '',
  render: null
}]

const Table = ({ columns = columnDefault, datasource = [], maxHeight = '100%', indexKey = '', renderItem, loadMoreButton }) => {
  return (
    <div className='t-table-container' style={{ maxHeight }}>
      <Row className='t-header-table'>
        {
          columns.map((item, index) => (
            <Col span={item.column} key={`${item.dataField}${index}`} className='t-title'>{item.name}</Col>
          ))
        }
      </Row>
      <Row className='t-body-table'>
        {
          datasource.map((item, index) => (
            renderItem ? <Row key={typeof item === 'object' ? item[indexKey] : item} style={{ width: '100%' }} className={index === 0 ? 't-items t-new-items' : (index % 2 === 0 ? 't-items highlight' : 't-items')}>{renderItem(item, index)}</Row> : <DataItem item={item} key={item[indexKey]} index={index} columns={columns}/>
          ))
        }
        {loadMoreButton && <Row style={{width: '100%', display: 'flex', justifyContent: 'center', padding: '0 24px' }}  className='t-items'>{loadMoreButton()}</Row>}
      </Row>
    </div>
  )
}

const DataItem = ({ columns = a, item, index }) => {
    return <Row style={{ width: '100%' }} className={index === 0 ? 't-items t-new-items' : (index % 2 === 0 ? 't-items highlight' : 't-items')}>
        {
          columns.map((i, index) => (
            <Col key={index} span={i.column} className='t-item-column'>{i.render ? i.render(item, index) : item[i.dataField]}</Col>
          ))
        }
    </Row>
}

export default Table