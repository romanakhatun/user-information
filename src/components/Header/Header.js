import React from 'react';
import logo from './logo.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav">

                </div>
            </header>
        </div>
    );
};

export default Header;