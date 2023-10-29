// Header.js
import React from 'react';
import holberton_logo from '../holberton_logo.png'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </div>
    </header>
  );
};

export default Header;
