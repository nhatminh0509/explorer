import { useCallback, useEffect, useState } from "react"
import './style.scss'
import Web3Services from "controller/Web3"
import BlockContainer from "Components/BlockContainer"
import Table from "Components/Table"
import moment from "moment"
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from "common/function"
import { NATIVE_COIN } from "common/constants"
import Link from "next/link"
import { Button } from "antd"
import PrimaryButton from "Components/PrimaryButton"
const PER_PAGE = 20
const Blocks = () => {
  const [blocks, setBlocks] = useState([])
  const [lastestBlock, setLastestBlock] = useState(null)
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  // useEffect(() => {
  //   if (blocks.length > PER_PAGE) {
  //     setBlocks(state => [...state.slice(0, PER_PAGE)])
  //   }
  // }, [blocks])

  useEffect(() => {
    const subscribe = async () => {
      const web3 = Web3Services.createWeb3ProviderSocket()
      web3.eth.subscribe('newBlockHeaders').on('data', async data => {
        const block = await web3.eth.getBlock(data.number)
        setBlocks(state => {
          const existed = state.findIndex(item => item.number === data.number)
          if (existed > -1) {
            return [...state]
          }
          return [block, ...state]
        })
      })
    }

    subscribe()
  }, [])

  useEffect(() => {
    const getLastestBlock = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const lastesBlock = await web3.eth.getBlockNumber()
      setLastestBlock(lastesBlock)
    }
    getLastestBlock()
  }, [])

  const getBlocks = useCallback(async (page) => {
    setLoading(true)
    const web3 = Web3Services.createWeb3ProviderHTTP()
    for (let i = 0; i < PER_PAGE; i++) {
      const block = await web3.eth.getBlock(lastestBlock - (PER_PAGE * page) - i)
      setBlocks(state => [...state, block])
    }
    setLoading(false)
    setPage(page => page + 1)
  }, [lastestBlock])

  useEffect(() => {
    if (lastestBlock && !loading && blocks.length < PER_PAGE) {
      getBlocks(page)
    }
  }, [lastestBlock, getBlocks, loading, page, blocks])

  return (
    <BlockContainer header={{
      left: () => 'Latest Blocks'
    }}>
        <Table columns={[{
            column: 5,
            dataField: 'number',
            name: 'Blocks'
          },
          {
            column: 5,
            dataField: 'hash',
            name: 'Hash',
            render: item => <Link href='/abc'>{ellipsisAddress(item.hash, 4, 4)}</Link>
          }, {
            column: 5,
            dataField: 'timestamp',
            name: 'Date / Time',
            render: (item, index) => (<div>{moment.unix(item.timestamp).fromNow()}</div>)
          },{
            column: 4,
            dataField: 'transactions',
            name: 'Txns',
            render: (item, index) => <div>{item?.transactions?.length}</div>
          },{
            column: 5,
            dataField: 'baseFeePerGas',
            name: 'Fee',
            render: (item) => <div>{roundingNumber(convertWeiToBalance(item.baseFeePerGas), 6)} {NATIVE_COIN}</div>
          }]}
          datasource={blocks} 
          maxHeight='370px' 
          indexKey="number"
          loadMoreButton={() => <PrimaryButton loading={loading} onClick={() => getBlocks(page)}>Load more</PrimaryButton>}
        />
        {/* {
          blocks.map(item => (
            <p key={item.number} className={currentBlock?.number === item?.number ? 'newItem': ''} style={{ color: 'white' }}>{item.number}</p>
          ))
        } */}
    </BlockContainer>
  )
}

export default Blocks