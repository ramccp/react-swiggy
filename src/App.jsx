import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { useState } from 'react'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
