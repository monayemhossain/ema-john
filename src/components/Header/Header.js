import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../images/logo.png";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
        <img src={ logo} className="logoStyle" alt="logo" />
        <nav>
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory"> Manage Inventory Here</a>
           </nav>
        </div>
    );
};

export default Header;