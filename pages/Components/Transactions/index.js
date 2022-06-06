import { useCallback, useEffect, useRef, useState } from "react";
import "./style.scss";
import Web3Services from "controller/Web3";
import BlockContainer from "Components/BlockContainer";
import Table from "Components/Table";
import Transaction from "../Transaction";
import { Button } from "antd";
import PrimaryButton from "Components/PrimaryButton";
import { useSelector } from "react-redux";
import { uniq } from "lodash";

const PER_PAGE = 20
const LIMIT = 100
const Transactions = () => {
  const [currentBlock, setCurrentBlock] = useState(null)
  const [blockStart, setBlockStart] = useState(0)
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)
  const perPageCount = useRef(0)
  const lastestBlock = useSelector(state => state?.app?.lastestBlock)

  useEffect(() => {
    if (lastestBlock && lastestBlock.number && lastestBlock.transactions && (!currentBlock || lastestBlock.number > currentBlock.number)) {
      setCurrentBlock(lastestBlock)
      lastestBlock?.transactions?.map(item => {
        setTransactions(state => {
          const existed = state.findIndex(ele => ele?.toLowerCase() === item?.toLowerCase())
          if (existed > -1) {
            return state
          }
          return [item, ...state]
        })
      })
    }
  }, [lastestBlock, currentBlock])
  
  useEffect(() => {
    if (transactions.length > LIMIT + (page * PER_PAGE)) {
      setTransactions(state => [...state.slice(0, LIMIT)])
    }
  }, [transactions, page])

  // useEffect(() => {
  //   const subscribe = async () => {
  //     const web3 = Web3Services.createWeb3ProviderSocket()
  //     web3.eth.subscribe("pendingTransactions").on("data", async (data) => {
  //       setTransactions(state => {
  //         const existed = state.findIndex(item => item?.toLowerCase() === data?.toLowerCase())
  //         if (existed > -1) {
  //           return [...state]
  //         }
  //         return [data, ...state]
  //       })
  //     })
  //   }

  //   subscribe()
  // }, [])

  const getTransactions = useCallback(async (page) => {
    setLoading(true)
    const web3 = Web3Services.createWeb3ProviderHTTP()
    const block = await web3.eth.getBlock(blockStart - page)
    if (block && block.transactions) {
      if (perPageCount.current === -1) {
        perPageCount.current = block.transactions.length
      } else {
        perPageCount.current += block.transactions.length
      }
      const newData = block?.transactions?.map(hash => ({
        
      }))
      setTransactions(state => [...state, ...block.transactions])
      setPage(state => state + 1)
      if (perPageCount.current >= PER_PAGE) {
        perPageCount.current = -1
      }
    }
    setLoading(false)
  }, [blockStart])

  useEffect(() => {
    const getBlock = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const lastesBlock = await web3.eth.getBlockNumber()
      setBlockStart(lastesBlock)
    }

    getBlock()
  }, [])

  useEffect(() => {
    if (blockStart > 0 && perPageCount.current !== -1 && perPageCount.current < PER_PAGE && !loading) {
      getTransactions(page)
    }
  }, [page, transactions, getTransactions, blockStart, loading])

  const columns = [
    {
      column: 5,
      dataField: "txHash",
      name: "Txn Hash",
    },
    {
      column: 4,
      dataField: "from",
      name: "From",
    },
    {
      column: 4,
      dataField: "to",
      name: "To",
    },
    {
      column: 6,
      dataField: "timestamp",
      name: "Date / Time",
    },
    {
      column: 5,
      dataField: "value",
      name: "Value total",
    },
  ];

  return (
    <BlockContainer
      className="H450"
      header={{
        left: () => "Latest Transactions",
      }}
    >
      <Table
        columns={columns}
        datasource={transactions}
        renderItem={(item, index) => (
          <Transaction key={item} hash={item} index={index} />
        )}
        indexKey='hash'
        maxHeight="370px"
        loadMoreButton={() => <PrimaryButton loading={loading} onClick={() => getTransactions(page)} >Load more</PrimaryButton>}
      />
    </BlockContainer>
  );
};

export default Transactions;
