import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Update the URL without reloading the page
      window.history.pushState(null, "", `#${targetId}`);
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false); // Close menu on mobile after click
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <span className="navbar-title">My Jewelry Retouch</span>
      </div>

      {/* Navbar Links */}
      <div className="navbar-middle">
        <ul className={isOpen ? "navbar-links open" : "navbar-links"}>
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleLinkClick}>
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Free Trial Section */}
      <div className="navbar-right">
        <a href="#trial" className="cta-button" onClick={handleLinkClick}>
          Get a Free Trial →
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={isOpen ? "line line1 open" : "line line1"}></div>
          <div className={isOpen ? "line line2 open" : "line line2"}></div>
          <div className={isOpen ? "line line3 open" : "line line3"}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
