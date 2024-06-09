import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import WelcomePage from './Components/WelcomePage.jsx'
import Login from './Components/Login.jsx'
import Register from './Components/Register.jsx'
import Home from './Components/Home.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<WelcomePage />} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />
      <Route path='home' element={<Home />} />
      <Route path='services' element={<Services />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>


)
