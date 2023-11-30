// Home page

import React from 'react';
import NavBar from '../include/navBar';
import Header from '../include/header';
import About from '../include/about';
import Footer from '../include/footer';

const Home = () => {

    return (
        <div>
            <header>
                <nav>
                    <NavBar />
                </nav>
                <Header />
            </header >
            <About />
            <Footer />
        </div>
    );
};

export default Home;
