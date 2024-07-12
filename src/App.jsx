import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import EpicBarba from './pages/EpicBarba';
import Login from './components/Login';
import Products from './pages/Products';
import Nosotros from './pages/Nosotros';
import { ProductProvider } from './context/ProductContext';


//import './App.css'





function App() {


  return (
    <>
      <NavBar />
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<EpicBarba />}></Route>
          <Route path='/allproducts' element={<Products />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </ProductProvider>
      <Footer />
    </>
  )
}

export default App
