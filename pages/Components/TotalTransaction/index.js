import { numberWithCommas } from 'common/function'
import Web3Services from 'controller/Web3'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './style.scss'

const TotalTransaction = () => {
  const [avgTransaction, setAvgTransaction] = useState(0)
  const lastestBlock = useSelector(state => state.app.lastestBlock)
  
  useEffect(() => {
    const getAvgTransaction = async () => {
      const web3 = Web3Services.createWeb3ProviderHTTP()
      let total = 0
      let avg = 0
      if (lastestBlock?.number > 200) {
        setAvgTransaction((lastestBlock.transactions?.length || 0))
        for (let i = 0; i < 110; i++) {
          const block = await web3.eth.getBlock(lastestBlock?.number - i)
          total += block.transactions.length
        }
        for (let i = 0; i < 10; i++) {
          const block = await web3.eth.getBlock(i + 10)
          total += block.transactions.length
        }
        total += lastestBlock?.transactions?.length
        avg = total / 121
      } else {
        avg = (lastestBlock.transactions?.length || 0)
      }
      setAvgTransaction(avg)
    }
    if (lastestBlock && lastestBlock.number && avgTransaction === 0) {
      getAvgTransaction()
    }
  }, [lastestBlock, avgTransaction])

  return (<div className="total-transaction-container">
    ≈ {numberWithCommas((avgTransaction || 0) * (lastestBlock?.number || 0))}
  </div>)
}

export default TotalTransaction