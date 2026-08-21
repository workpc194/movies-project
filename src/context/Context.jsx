import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";

export const ApiContext = createContext()

const Context = ({ children }) => {

  const [result, setResult] = useState([])
  const [onSearch, setOnSearch] = useState('')
  const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('savedMovies')) || [])

  const searchCall = async () => {
    const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${onSearch}`)
    const data = response.data
    setResult([])
    setResult(data)
  }

  const apiCall = async () => {
    const response = await axios.get('https://api.tvmaze.com/shows')
    const data = response.data
    setResult(data)
  }

  useEffect(() => {
    searchCall()
  }, [onSearch])

  useEffect(() => {
    apiCall()
  }, [])

  return (
    <>
      <ApiContext.Provider value={{ result, setOnSearch, watchlist, setWatchlist }}>
        {children}
      </ApiContext.Provider>
    </>
  )
}

export default Context