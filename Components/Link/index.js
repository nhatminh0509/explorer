import LinkNext from "next/link"

const Link = ({ href, children }) => <LinkNext href={href}><a>{children}</a></LinkNext>

export default Link