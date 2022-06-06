import LinkNext from "next/link"

const Link = ({ href, children, className = '',...rest }) => <LinkNext href={href} {...rest}><a className={className}>{children}</a></LinkNext>

export default Link