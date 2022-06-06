import { Col, Row } from 'antd'
import { NATIVE_COIN } from 'common/constants'
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from 'common/function'
import Loading from 'Components/Loading'
import Web3Services from 'controller/Web3'
import moment from 'moment'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import './style.scss'

const Transaction = ({ hash = '', index }) => {
  const [loading, setLoading] = useState(false)
  const [transaction, setTransaction] = useState(null)
  const [block, setBlock] = useState(null)
  const [date, setDate] = useState('')

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const resTransaction = await web3.eth.getTransaction(hash)
      setTransaction(resTransaction)
      setLoading(false)
    }
    if (hash !== '' && !transaction) {
      getData()
    }
  }, [hash, transaction])

  useEffect(() => {
    const getData = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const resBlock = await web3.eth.getBlock(transaction?.blockNumber)
      setBlock(resBlock)
    }
    if (transaction && transaction?.blockNumber) {
      getData()
    }
  }, [transaction])

  useEffect(() => {
    const interval = setInterval(() => {
      if (block && block?.timestamp) {
        setDate(moment.unix(block?.timestamp).fromNow())
      } else {
        setDate('...')
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [block])

  return (
    <>
      <Col span={5} className='t-item-column'><Link href={`/tx/${hash}`}>{ellipsisAddress(hash, 4, 4)}</Link></Col>
      <Col span={4} className='t-item-column'>{loading ? '...' : <Link href={`/address/${transaction?.from}`}>{ellipsisAddress(transaction?.from || '', 4, 4)}</Link>}</Col>
      <Col span={4} className='t-item-column'>{loading ? '...' : <Link href={`/address/${transaction?.to}`}>{ellipsisAddress(transaction?.to || '', 4, 4)}</Link>}</Col>
      <Col span={6} className='t-item-column'>{loading || !block ? '...' : date}</Col>
      <Col span={5} className='t-item-column'>{loading ? '...' : roundingNumber(convertWeiToBalance(transaction?.value || '0'), 6)} {NATIVE_COIN}</Col>
    </>
  )
}

export default Transaction