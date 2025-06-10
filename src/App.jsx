import React from 'react'
import Navabar from './components/Navabar'
import { Outlet } from 'react-router'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'
import './App.css'

const App = () => {
  return (
    <ThemeProvider>
      
      <Navabar/>

      <main className='min-h-screen'>
        <Outlet/>
      </main>

      <Footer/>

    </ThemeProvider>
  )
}

export default App