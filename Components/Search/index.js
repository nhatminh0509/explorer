/* eslint-disable @next/next/no-img-element */
import { Input } from 'antd'
import images from 'images'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import './style.scss'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()
  
  const onSubmit = () => {
    const search = searchText?.trim()
    const regexpTx = /[0-9a-zA-Z]{66}?/
    const regexpAddr = /^(0x)?[0-9a-fA-F]{40}$/
    const regexpBlock = /[0-9]+?/
    let to = null
    if (regexpAddr.test(search)) {
      router.push(`/address/${search}`)
    } else if (regexpTx.test(search)) {
      router.push(`/tx/${search}`)
    } else if (regexpBlock.test(search)) {
      router.push(`/block/${search}`)
    }
  }

  return (<div className='t-search-container'>
    <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyUp={(e) => e.keyCode === 13 && onSubmit()} prefix={<Image src={images.icSearch} width={20} height={20} alt='search' />} placeholder='Search...' />
  </div>)
}

export default Search