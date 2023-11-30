// Home page

import React from 'react';
import NavBar from '../include/navBar';
import Footer from '../include/footer';
import { productData } from '../../constants';

const Products = () => {

    return (
        <div>
            <header>
                <nav>
                    <NavBar />
                </nav>
                <div className="producHeader">
                    <div className="producHeader-left">
                        <h1>Explore our apps</h1>
                        <p>Explore our suite of applications designed to simplify and enrich your life. Whether you seek productivity tools, entertainment, or utilities, our apps are crafted to seamlessly integrate into your routine, making technology a helpful ally.</p>
                    </div>
                    <div className="producHeader-right">
                        <img src={process.env.PUBLIC_URL + '/product.png'} alt="product" />
                    </div>
                </div>
            </header >
            <div class="products">
                <div class="products-content">
                    <div class="product-section">Supernova Labs</div>
                    <div class="product-title">Our products</div>
                    <div className="product-box-group">
                        {productData.map((product, index) => (
                            <div key={index} className="product-box">
                                <div className="product-img"></div>
                                <div className="product-info">
                                    <div className="product-box-top">
                                        <div className="product-box-title">{product.title}</div>
                                        <div className="product-box-navigate"><img src={process.env.PUBLIC_URL + '/right-arrow.png'} alt="arrow" /></div>
                                    </div>
                                    <div className="product-box-text">{product.text}</div>
                                    <div className="product-box-tags">
                                        {product.tags.map((tag, tagIndex) => (
                                            <div key={tagIndex} className="product-tag">{tag}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default Products;
