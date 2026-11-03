import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link to="/" className='link'>Home</Link> 
        <Link to="/about" className='link'>About</Link>
        <Link to="/contact" className='link'>Contact</Link>
       <Link to="/services" className='link'>Services</Link>
       <Link className='link header-btn'>Request a quote</Link>
    </nav>
  )
}

export default Navbar