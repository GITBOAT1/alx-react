import holberton_logo from '../assets/holberton_logo.png';
import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import { useAppContext } from '../App/AppContext';


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '5px solid red',
    color: 'red',
    padding: '0.5rem 1rem',
  },
  logo: {
    width: '200px',
    height: '200px',
    marginRight: '10px',
  },
  welcomeSection: {
    display: 'flex',
    alignItems: 'center',
  },
  logoutLink: {
    marginLeft: '10px',
    cursor: 'pointer',
    color: 'blue',
    textDecoration: 'underline',
  },
});

const Header = () => {
  const { user, logOut } = useAppContext();

  const handleLogoutClick = () => {
    logOut();
  };

  return (
    <div className={css(styles.header)}>
      <div>
        <img src={holberton_logo} alt="Holberton Logo" className={css(styles.logo)} />
        <h1>School dashboard</h1>
      </div>
      {user.isLoggedIn && (
        <div className={css(styles.welcomeSection)} id="logoutSection">
          Welcome {user.email}
          <span className={css(styles.logoutLink)} onClick={handleLogoutClick}>
            (logout)
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;
