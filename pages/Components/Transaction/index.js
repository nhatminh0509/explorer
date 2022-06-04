import { Col, Row } from 'antd'
import { NATIVE_COIN } from 'common/constants'
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from 'common/function'
import Link from 'Components/Link'
import Web3Services from 'controller/Web3'
import moment from 'moment'
import { useEffect, useState } from 'react'
import './style.scss'

const Transaction = ({ hash = '', index }) => {
  const [loading, setLoading] = useState(false)
  const [transaction, setTransaction] = useState(null)
  const [block, setBlock] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const resTransaction = await web3.eth.getTransaction(hash)
      setTransaction(resTransaction)
      setLoading(false)
    }
    if (hash !== '') {
      getData()
    }
  }, [hash])

  useEffect(() => {
    const getData = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const resBlock = await web3.eth.getBlock(transaction?.blockNumber)
      setBlock(resBlock)
    }
    if (transaction && transaction?.blockNumber) {
      getData()
    }
  }, [transaction, index])

  return (
    <Row style={{ width: '100%' }} className={index === 0 ? 't-items t-new-items' : (index % 2 === 0 ? 't-items highlight' : 't-items')}>
      <Col span={5} className='t-item-column'><Link href={`/tx/${hash}`}>{ellipsisAddress(hash, 4, 4)}</Link></Col>
      <Col span={4} className='t-item-column'>{loading ? 'Loading...' : <Link>{ellipsisAddress(transaction?.from || '', 4, 4)}</Link>}</Col>
      <Col span={4} className='t-item-column'>{loading ? 'Loading...' : <Link>{ellipsisAddress(transaction?.to || '', 4, 4)}</Link>}</Col>
      <Col span={6} className='t-item-column'>{loading || !block ? 'Loading...' : moment.unix(block.timestamp).fromNow()}</Col>
      <Col span={5} className='t-item-column'>{loading ? 'Loading...' : roundingNumber(convertWeiToBalance(transaction?.value || '0'), 6)} {NATIVE_COIN}</Col>
    </Row>
  )
}

export default Transaction