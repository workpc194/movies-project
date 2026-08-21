import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router'
import Gallery from './components/Gallery/Gallery'
import Watchlist from './components/WatchList/Watchlist'

const App = () => {
  return (
    <div className='w-screen h-screen bg-black text-white scrollbar-none'>
      <Navbar />
      <hr className='h-1' />
      <Routes>
        <Route path='/' element={<Gallery />} />
        <Route path='/watchlist' element={<Watchlist />} />
      </Routes>
    </div>
  )
}

export default App