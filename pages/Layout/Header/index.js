import Link from 'Components/Link'
import Image from 'next/image'
import './style.scss'

const Header = () => {
  return (<div className="header-container">
    <div className="left ML30"><Image src='https://testnet.metheus.network/_next/static/images/methus-f3dcd0e5c93ba7c938d5d8acf1b24eec.png' width={50} height={50} alt='' /><span className='title'>Metheus Scan</span></div>
    <div className="middle"></div>
    <div className="right MR30">
      <Link className='link-header ML30' href={'/'}>Ecosystem</Link>
      <Link className='link-header ML30' href={'/'}>Bridge</Link>
      <Link className='link-header ML30' href={'/'}>Wallet</Link>
      <Link className='link-header ML30' href={'/'}>Explorer</Link>
      <Link className='link-header ML30' href={'/'}>Community</Link>
    </div>
  </div>)
}

export default Header