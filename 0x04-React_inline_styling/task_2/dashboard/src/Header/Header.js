import holberton_logo from '../assets/holberton_logo.png'
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0354B',
    color: 'white',
    padding: '0.5rem 1rem',
  },
  logo: {
    width: '150px',
    height: '50px',
    marginRight: '10px',
  },
});


const Header = () => {
  return (
    <div className={css(styles.header)}>
      <img src={holberton_logo} alt="Holberton Logo" className={css(styles.logo)} />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;


