import React from 'react'
import logo from "../assets/bencon-logo.png"
import Navbar from './navbar'
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Header() {
    const [show,  setShow]= useState(false);
  return (
    <header className='header'>
      <div >
        <img src={logo} alt="" className='head-logo' />
        <span>
          <button className='' onClick={() => setShow(!show)}>
                {show ? <IoClose /> : <IoMenu />}
          </button>
        </span>
      </div>
      <nav className={`nav-links ${show ? "open" : ""}`}>
        <Navbar />
      </nav>
      
    </header>
  )
}

export default Header