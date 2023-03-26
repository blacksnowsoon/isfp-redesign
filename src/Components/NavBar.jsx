import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/imgs/logos/ISFP.png'
export const NavBar = () => {

  return (
    <nav className='nav-bar'>
      <div className=' bar1'>
            <p>📞+(2 03) 429 38 46 | 
                <Link to={"/stafCorner"} title="Staff Corner" > Staff Corner</Link> |
                <Link to={"/contactUs"}>Contact Us</Link>
            </p>
      </div>
      <div className='bar2'>
        <div >
        <img className='logo' src={logo} alt='logo'/>
        <button className='menu-btn hide'>🪗🏠</button> 
        </div>

        <ul className='menu' data-toggle={"menu"}>
            <li className='nested-menu'>
                Corporate
              <ul className='nested-ul hide'>
                <li>OverView</li>
                <li>Board Members</li>
                <li>Clients</li>
              </ul>
            </li>
            <li>
              <Link >Products</Link>
            </li>
            <li>
              <Link>Services</Link>
            </li>
            <li>
              <Link>Projects</Link>
            </li>
            <li>
              <Link>News & Events</Link>
            </li>

        </ul>  
      </div>
    </nav>
    )
}


