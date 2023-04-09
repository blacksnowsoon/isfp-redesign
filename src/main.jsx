import React from 'react'
import ReactDOM from 'react-dom/client'

import App, { loader   as appLoader } from './App'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Error } from './Error'
import Home  from './Components/Home'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
