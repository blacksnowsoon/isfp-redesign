import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { NavBar } from './Components/NavBar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
