import React, { useEffect, useState } from 'react'
import './App.css'
import { login, logout } from './store/authSlice'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import {Header,Footer} from './components/index'
import {Outlet} from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else{
          dispatch(logout())
        }
      })
      .finally(()=>{setLoading(false)})
  }, [])

  // if (loading){
  //   return null
  // }
  // else{
  //   return ...App.
  // }

  return !loading ?(
    <div className='min-h-screen flex flex-wrap bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null
  
}

export default App
