import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
