import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Items from './Components/Items'
import "./style.css"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items />}/>
        <Route path='/' element={<Item />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
