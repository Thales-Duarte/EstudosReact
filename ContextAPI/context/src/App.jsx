import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CounterContextProvider } from './context/CounterContext';
import NavBar from './components/NavBar'
import About from './pages/About'
import Home from './pages/Home'
import Info from './pages/Info'
import './App.css'

function App() {


  return (
    <>
      <div>
        <h1>Context API</h1>
        <div className=''>
          <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element ={<Home/>}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/info' element ={<Info/>}/>
          </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
