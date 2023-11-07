import holberton_logo from '../assets/holberton_logo.png'
import './Header.css'
import React from 'react';


const Header = () => {
    return (
        <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
      </div>
    );
}

export default Header;

