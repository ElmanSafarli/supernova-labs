import React from 'react';
import { Link } from "react-router-dom"

import Sidebar from './sidebar';

const NavBar = () => {

    return (

        <div className="navBar">
            <div className="navBar-content">
                <div className="nav-logo">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/products">Our Product</Link></li>
                    </ul>
                </div>
                <div className="nav-btn">
                    <Link to="/contact"><button>Contact Us</button></Link>
                </div>
                <Sidebar />
            </div>
        </div>

    );
};

export default NavBar;
