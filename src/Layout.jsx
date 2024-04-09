import React from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router'
import Footer from './pages/Footer'

function Layout() {
  return (
   <>
   <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
   </>
  )
}

export default Layout
