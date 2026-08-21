import { Link } from 'react-router'
import React from 'react'

const NavLinks = () => {
  return (
    <div className='w-40 flex justify-between'>
      <Link to="/">Gallery</Link>
      <Link to="/watchlist">WatchList</Link>
    </div>
  )
}

export default NavLinks