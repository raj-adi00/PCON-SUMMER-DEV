import { useEffect, useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import { Outlet } from 'react-router-dom'


function App() {
  //  console.log(import.meta.env.VITE_APPWRITE_URL)

  return (
    <>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </>
  )
}

export default App
