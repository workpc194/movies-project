import React, { useContext, useState } from 'react'
import { ApiContext } from '../../context/Context'
import { Bookmark } from 'lucide-react'

const Gallery = () => {

    const { result, setWatchlist, watchlist } = useContext(ApiContext)

    return (
        <div className='w-full h-[90%] p-2 gap-5 flex flex-wrap justify-center overflow-auto scrollbar-none'>
            {result.map(function (elem, idx) {
                if (elem.show) {
                    return (
                        <div key={idx} className='w-72 h-100 shrink-0 rounded-2xl'>
                            <div className="w-full h-75 object-cover rounded">
                                <img src={elem.show.image.original} alt={elem.show.name} className='w-full h-full rounded-2xl' />
                                <div onClick={() => {
                                    setWatchlist(prev => {
                                        const newwatchlist = [...prev, { ...result[idx].show }]
                                        localStorage.setItem('savedMovies', JSON.stringify(newwatchlist))
                                        return newwatchlist;
                                    })
                                }} className='w-6 h-6 relative bottom-71 left-63'>
                                    <Bookmark />
                                </div>
                            </div>
                            <div className='w-full h-25 flex-col justify-center'>
                                <h2 className='w-auto h-12 text-3xl font-bold text-center leading-12 overflow-x-auto scrollbar-none'>{elem.show.name}</h2>
                                <div className='w-full h-13 flex items-center justify-evenly'>
                                    <h4 className='w-auto text-xl font-semibold'>Rating:{elem.show.rating.average}</h4>
                                    <h4 className='w-auto text-xl font-semibold'>{elem.show.genres[0]}</h4>
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div key={idx} className='w-72 h-100 shrink-0 rounded-2xl'>
                            <div className="w-full h-75 object-cover rounded">
                                <img src={elem.image.original} alt={elem.name} className='w-full h-full rounded-2xl' />
                                <div onClick={() => {
                                    setWatchlist(prev => {
                                        const newWatchlist = [...prev, { ...result[idx] }]
                                        localStorage.setItem('savedMovies', JSON.stringify(newWatchlist))
                                        return newWatchlist;
                                    })
                                }} className='w-6 h-6 relative bottom-71 left-63'>
                                    <Bookmark />
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
                }
            })}
        </div>
    )
}

export default Gallery