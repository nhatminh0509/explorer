import { useEffect, useState } from "react"
import './style.scss'
import Web3Services from "controller/Web3"
import BlockContainer from "Components/BlockContainer"
import Table from "Components/Table"
import moment from "moment"
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from "common/function"
import Link from "Components/Link"
import { NATIVE_COIN } from "common/constants"
const PER_PAGE = 50
const Blocks = () => {
  const [blocks, setBlocks] = useState([])
  const [currentBlock, setCurrentBlock] = useState({})

  useEffect(() => {
    if (blocks.length > PER_PAGE) {
      setBlocks(state => [...state.slice(0, PER_PAGE)])
    }
  }, [blocks])

  useEffect(() => {
    const subscribe = async () => {
      const web3 = Web3Services.createWeb3ProviderSocket()
      web3.eth.subscribe('newBlockHeaders').on('data', async data => {
        const block = await web3.eth.getBlock(data.number)
        setCurrentBlock(block)
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
    const getBlocks = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const lastesBlock = await web3.eth.getBlockNumber()
      const result = []
      for (let i = 0; i < PER_PAGE; i++) {
        const block = await web3.eth.getBlock(lastesBlock - i)
        setBlocks(state => [...state, block])
      }
    }
    getBlocks()
  }, [])

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