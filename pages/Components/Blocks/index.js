import { useCallback, useEffect, useState } from "react"
import './style.scss'
import Web3Services from "controller/Web3"
import BlockContainer from "Components/BlockContainer"
import Table from "Components/Table"
import moment from "moment"
import { convertWeiToBalance, ellipsisAddress, roundingNumber } from "common/function"
import { NATIVE_COIN } from "common/constants"
import { Button } from "antd"
import PrimaryButton from "Components/PrimaryButton"
import { useDispatch } from "react-redux"
import { setLastestBlock } from "controller/Redux/slice/appSlice"
import Link from "Components/Link"

const PER_PAGE = 20
const Blocks = () => {
  const [blocks, setBlocks] = useState([])
  const [startBlock, setStartBlock] = useState(null)
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   if (blocks.length > PER_PAGE) {
  //     setBlocks(state => [...state.slice(0, PER_PAGE)])
  //   }
  // }, [blocks])

  useEffect(() => {
    const subscribe = async () => {
      const web3 = Web3Services.createWeb3ProviderSocket()
      web3.eth.subscribe('newBlockHeaders').on('data', async data => {
        if (data) {
          const block = await web3.eth.getBlock(data.number)
          if (block && block.number) {
            dispatch(setLastestBlock(block))
            setBlocks(state => {
              const existed = state.findIndex(item => item.number === data.number)
              if (existed > -1) {
                return [...state]
              }
              return [block, ...state]
            })
          }
        }
      })
    }

    subscribe()
  }, [dispatch])

  useEffect(() => {
    const getLastestBlock = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const lastesBlock = await web3.eth.getBlockNumber()
      if (lastesBlock) {
        const block = await web3.eth.getBlock(lastesBlock)
        if (block) {
          setStartBlock(block)
        }
      }
    }
    getLastestBlock()
  }, [])

  useEffect(() => {
    if (blocks.length === 0) {
      dispatch(setLastestBlock(startBlock))
    }
  }, [startBlock, blocks, dispatch])

  const getBlocks = useCallback(async (page) => {
    setLoading(true)
    const web3 = Web3Services.createWeb3ProviderHTTP()
    for (let i = 0; i < PER_PAGE; i++) {
      const block = await web3.eth.getBlock(startBlock?.number - (PER_PAGE * page) - i)
      if (block && block.number) {
        setBlocks(state => [...state, block])
      }
    }
    setLoading(false)
    setPage(page => page + 1)
  }, [startBlock])

  useEffect(() => {
    if (startBlock && !loading && blocks.length < PER_PAGE) {
      getBlocks(page)
    }
  }, [startBlock, getBlocks, loading, page, blocks])

  return (
    <BlockContainer header={{
      left: () => 'Latest Blocks'
    }}>
        <Table columns={[{
            column: 5,
            dataField: 'number',
            name: 'Blocks',
            render: (item) => <Link href={`/block/${item?.number}`}>{item?.number}</Link>
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