import React from 'react'
import logo from "../assets/bencon-logo.png"
import Navbar from './navbar'

function Header() {
  return (
    <header className='header'>
      <div >
        <img src={logo} alt="" className='head-logo' />
      </div>
      <Navbar />
    </header>
  )
}

export default Header