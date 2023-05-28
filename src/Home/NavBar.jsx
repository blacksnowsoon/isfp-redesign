import React, {
  useCallback,
  useRef,
  useContext,
} from "react";
import { HashLink } from "react-router-hash-link";
import logo from "/assets/imgs/logos/ISFP.png";
import { NavigationLink } from "../Components/NavigationLink";
import { AppContext } from "../App";
import { SliderButton } from "../Components/SliderButton";
import {
  lowerCaseReplaceSpace,
  themeChoosed,
  setOffsetY,
} from "../Utiles/UtilesMethods";
import { UseOutSideClick } from "../Hooks/UseOutSideClick";

export const NavBar = ({ navProps }) => {
  const { activeNavLink, setActiveNavLink } = useContext(AppContext);
  const menuRef = useRef();

  const toggleMenu = ()=> {
    if (!menuRef.current.classList.contains("grap-down")) return
    menuRef.current.classList.toggle("grap-down");
  }
  const toggleBtn = UseOutSideClick(toggleMenu)

  // track active link
  const handleActiveLink = (e) => {
    const link = e.target.hash.slice(1);
    setActiveNavLink(link);
  };
  // showing the menu
  const handleToggleBtnClick = (e) => {
    menuRef.current.classList.toggle("grap-down");
    e.stopPropagation()
  };
  // chang between light and dark mode
  const handleThemeChange = (e) => {
    const mode = e.target.className;
    themeChoosed(mode);
    e.preventDefault();
  };

  const listFragment = useCallback(() => {
    // return a plane menu link or menu link with nested menu
    return Object.keys(navProps).map((key) => {
      const link = lowerCaseReplaceSpace(key);
      return (
        <MenuItem 
        isActive={activeNavLink === link} 
        event={handleActiveLink}
        value={navProps[key]}
        name={key} 
        link={link}
        key={key + Math.random()}/>
      );
    });
  }, [navProps]);

  return (
    <nav ref={(node) => setOffsetY(node)} className="nav-bar">
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
        <div className="theme-actions">
          <SliderButton event={handleThemeChange} />
        </div>
      </div>
      <hr></hr>
      <div  className="bottom-bar">
        <div className="bottom-bar-left">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button ref={toggleBtn} className="menu-btn" onClick={handleToggleBtnClick}>
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

const MenuItem = (props) => {
  if (!Array.isArray(props?.value)) {
    return (
      <li
        onClick={props?.event}
        className={`link-container ${props?.isActive ? "active-link" : ""}`}
      >
        <HashLink className={"menu-link"} to={`/#${props?.link}`}>
          {props?.name}
        </HashLink>
      </li>
    );
  } else {
    // else will return a local page link with nested menu
    return (
      <li
        onClick={props?.event}
        className={`link-container ${props?.isActive ? "active-link" : ""}`}>
        <HashLink
          className={"menu-link"}
          to={`/#${props?.link}` || navigate("/")}>
          {props?.name}
        </HashLink>
        <ul className="nested-menu">
          {props?.value.map((item) => {
            return (
              <li className="link-container" key={item + Math.random()}>
                <NavigationLink
                  className={"menu-link"}
                  to={`/${props?.link}/${lowerCaseReplaceSpace(item)}`}
                  caption={item}
                />
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
};
