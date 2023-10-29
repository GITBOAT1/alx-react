// Login.js
import React from 'react';
import './Login.css'

const Login = () => {
  return (
    <React.Fragment>
        <p>Login to access the full dashboard</p>
        <form>
          <label for="email">Email: </label>
          <input type="text" id="email" value='email'/>
          <label for="email"> Password: </label>
          <input type="password" id="email" value='password'/> 
          <input type="submit" value="ok"></input>
        </form>

    </React.Fragment>
  );
};

export default Login;
