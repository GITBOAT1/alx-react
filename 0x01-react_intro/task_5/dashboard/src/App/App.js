import React from 'react';
import holberton_logo from '../assets/holberton_logo.png'
import './App.css';
import { getFullYear, getFooterCopy } from '../utils/utils.js'


function App() {
  return (
    <div>
      <div className="App-header">
        <img src={holberton_logo} alt="Holberton Logo" />
      <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input type="text" id="email" value='email'/>
          <label for="email"> Password: </label>
          <input type="password" id="email" value='password'/> 
          <input type="submit" value="ok"></input>
        </form>
      </div>
      <div className="App-footer">
        <p> Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
