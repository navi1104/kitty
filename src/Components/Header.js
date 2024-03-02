import React from 'react';
import './styles/Header.css';
import logo from '../images/logo.png'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="header__search">
                <input type="text" placeholder="Search" />
                <FaSearch className="search-icon" />
            </div>
            <div className="header__actions">
                <FaUser className="action-icon" />
                <FaShoppingCart className="action-icon" />
                <a href="/" className="home-button">Home</a>
            </div>
        </header>
    );
}

export default Header;
