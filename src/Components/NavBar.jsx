import React, { useCallback, useEffect, useRef } from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/imgs/logos/ISFP.png'
export const NavBar = ({navProps}) => {
  const navigate = useNavigate();
  const menuRef = useRef();
  const navRef = useRef()
  /* useing the call back to avoid re-render 
   * the menu unless the props has modified
  */
  const listFragment = useCallback(()=> {
  /** if the value of the given key has an Array will return 
   * a nested ul else will return a page Link.
  */
  const list = Object.keys(navProps).map(key => {
    // if the prop has value of an array will return a local page link
    if (!Array.isArray(navProps[key])) {
      return (
      <li className='link-container' key={key + Math.random()}>
        <HashLink className={'menu-link'} to={`/#${key.toLowerCase().replaceAll(" ", "")}`}>
          {key}
        </HashLink>
      </li>)
    } else {
      // else will return a local page link with nested menu
      return (
        <li className='link-container' key={key + Math.random()}>
          <HashLink className={'menu-link'} to={`/#${key.toLowerCase().replaceAll(" ", "")}` || navigate("/")}>
          {key}
          </HashLink>
          <ul className='nested-menu'>
            {
              navProps[key].map(item => {
              return (
                <li className='link-container' key={item + Math.random()}>
                <NavLink className={'menu-link'} to={`/${key.toLowerCase().replaceAll(" ", "")}/${item.toLowerCase().replaceAll(" ", "")}`}>
                {item}
                </NavLink>
              </li> )
              })
            }
          </ul>
        </li>
      )
    }
  })
  return list;
  },[navProps]);

  // showing the menu
  const toggleMenu = (e)=> {
    e.preventDefault()
    menuRef.current.classList.toggle("grap-down")
  }
  const calcNavOffSet = ()=>{
    const nav = navRef.current;
    const rectBounds = nav.getBoundingClientRect()
    document.documentElement.style
    .setProperty('--offset-top', rectBounds.height + "px");
  }
  useEffect(()=>{
    calcNavOffSet()
    return()=>{
      calcNavOffSet()
    }
  }, [])
  return (
    <nav ref={navRef} className='nav-bar' onLoadedData={calcNavOffSet}>
      <div className=' bar1'>
            <p>
              <a href='tel:+2034293846' title='call ISFP'>
                📞+(2 03) 429 38 46 | 
              </a>  
              <NavLink to={"https://www.isfpegypt.com/beta/./index.php/staff-corner2"} title="Staff Corner">
                  Staff Corner
                </NavLink> |
              <NavLink to={"/contactUs"} title='contact ISFP'>
                Contact Us
              </NavLink>
            </p>
      </div>
      <div className='bar2'>
        <div className='bar2-left'>
          <a href='/'>
          <img className='logo' src={logo} alt='logo'/>
          </a>
          
          <button className='menu-btn' onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/>
            </svg>
          </button> 
        </div>
        <ul ref={menuRef} className='menu' data-toggle={"menu"}>
            {
              listFragment()
            }

        </ul>  
      </div>
    </nav>
    )
}


