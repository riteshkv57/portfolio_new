import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'

function App() {

  return (
   <div className='app'>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/placeorder' element={<Placeorder />} />
    </Routes>
   </div>
  )
}

export default App
