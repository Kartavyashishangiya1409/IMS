import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Items from './Components/Items'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Items />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
