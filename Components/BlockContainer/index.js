import { useState } from 'react'
import './style.scss'

const BlockContainer = ({ children, maxHeight = '100%', className = '', header = null, tabs = null, contents = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className={`t-block-container ${className}`}>
      {!!header && !tabs && <div className='t-header-block'>
        <div className='left'>{header && header?.left && header?.left()}</div>
        <div className='middle'>{header && header?.middle && header?.middle()}</div>
        <div className='right'>{header && header?.right && header?.right()}</div>
      </div>}
      {tabs && <div className='t-header-block'>
        <div className='left'>{header && header?.left && header?.left()}</div>
        <div className='middle'>{header && header?.middle && header?.middle()}</div>
        <div className='right'>{tabs?.map((item, index) => <div onClick={() => setCurrentIndex(index)} className={`tab-item ${index === currentIndex ? 'active' : ''}`} key={item}>{item}</div>)}</div>
      </div>}
      <div className='t-body-block' style={{ maxHeight: `calc(${maxHeight} - ${!!header ? '80px' : '20px'})` }} >
        {contents && contents.length && contents[currentIndex] ? contents[currentIndex]?.() : children}
      </div>
    </div>
  )
}

export default BlockContainer
