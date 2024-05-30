import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">BB'Z CREW</Link>
      </div>
      <nav className="nav">
        <button className="nav-toggle" onClick={toggleNav}>
          ☰
        </button>
        <ul className={isOpen ? 'nav-open' : ''}>
          <li><Link to="./Home" onClick={toggleNav}>Home</Link></li>
          <li><Link to="./ServicesContent" onClick={toggleNav}>Services</Link></li>
          <li><Link to="./About" onClick={toggleNav}>About Us</Link></li>
          <li><Link to="/contact" onClick={toggleNav}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
