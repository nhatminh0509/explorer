import { Col, Row } from "antd";
import { NATIVE_COIN } from "common/constants";
import { convertWeiToBalance, numberWithCommas } from "common/function";
import BlockContainer from "Components/BlockContainer";
import InfoBlock from "Components/InfoBlock";
import Link from "Components/Link";
import Loading from "Components/Loading";
import LogInfo from "Components/LogInfo";
import Web3Services from "controller/Web3";
import moment from "moment";
import { useEffect, useState } from "react";
import "./style.scss";
const TransactionDetail = ({ hash }) => {
  const [block, setBlock] = useState(null);
  const [transaction, setTransaction] = useState(null);
  const [transactionReceipt, setTransactionReceipt] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const web3 = Web3Services.createWeb3ProviderHTTP();
      const res = await Promise.all([
        web3.eth.getTransaction(hash),
        web3.eth.getTransactionReceipt(hash),
      ]);
      if (res) {
        const block = await web3.eth.getBlock(res[0]?.blockNumber)
        setBlock(block)
        setTransaction(res[0]);
        setTransactionReceipt(res[1]);
        console.log(res, block);
      }
      setLoading(false)
    };

    if (hash) {
      getData();
    }
  }, [hash]);

  return (
    <div className="transaction-detail-container">
      <Row
        gutter={50}
        justify="center"
        className="ML25 MR25"
        style={{ width: "100%" }}
      >
        <Col xs={22} md={16}>
          <BlockContainer
            header={{
              left: () => "Transaction Detail",
            }}
            tabs={transactionReceipt && transactionReceipt?.logs?.length > 0 ? ["Detail", "Info", "Logs"] : ["Detail", "Info"]}
            className='MT30 MB30'
            contents={[
              () => <DetailTransaction loading={loading} transaction={transaction} transactionReceipt={transactionReceipt} block={block} />,
              () => <TransactionInfo loading={loading} transaction={transaction} />,
              () => <TransactionLog loading={loading} transactionReceipt={transactionReceipt} />
            ]}
          />
        </Col>
      </Row>
    </div>
  )
}

const DetailTransaction = ({ loading, transaction, transactionReceipt, block }) => {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <InfoBlock title="Transaction Hash" content={`${transaction?.hash}`} />
          <InfoBlock highlight title="Block Chain" content={`Wraptap`} />
          <InfoBlock title="Subnet" content={`Wraptap`} />
          <InfoBlock highlight title="Status" content={`${transactionReceipt.status ? 'Success' : 'Pending'}`} />
          <InfoBlock title="Method" content={`---`} />
          <InfoBlock highlight title="Block" content={() => <Link href={`/block/${transaction?.blockNumber}`}>{transaction?.blockNumber}</Link>} />
          <InfoBlock title='Timestamp' content={`${moment.unix(block?.timestamp).fromNow()} (${moment.unix(block?.timestamp).format('MMM DD, YYYY HH:mm:ss')})`} />
          <InfoBlock highlight title="Value" content={`${convertWeiToBalance(transaction?.value || 0)} ${NATIVE_COIN}`} />
          <InfoBlock title='Gas Limit' content={`${numberWithCommas(transaction?.gas)}`} />
          <InfoBlock highlight title="Gas Use By Transaction" content={`${numberWithCommas(transaction?.gas)} ${NATIVE_COIN}`} />
          <InfoBlock title='Base Fee Per Gas' content={`${numberWithCommas(convertWeiToBalance(block?.baseFeePerGas))}`} />
          <InfoBlock highlight title="Transaction Fees" content={`${numberWithCommas(convertWeiToBalance(transaction?.gasPrice))} ${NATIVE_COIN}`} />
          <InfoBlock title='Max Fee Per Gas' content={`${numberWithCommas(convertWeiToBalance(transaction?.maxFeePerGas))} ${NATIVE_COIN}`} />
          <InfoBlock highlight title="Max Priority Fee Per Gas" content={`${numberWithCommas(convertWeiToBalance(transaction?.maxPriorityFeePerGas))} ${NATIVE_COIN}`} />
          <InfoBlock title='Transaction Savings' content={`---`} />
          <InfoBlock highlight title="Gas Price" content={`${numberWithCommas(convertWeiToBalance(transaction?.maxPriorityFeePerGas))} ${NATIVE_COIN}`} />
          <InfoBlock title='Transaction Types' content={`---`} />
          <InfoBlock highlight title="Nonce ( Position )" content={`${transaction?.nonce}`} />
          <InfoBlock title='Input Data' content={`${transaction?.input}`} />
        </>
      )}
    </>
  )
}

const TransactionInfo = ({ transaction, loading }) => {
  return (<>
    {loading ? <Loading /> :<>
    <InfoBlock title="From" content={() => <Link href={`/address/${transaction?.from}`}>{transaction?.from}</Link>} />
    <InfoBlock highlight title="To" content={() => <Link href={`/address/${transaction?.to}`}>{transaction?.to}</Link>} />
    </>}
  </>)
}

const TransactionLog = ({ loading, transactionReceipt }) => {
  return (<>
    {loading ? <Loading />  : <>
      {transactionReceipt?.logs && transactionReceipt?.logs?.map((log, index) => <LogInfo key={index} index={index} log={log} />)}
    </>}
  </>)
}

export const getServerSideProps = async ({ query }) => {
  return {
    props: { hash: query.hash }
  }
}

export default TransactionDetail
