import { Col, Row } from 'antd'
import { NATIVE_COIN } from 'common/constants'
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from 'common/function'
import Loading from 'Components/Loading'
import Web3Services from 'controller/Web3'
import moment from 'moment'
import Link from 'next/link'
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
    <>
      <Col span={5} className='t-item-column'><Link href={`/tx/${hash}`}>{ellipsisAddress(hash, 4, 4)}</Link></Col>
      <Col span={4} className='t-item-column'>{loading ? '...' : <Link href={`/address/${transaction?.from}`}>{ellipsisAddress(transaction?.from || '', 4, 4)}</Link>}</Col>
      <Col span={4} className='t-item-column'>{loading ? '...' : <Link href={`/address/${transaction?.to}`}>{ellipsisAddress(transaction?.to || '', 4, 4)}</Link>}</Col>
      <Col span={6} className='t-item-column'>{loading || !block ? '...' : moment.unix(block?.timestamp).fromNow()}</Col>
      <Col span={5} className='t-item-column'>{loading ? '...' : roundingNumber(convertWeiToBalance(transaction?.value || '0'), 6)} {NATIVE_COIN}</Col>
    </>
  )
}

export default Transaction