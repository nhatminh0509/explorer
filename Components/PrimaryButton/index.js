import { Button } from "antd"
import './style.scss'
const PrimaryButton = ({ children, loading, onClick, className, style, ...rest }) => {
  return <Button loading={loading} onClick={onClick} className={`${className} t-button-container`} style={style} {...rest}>{children}</Button>
}

export default PrimaryButton
