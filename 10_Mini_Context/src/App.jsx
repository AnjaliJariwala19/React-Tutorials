import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
      <h1>Context API - React </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
