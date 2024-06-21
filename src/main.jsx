import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TelaInicial from './views/TelaInicial/TelaInicial.jsx'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <TelaInicial/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>,
)
