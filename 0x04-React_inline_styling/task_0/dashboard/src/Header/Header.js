import holberton_logo from '../assets/holberton_logo.png'
import { StyleSheet, css } from 'aphrodite';
import React from 'react';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(2px + 2vmin)',
    borderBottom: '5px solid red',
    color: 'red',
    
  },
  logo: {
    width: '200px',
    height: '200px',
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


