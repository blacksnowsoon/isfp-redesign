import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logos/ISFP.png'
export const NavBar = () => {

    return (
    <nav className='nav-bar'>
        
        <div className='contact'>
            <p>📞+(2 03) 429 38 46 | 
                <Link to={"/stafCorner"} title="Staff Corner" > Staff Corner</Link> |
                <Link to={"/contactUs"}>Contact Us</Link>
            </p>
        </div>
        <img src={logo} alt='logo'/>
    </nav>
    )
}


