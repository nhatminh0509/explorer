import { useCallback, useEffect, useState } from "react";
import "./style.scss";
import Web3Services from "controller/Web3";
import BlockContainer from "Components/BlockContainer";
import Table from "Components/Table";
import Transaction from "../Transaction";

const PER_PAGE = 50
const Transactions = () => {
  const [blockStart, setBlockStart] = useState(0)
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(0)


  useEffect(() => {
    if (transactions.length > PER_PAGE) {
      setTransactions(state => [...state.slice(0, PER_PAGE)])
    }
  }, [transactions])

  useEffect(() => {
    const subscribe = async () => {
      const web3 = Web3Services.createWeb3ProviderSocket()
      web3.eth.subscribe("pendingTransactions").on("data", async (data) => {
        console.log(data)
        setTransactions(state => {
          const existed = state.findIndex(item => item?.toLowerCase() === data?.toLowerCase())
          if (existed > -1) {
            return [...state]
          }
          return [data, ...state]
        })
      })
    }

    subscribe()
  }, [])

  const getTransactions = useCallback(async (page) => {
    setLoading(true)
    const web3 = Web3Services.createWeb3ProviderHTTP()
    const block = await web3.eth.getBlock(blockStart - page)
    setTransactions(state => [...state, ...block?.transactions])
    setPage(state => state + 1)
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
    if (blockStart > 0 && transactions.length < PER_PAGE && !loading) {
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
        maxHeight="370px"
      />
    </BlockContainer>
  );
};

export default Transactions;
