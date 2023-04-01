import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.scss'
import { NavBar } from './Components/NavBar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Components/Footer'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
