"use client"

import React from 'react'
import { useProducts } from './hooks/callProducts'
import CountButton from "./components/CountButton/CountButton"
import SearchBar from "./components/SearchBar/SearchBar"
import GitHub from './components/GitHub/GitHub'
import './styles/globals.css'


const App = () => {

  const productsState = useProducts()

  const hasProducts = productsState.length > 0

  return (
    <div className='main-container'>
      <CountButton incrementBy={1} buttonColor={'black'}/>
      <CountButton incrementBy={2} buttonColor={'black'}/>
      <GitHub />
      {hasProducts ?  <SearchBar products={productsState} /> : "Loading..."}
     
    </div>
  )
}


export default App

