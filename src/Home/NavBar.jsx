import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
} from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "/assets/imgs/logos/ISFP.png";
import { NavigationLink } from "../Components/NavigationLink";
import { AppContext } from "../App";
import { SliderButton } from "../Components/SliderButton";
import { lowerCaseReplaceSpace } from '../API'

export const NavBar = ({ navProps }) => {
  const { theme, setTheme, activeNavLink, setActiveNavLink } =
    useContext(AppContext);
  const navigate = useNavigate();
  const menuRef = useRef();
  const navRef = useRef();

  const handleActiveLink = (e) => {
    const link = e.target.hash.slice(1);
    setActiveNavLink(link);
  };
  // showing the menu
  const toggleMenu = (e) => {
    e.preventDefault();
    menuRef.current.classList.toggle("grap-down");
  };
  const handleThemeChange = (e) => {
    const root = document.querySelector(":root")
    switch (e.target.value) {
      case "0":
        setTheme("light");
        root.style.setProperty('--color', "hsl(0, 0%, 10%)")
        root.style.setProperty('--background-color', "hsl(0, 0%, 100%)")
        break;
      case "1":
        setTheme("dark");
        root.style.setProperty('--color', "hsl(0 ,100% ,100% , var(--transparency-75))")
        root.style.setProperty('--background-color', " hsl(0, 0%, 14%, var(--transparency-1))")
        break;
      default:
        break;
    }
  };
  // calc the nav offsetX to set the margin top
  const calcNavOffSetY = () => {
    const nav = navRef.current;
    const rectBounds = nav.getBoundingClientRect();
    document.documentElement.style.setProperty(
      "--offset-top",
      rectBounds.height + "px"
    );
  };

  const listFragment = useCallback(() => {
    /** if the value of the given key has an Array will return
     * a nested ul else will return a section Link.
     */
    return Object.keys(navProps).map((key) => {
      
      const link = lowerCaseReplaceSpace(key);
      // if the prop has value of an array will return a local page link
      if (!Array.isArray(navProps[key])) {
        return (
          <li
            onClick={handleActiveLink}
            className={`link-container ${
              activeNavLink === link ? "active-link" : ""
            }`}
            key={key + Math.random()}
          >
            <HashLink className={"menu-link"} to={`/#${link}`}>
              {key}
            </HashLink>
          </li>
        );
      } else {
        // else will return a local page link with nested menu
        return (
          <li
            onClick={handleActiveLink}
            className={`link-container ${
              activeNavLink === link ? "active-link" : ""
            }`}
            key={key + Math.random()}
          >
            <HashLink className={"menu-link"} to={`/#${link}` || navigate("/")}>
              {key}
            </HashLink>
            <ul className="nested-menu">
              {navProps[key].map((item) => {
                return (
                  <li className="link-container" key={item + Math.random()}>
                    <NavigationLink
                      className={"menu-link"}
                      to={`/${link}/${lowerCaseReplaceSpace(item)}`}
                      caption={item}
                    />
                  </li>
                );
              })}
            </ul>
          </li>
        );
      }
    });
  }, [navProps]);

  useEffect(() => {
    if(navRef) calcNavOffSetY();
    return () => {
      if(navRef) calcNavOffSetY();
    };
  }, [theme]);

  return (
    <nav ref={navRef} className="nav-bar" onLoadedData={calcNavOffSetY}>
      <div className=" top-bar">
        <div className="contacts">
          <NavigationLink
            to="tel:+2034293846"
            title="call ISFP"
            caption={"📞+(2 03) 429 38 46"}
          />
          <NavigationLink
            to={"https://www.isfpegypt.com/beta/./index.php/staff-corner2"}
            caption="Staff Corner"
            title={"staff corner"}
          />
          <NavigationLink
            to={"/contactUs"}
            title="contact ISFP"
            caption={"Contact Us"}
          />
        </div>
        <div>
          <SliderButton onChangeValue={handleThemeChange} />
        </div>
      </div>
      <hr></hr>
      <div className="bottom-bar">
        <div className="bottom-bar-left">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button className="menu-btn" onClick={toggleMenu}>
            {/* menu icon svg */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
              <path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" />
            </svg>
          </button>
        </div>
        <ul ref={menuRef} className="menu" data-toggle={"menu"}>
          {listFragment()}
        </ul>
      </div>
    </nav>
  );
};


