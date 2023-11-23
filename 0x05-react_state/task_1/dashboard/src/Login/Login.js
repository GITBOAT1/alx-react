import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '40px', // Define your desired margin here
  },
});

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
    console.log('Login form submitted. User is now logged in.');
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    updateEnableSubmit(event.target.value, password);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    updateEnableSubmit(email, event.target.value);
  };

  const updateEnableSubmit = (newEmail, newPassword) => {
    setEnableSubmit(newEmail.trim() !== '' && newPassword.trim() !== '');
  };

  return (
    <div className={css(styles.login)}>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handleChangePassword}
          />
          <input type="submit" value="Submit" disabled={!enableSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
