"use client"

import React from 'react'
import { useProducts } from './hooks/callProducts'
import CountButton from "./components/CountButton/CountButton"
import SearchBar from "./components/SearchBar/SearchBar"
import Button from "./components/Button/Button"


const App = () => {

  const productsState = useProducts()

  const hasProducts = productsState.length > 0

  return (
    <div>
      <Button>hello world</Button>
      <CountButton incrementBy={1}/>
      <CountButton incrementBy={5}/>
      {hasProducts ?  <SearchBar products={productsState} /> : "Loading..."}
     
    </div>
  )
}


export default App

