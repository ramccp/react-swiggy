import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RestaurantContainer from './components/RestaurantContainer'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <RestaurantContainer/>
    <Footer/>
    </>
  )
}

export default App
