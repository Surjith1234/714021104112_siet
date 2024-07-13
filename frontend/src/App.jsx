import { useState } from 'react'
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import ProductList from './pages/ProductList'
function App() {
 
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path="/product/:productId" element={<ProductList/>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
