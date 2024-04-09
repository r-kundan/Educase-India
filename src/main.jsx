import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
  
     <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>}/>
    </Route>
   
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
