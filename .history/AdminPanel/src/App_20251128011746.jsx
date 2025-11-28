import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Items from './Components/Items'
import "./style.css"
import Dashboard from './Components/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items />}/>
        <Route path='/' element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
