import React, { useState, useCallback } from "react";
import './NavBar.css';
import Hamburger from 'hamburger-react'

function NavBar() {
  const [activeLinkId, setActiveLinkId] = useState('');
  const [isOpen, setOpen] = useState(false);
  const menu = ['home', 'about', 'projects', 'links'];

  const handleLinkClick = useCallback((id) => {
    setActiveLinkId(id);
  }, []);

  const linkClass = (id) => activeLinkId === id ? 'active' : '';

  return (
    <nav>
      <ul className="navbar">
        {menu.map((id) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => handleLinkClick(id)} className={linkClass(id)}>
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger">
        <Hamburger color="white" className="hamburger-btn" onToggle={toggled => {
          setOpen(toggled);
        }} />
        {isOpen && 
        
        <ul className="hamburger-menu">

          {menu.map((id) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => handleLinkClick(id)} className={linkClass(id)}>
              {id.toUpperCase()}
            </a>
          </li>
          ))}
        </ul>}
      </div>

    </nav>
  );
}

export default NavBar;
