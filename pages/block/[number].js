import { Col, Row } from "antd";
import { numberWithCommas } from "common/function";
import BlockContainer from "Components/BlockContainer";
import InfoBlock from "Components/InfoBlock";
import Link from "Components/Link";
import Loading from "Components/Loading";
import Web3Services from "controller/Web3";
import moment from "moment";
import { useEffect, useState } from "react";
import './style.scss'
const BlockDetail = ({ number }) => {

  const [block, setBlock] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getBlock = async () => {
      setLoading(true)
      const web3 = Web3Services.createWeb3ProviderHTTP()
      const res = await web3.eth.getBlock(number)
      if (res) {
        setBlock(res)
      } else {
        console.log('Can not get block')
      }
      setLoading(false)
    }

    if (number) {
      getBlock()
    }
  }, [number])

  return (
    <div className='block-detail-container'>
      <Row gutter={50} justify='center' className="ML25 MR25" style={{ width: "100%" }}>
        <Col xs={22} md={16}>
          <BlockContainer
            header={{
              left: () => "Block Detail"
            }}
          >
            {loading ? <Loading /> : <>
              <InfoBlock title='Block Height' content={`${block?.number}`} />
              <InfoBlock title='Timestamp' highlight content={`${moment.unix(block?.timestamp).fromNow()} (${moment.unix(block?.timestamp).format('MMM DD, YYYY HH:mm:ss')})`} />
              <InfoBlock title='Transaction' content={`${block?.transactions?.length}`} />
              <InfoBlock title='Fees' highlight content={``} />
              <InfoBlock title='Difficulty' content={`${block?.difficulty}`} />
              <InfoBlock title='Total Difficulty' highlight content={`${block?.totalDifficulty}`} />
              <InfoBlock title='Size' content={`${block?.size}`} />
              <InfoBlock title='Gas Used' highlight content={`${numberWithCommas(block?.gasUsed || 0)}`} />
              <InfoBlock title='Gas Limit' content={`${numberWithCommas(block?.gasLimit || 0)}`} />
              <InfoBlock title='Base Fee Per Gas' highlight content={`${numberWithCommas(block?.baseFeePerGas || 0)}`} />
              <InfoBlock title='Hash' content={`${block?.hash}`} />
              <InfoBlock title='Parent Hash' highlight content={() => <Link href={`/block/${block?.parentHash}`}>{block?.parentHash}</Link>} />
              <InfoBlock title='State Root' content={`${block?.stateRoot}`} />
            </>}
          </BlockContainer>
        </Col>
      </Row>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  return {
    props: { number: query.number },
  };
};
export default BlockDetail;
