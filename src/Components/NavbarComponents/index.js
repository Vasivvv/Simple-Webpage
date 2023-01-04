import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
    return (
        <>
            <div className='nav-container'>
                <nav>
                    <div className='nav-left'>
                        <b><NavLink to={'/'}>Start Bootstrap</NavLink></b>
                    </div>
                    <div className='nav-right'>
                        <ul>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'}>About</NavLink>
                            </li>
                            <li>
                                <i class="fa-brands fa-github"></i>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar