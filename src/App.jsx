import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import EpicBarba from './pages/EpicBarba';
import Login from './components/Login';


//import './App.css'





function App() {
  

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/epicbarba' element = {<EpicBarba/>}></Route>
         <Route path='/login' element = {<Login />}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
