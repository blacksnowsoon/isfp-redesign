import React from 'react'
import ReactDOM from 'react-dom/client'

import App, { loader   as appLoader } from './App'
import './index.css';
import { createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import { Error } from './Error'
import Home  from './Components/Home'
import { Product } from './Components/ProductsSection';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    loader: appLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/products/*",
        element: <Product />,
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
