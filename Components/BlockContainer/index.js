import './style.scss'

const BlockContainer = ({ children, maxHeight = '100%', className = '', header = null }) => {
  return (
    <div className={`t-block-container ${className}`}>
      {!!header && <div className='t-header-block'>
        <div className='left'>{header && header?.left && header?.left()}</div>
        <div className='middle'>{header && header?.middle && header?.middle()}</div>
        <div className='right'>{header && header?.right && header?.right()}</div>
      </div>}
      <div className='t-body-block' style={{ maxHeight: `calc(${maxHeight} - ${!!header ? '80px' : '20px'})` }} >
        {children}
      </div>
    </div>
  )
}

export default BlockContainer
