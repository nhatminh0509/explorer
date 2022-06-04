import { Router } from 'routes'
import './style.scss'

const Link = ({ href = '', children }) => {
  const onClick = () => {
    Router.pushRoute(href)
  }
  return <div className='t-link-container' onClick={onClick} >
    {children}
  </div>
}

export default Link
