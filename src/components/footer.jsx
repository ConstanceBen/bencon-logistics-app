import React from 'react'
import logofooter from "../assets/bencon-logoDark.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div className='top-footer'>
                <div>
                    <img src={logofooter} alt="" />
                    <p> General Contracting, environmental and oil fikeled services.industrial cleaning, grass clearing and garden care.</p>
                </div>
                <div>
                    <p>
                        <h6>Company</h6>
                        <Link to="/about">About us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/services">Services</Link>
                    </p>
                </div>
                <div>
                    <h6>Services</h6>
                    <Link to="/services">General contracting & Supply </Link>
                    <Link to="/services">Environmental & Oil Field  </Link>
                    <Link to="/services">Industrial cleaning  </Link>
                    <Link to="/services">Grass Clearing</Link>
                </div>
                <div>
                    <h6>Contact</h6>
                    <Link to="/">No.18 Paul Obelley Street</Link>
                    <Link to="/">[+2348039338210]</Link>
                    <Link to="/">[obelleyb@gmail.com]</Link>
                    <Link to="/">Mon-Sat[OPENING HOURS]</Link>
                </div>
            </div>


            <div className='bottom-footer'>
                <p> &copy; 2026 Bencon Logistics. All rights reserved.</p>
                <p>RC[REGISTRATION NUMBER]</p>
            </div>
        </footer>
    )
}

export default Footer