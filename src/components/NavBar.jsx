import React, { useState, useCallback } from "react";
import './NavBar.css';

function NavBar() {
  const [activeLinkId, setActiveLinkId] = useState('');

  const handleLinkClick = useCallback((id) => {
    setActiveLinkId(id);
  }, []);

  const linkClass = (id) => activeLinkId === id ? 'active' : '';

  return (
    <nav>
      <ul className="navbar">
        {['home', 'about', 'projects', 'contacts'].map((id) => (
          <li key={id}>
            <a href={`#${id}`} onClick={() => handleLinkClick(id)} className={linkClass(id)}>
              {id.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
