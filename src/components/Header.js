// src/components/Header.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((previous) => {
      const newState = !previous;
      document.body.style.overflow = newState ? "hidden" : "auto";
      return newState;
    });
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Halden University logo" />
          </Link>
        </div>
        <div className="header__navbar">
          <button
            className={`header__navbar-toggle ${isMenuOpen ? "is-open" : ""}`}
            id="menuToggle"
            aria-controls="mainMenu"
            aria-expanded={isMenuOpen ? "true" : "false"}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`header__navbar-links ${isMenuOpen ? "is-open" : ""}`} id="mainMenu" aria-hidden={!isMenuOpen}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/study">Study</Link>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">News and events</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
