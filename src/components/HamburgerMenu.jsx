import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenu() {
  const hamburger = useRef();
  const overlay = useRef();
  const menu = useRef();

  function navToggle() {
    hamburger.current.classList.toggle("open");
    overlay.current.classList.toggle("overlay-show");
    menu.current.classList.toggle("show-menu");
    document.body.classList.toggle("stop-scrolling");
  }

  function closeMenu() {
    hamburger.current.classList.remove("open");
    menu.current.classList.remove("show-menu");
    overlay.current.classList.remove("overlay-show");
    document.body.classList.toggle("stop-scrolling");
  }
  return (
    <>
      <div ref={overlay}></div>
      <button
        className="hamburger"
        type="button"
        ref={hamburger}
        onClick={navToggle}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
      {/* Menu */}
      <div className="mobile-main-menu" ref={menu}>
        <ul>
          <li>
            <NavLink
              className="mobile-main-menu-link"
              to="/"
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-main-menu-link"
              to="/generate-image"
              onClick={closeMenu}
            >
              Generate Image
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-main-menu-link"
              to="/edit-image"
              onClick={closeMenu}
            >
              Edit Image
            </NavLink>
          </li>
          <li>
            <NavLink
              className="mobile-main-menu-link"
              to="/variation-image"
              onClick={closeMenu}
            >
              Variation Image
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
