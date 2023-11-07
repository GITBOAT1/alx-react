import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '40px', // Define your desired margin here
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputField: {
    marginBottom: '10px',
  },
  button: {
    marginTop: '10px',
  },
});

const Login = () => {
  return (
    <div className={css(styles.login)}>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form className={css(styles.formContainer)}>
          <div className={css(styles.inputField)}>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className={css(styles.inputField)}>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <div className={css(styles.button)}>
            <input type="submit" value="OK" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
