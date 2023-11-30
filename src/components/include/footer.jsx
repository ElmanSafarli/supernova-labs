import React from 'react';
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <footer>
            <div class="footer">
                <div class="footer-content">
                    <div class="footer-top">
                        <div class="footer-left">
                            <div class="footer-log"><img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" /></div>
                            <div class="footer-title">Supernova Labs</div>
                            <div class="footer-text">The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                below
                                for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et ...</div>
                            {/* <div class="footer-form">
                                <form action="">
                                    <input type="text" placeholder="Your email" />
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div> */}
                        </div>
                        <div class="footer-item-group">
                            <div class="footer-item-title">Sitemap</div>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/products">Our Product</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <div class="footer-hr"></div>
                        <p>© Supernova Labs. All rights reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
