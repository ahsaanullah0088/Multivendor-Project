import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div className='px-4 sm:px-[5w] md:px-[7w] lg:px-[10w] xl:px-[15w] 2xl:px-[20w]'>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/collection' element = {<Collections/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
        <Route path = '/product' element = {<Product/>}/>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path = '/place-order' element = {<PlaceOrder/>}/>
        <Route path = '/orders' element = {<Orders/>}/>
      </Routes>
    </div>
  )
}

export default App
