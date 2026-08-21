import React, { useContext, useState } from 'react'
import { Search } from 'lucide-react'
import { ApiContext } from '../../context/Context'

const NavSearch = () => {

  const { setOnSearch } = useContext(ApiContext)

  const [search, setSearch] = useState('')

  return (
    <div className='bg-white w-72 h-9 border-2 rounded flex text-black'>
      <input type="text" id="inp" placeholder='Search Movie' className='bg-transparent border-none w-60 h-full text-lg px-2' onChange={(e) => {
        let searchValue = e.target.value.toLocaleLowerCase()
        setSearch(searchValue)
      }} />
      <span id='searchBtn' onClick={() => {
        setOnSearch(search)
      }} className='w-12 h-full flex items-center justify-center'><Search /></span>
    </div>
  )
}

export default NavSearch