import Chip from "Components/Chip"
import InfoBlock from "Components/InfoBlock"
import Link from "Components/Link"
import './style.scss'

const LogInfo = ({ log, index }) => {
  console.log(log)
  return (<div className="t-log-info-container">
    <InfoBlock title={() => <Chip light>{index}</Chip>} style={{ height: 60, display: 'flex', alignItems: 'center' }} />
    <InfoBlock title='Address' highlight content={() => <Link href={`/address/${log?.address}`}>{log?.address}</Link>}/>
    <InfoBlock title='Topics' content={() => (
      log?.topics?.map((topic, index) => <div key={index} className='MT10 MB10' style={{ display: 'flex', alignItems: 'center' }}><Chip style={{ padding: '2px 15px' }} className="MR10">{index}</Chip>{topic}</div>) 
    )}/>
    <InfoBlock title='Data' highlight content={`${log?.data}`} style={{ height: 60, display: 'flex', alignItems: 'center' }}/>
  </div>)
}

export default LogInfo
