// AppRouter.jsx

import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from '../pages/home';
import About from '../pages/about';
import Contacts from '../pages/Contacts';
import Products from '../pages/Products';


const Navigate = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    );
};

export default Navigate;
