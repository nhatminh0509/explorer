import './style.scss'

const Chip = ({ children, light = false, className = '', ...rest }) => {
  return (<div className={`t-chip-container ${light ? 'light' : 'dark'} ${className}`} {...rest}>
    {children}
  </div>)
}

export default Chip