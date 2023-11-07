import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>
            <form>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" placeholder="Enter your email" />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" placeholder="Enter your password" />
                <input type="submit" value="OK" />
            </form>
        </div>
    );
}

export default Login;
