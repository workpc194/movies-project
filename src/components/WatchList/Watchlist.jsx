import React, { useContext } from 'react'
import { ApiContext } from '../../context/Context'
import { Trash } from 'lucide-react';

const Watchlist = () => {

  const { setWatchlist, watchlist } = useContext(ApiContext)

  if (watchlist.length < 1) {
    return (
      <div className='w-full h-[90%] flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>No Movie Saved</h1>
      </div>
    )
  } else {
    return (
      <div className='w-full h-[90%] p-2 gap-5 flex flex-wrap justify-center overflow-auto scrollbar-none'>
        {watchlist.map(function (elem, idx) {
          return (
            <div key={idx} className='w-72 h-100 shrink-0 rounded-2xl'>
              <div className="w-full h-75 object-cover rounded">
                <img src={elem.image.original} alt={elem.name} className='w-full h-full rounded-2xl' />
                <div id='save' className='w-6 h-6 relative bottom-71 left-63' onClick={() => {
                  setWatchlist(prev => {
                    const newWatchlist = [...prev.slice(0, idx), ...prev.slice(idx + 1)]
                    localStorage.setItem('savedMovies', JSON.stringify(newWatchlist))
                    return newWatchlist;
                  })
                }}>
                  <Trash />
                </div>
              </div>
              <div className='w-full h-25 flex-col justify-center'>
                <h2 className='w-auto h-12 text-3xl font-bold text-center leading-12 overflow-x-auto scrollbar-none'>{elem.name}</h2>
                <div className='w-full h-13 flex items-center justify-evenly'>
                  <h4 className='w-auto text-xl font-semibold'>Rating:{elem.rating.average}</h4>
                  <h4 className='w-auto text-xl font-semibold'>{elem.genres[0]}</h4>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Watchlist