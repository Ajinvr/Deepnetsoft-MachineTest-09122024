import React, { useState } from "react";
import "./header.css";
import logo from "../assets/Logo.png"
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-div">
        
          <img  src={logo} alt="Deepnetsoft logo" />
          
          <div>
          <a className="logo-text"> <a>deep</a> net</a>
          <br />
          <a className="logo-text-2">soft</a>
          </div>
        
        </div>

        
        <div className="logo-div-md">
           <img  src={logo} alt="Deepnetsoft logo" />
        </div>
          

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a>Home</a>
          <a href="/menu/6757802d1e6b43cf3986cafa">Menu</a>
          <a>MAKE A RESERVATION</a>
          <a>Contact us</a>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
