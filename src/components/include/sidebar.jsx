// Logo

import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='sidebar' id="sidebar">
      <div className="menu-group" onClick={toggleSidebar}>
        <div className="menu" id="menu"></div>
        <div className="menu" id="menu"></div>
        <div className="menu" id="menu"></div>
      </div>

      <div id="active" className={`action-menu ${isActive ? 'active' : ''}`}>
        <div className="sidebar-logo">
          <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">Our Product</Link></li>
        </ul>
        <div className="sidebar-btn">
          <Link to="/contact"><button>Contact Us</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
