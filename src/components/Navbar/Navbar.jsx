import React from 'react'
import NavLogo from './NavLogo'
import NavSearch from './NavSearch'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='w-full h-[9%] px-5 flex justify-between items-center '>
      <NavLogo />
      <NavSearch />
      <NavLinks />
    </div>
  )
}

export default Navbar