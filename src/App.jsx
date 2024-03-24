import React from 'react'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import AllProducts from './components/AllProducts/AllProducts'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
