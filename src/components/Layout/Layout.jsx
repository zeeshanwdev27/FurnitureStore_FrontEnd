import React from 'react'
import MainNavbar from '../Navbar/MainNavbar.jsx'
import Footer from '../Footer/Footer.jsx'

function Layout({children}) {
  return (
    <>
    <MainNavbar/>
    <main>{children}</main>
    <Footer/>
      
    </>
  )
}

export default Layout
