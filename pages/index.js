/* eslint-disable @next/next/no-img-element */
import { Col, Row } from 'antd'
import { numberWithCommas } from 'common/function'
import BlockContainer from 'Components/BlockContainer'
import Chip from 'Components/Chip'
import InfoBlock from 'Components/InfoBlock'
import Search from 'Components/Search'
import MetamaskServices from 'controller/Web3/metamask'
import images from 'images'
import Image from 'next/image'
import Blocks from 'pages/Components/Blocks'
import Transactions from 'pages/Components/Transactions'
import { useSelector } from 'react-redux'
import TotalTransaction from './Components/TotalTransaction'
import './style.scss'

const Home = () => {
  const lastestBlock = useSelector(state => state.app.lastestBlock)

  const handleAddNewChain = async () => {
    try {
      await MetamaskServices.addNewChain(24052022)
    } catch (error) {
      console.log(error)
    }
  }

  return (<div className='home-container'>
    <div className='top-container ML25 MR25 MT25 MB25'>
      <div className='title-container'>
        <div className='title-wrapper'>
          <div className='sub-title'/>
          <div className='sub-title'>Block explorer for</div>
          <div className='sub-title'/>
        </div>
        <div className='title-wrapper'>
          <div className='sub-title'/>
          <div className='title'>Wraptag Chain</div>
          <div className='sub-title MT10'>ChainId: 24052022</div>
        </div>
      </div>
      <Search />
    </div>
    <Row gutter={50} className='ML25 MR25 MT25' style={{ width: '100%' }}>
      <Col className='MT20' xs={24} md={24} lg={12}>
        <BlockContainer header={{
          left: () => 'Total transaction'
        }}>
          <TotalTransaction />
        </BlockContainer>
      </Col>
      <Col className='MT20' xs={24} md={24} lg={12}>
        <BlockContainer header={{
          left: () => 'Total block'
        }}>
          <div className='total'>{numberWithCommas(lastestBlock?.number || 0)}</div>
        </BlockContainer>
      </Col>
    </Row>
    <Row gutter={50} className='ML25 MR25 MT25 MB25' style={{ width: '100%' }}>
      <Col className='MT20' md={24} lg={12}>
        <Transactions />
      </Col>
      <Col className='MT20' md={24} lg={12}>
        <Blocks />
      </Col>
    </Row>
    <Row gutter={50} className='ML25 MR25 MB25' style={{ width: '100%' }}>
      <Col className='MT20' md={24} lg={24}>
        <BlockContainer header={{
          left: () => 'Chain Info',
          right: () => <Chip onClick={handleAddNewChain} style={{ cursor: 'pointer' }}><Image width={20} height={20} src={images.icMetamask} alt='metamask' /><span className='ML5'>Add Wraptag Chain to Wallet</span></Chip>
        }}>
          <InfoBlock title='Subnet Name' content='Wraptag' />
          <InfoBlock highlight title='Subnet ID' content='A1iV86hr1toCL7y4F6PM263n9fomCLUDDwpqFT2sG9FTCZJCm' />
          <InfoBlock title='Blockchain Name' content='Wraptag' />
          <InfoBlock highlight title='Blockchain ID' content='21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH' />
          <InfoBlock title='Created On' content='2022/05/24 03:44:37' />
          <InfoBlock highlight title='EVM Chain ID' content='53935' />
          <InfoBlock title='VM Name' content='subnetevm' />
          <InfoBlock highlight title='VM ID' content='srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy' />
          <InfoBlock title='RPC URL' content={() => <>
            <p className='MB0'>http://95.179.192.46:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/rpc</p>
            <p className='MB0'>http://107.191.42.165:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/rpc</p>
            <p className='MB0'>http://117.102.210.217:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/rpc</p>
          </>} />
          <InfoBlock highlight title='WS URL' content={() => <>
            <p className='MB0'>ws://95.179.192.46:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/ws</p>
            <p className='MB0'>ws://107.191.42.165:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/ws</p>
            <p className='MB0'>ws://117.102.210.217:9650/ext/bc/21Z7pN9Z6VfmMo8jjhDQYyYJS5MB7MftZSuKrmenhmwADCWWJH/ws</p>
          </>} />
        </BlockContainer>
      </Col>
    </Row>
    <Row gutter={50} className='ML25 MR25 MB50' style={{ width: '100%' }}>
      <Col className='MT20' md={24} lg={24}>
        <BlockContainer header={{
          left: () => 'Wraptag Chain',
        }}>
          <div className='chain-info-tx'>
          Subnet Developers: <span style={{ color: '#3690ff' }}>Bacoor Team</span><br/>
          The vision for the Wrap Tag Chainon the Wrap Tagsubnet is to become the go-to location for community members and projects to launch GameFi and other blockchain gaming experiences in conjunction with the primary offering of Bacoor Team: Crystalvale.
          </div>
        </BlockContainer>
      </Col>
    </Row>
  </div>)
}

export default Home